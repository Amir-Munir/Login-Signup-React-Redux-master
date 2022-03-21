import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import ReactModal from "react-modal"

import { getScore, loadQuiz, stateReset } from "../Store/Actions/Actions"

export const QuizSetting = () => {
  const quizData = useSelector((state) =>
    state.quizData.loadQuiz.data ? state.quizData.loadQuiz.data : []
  )
  const finalScore = useSelector( state => state.quizData.score ? state.quizData.score : 0)
  
  const [categoryType, setCategoryType] = useState()
  const [difficultyType, setDifficultyType] = useState()
  const [mcqsType, setMcqsType] = useState()
  const [amount, setAmount] = useState()
  const [arrayOfQuestions, setArrayOfQuestions] = useState([])
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const dispatch = useDispatch()

  const dispatcher = () =>{
    dispatch(stateReset(0))
  }
  useEffect (() => {
    dispatcher()
  }, [modalIsOpen])

  const category = (e) => {
    const value = e.target.value
    setCategoryType(value)
  }
  const difficulty = (e) => {
    const value = e.target.value
    setDifficultyType(value)
  }
  const type = (e) => {
    const value = e.target.value
    setMcqsType(value)
  }
  const amountOfQuestions = (e) => {
    const value = e.target.value
    setAmount(value)
  }

  const startQuiz = () => {
    dispatch(loadQuiz({ categoryType, difficultyType, mcqsType, amount }))
    setModalIsOpen(true)
  }

  const submitValue = (e,elem) => {
    setArrayOfQuestions([...arrayOfQuestions,elem.question])
    // debugger
    const found = arrayOfQuestions.filter(x => x === elem.question).length;
    const value = e.target.value
    if(found < 1){
      if(value === elem.correct_answer){
        dispatch(getScore())
      }
    }
  }
  const yourScore = () => {
    alert(finalScore)
  }

 
  return (
    <div>
      <form>
      <div className="quiz_main mt-5">
        <h2 className="text-center">Quiz App</h2>
        <select
          onChange={category}
          className="form-select mb-4"
          aria-label="Default select example"
        >
          <option>Category</option>
          <option value="21">Sports</option>
          <option value="18">Computer Science</option>
          <option value="23">History</option>
        </select>
        <select
          onChange={difficulty}
          className="form-select mb-4"
          aria-label="Default select example"
        >
          <option >Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <select
          onChange={type}
          className="form-select mb-4"
          aria-label="Default select example"
        >
          <option >Type</option>
          <option value="">Any type</option>
          <option value="multiple">Multiple Choice</option>
          <option value="boolean">True / False</option>
        </select>
        <div className="mb-3">
          <input
            onChange={amountOfQuestions}
            type="text"
            className="form-control"
            placeholder="Amount of Questions"
          />
        </div>
        <div className="d-grid gap-2">
          <button onClick={startQuiz} className="btn btn-primary" type="button">
            Button
          </button>
        </div>
      </div>
      <ReactModal
        isOpen={modalIsOpen}
        style={{
          overlay: {
            backgroundColor: "gray",
          },
          content: {
            color: "#0a0a0a",
            backgroundColor: "#ffffff",
          },
        }}
      >
        <button
          className="reactModal__button"
          style={{ float: "right" }}
          onClick={() => setModalIsOpen(false)}
        >
          Close
        </button>
        {quizData.map((el, index) => {
          return (
            <div key={index}>
              <div>
                {el.type === "multiple" ? (
                  <Mcqs elem={el} ind={index} submit={submitValue}/>
                ) : (
                  <Boolean1 elem={el} ind={index}  submit={submitValue}/>
                )}
              </div>
            </div>
          )
        })}
        <button
          className="reactModal__button"
          style={{ float: "right" }}
          onClick={() => setModalIsOpen(false)}
        >
          Close
        </button>
        <button
          className="reactModal__button"
          onClick={yourScore}
        >
          Submit
        </button>
      </ReactModal>
      </form>
    </div>
  )
}

export const Mcqs = ({ elem, ind, submit }) => {
  return (
    <div key={ind}>
      <h3 className="quiz-h3">{elem.question}</h3>
      <br />
      {elem.allAnswers.map((el, index) => (
        <div className="form-check" key={index}>
          <label
            className="form-check-label quiz-lable"
            htmlFor={index+1}
          >
          <input
            className="form-check-input"
            type="radio"
            onClick={(e)=>submit(e, elem)}
            name={elem.question}
            id={`${el}-1-${index}`}
            value={el}
          />
            {el}
          </label>
        </div>
      ))}
    </div>
  )
}

export const Boolean1 = ({ elem, ind, submit }) => {

  return (
    <div >
      <h3 className="quiz-h3">{elem.question}</h3>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          value="True"
          onClick={(e)=>submit(e, elem)}
          name={`${elem.question}`}
          // question + ture/false + index 0, 1, 2...
          id={`${elem.question}-true-${ind}`}
        />True
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          value="False"
          onClick={(e)=>submit(e, elem)}
          name={`${elem.question}`}
          id={`${elem.question}-false-${ind}`}
        />False
      </div>
    </div>
  )
}
