import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadQuiz } from '../Store/Actions/Actions';
import ReactModal from 'react-modal';

export const QuizSetting = () => {
  const quizData = useSelector(state => state.quizData.loadQuiz.data ? state.quizData.loadQuiz.data : [] )
  const [categoryType, setCategoryType] = useState();
  const [difficultyType, setDifficultyType] = useState();
  const [mcqsType, setMcqsType] = useState();
  const [amount, setAmount] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch()

console.log(quizData)
  const category = (e) => { 
    const value = e.target.value
    console.log(value)
    setCategoryType(value)
  }
  const difficulty = (e) => { 
    const value = e.target.value
    console.log(value)
    setDifficultyType(value)
  }
  const type = (e) => { 
    const value = e.target.value
    console.log(value)
    setMcqsType(value)
  }
  const amountOfQuestions = (e) => { 
    const value = e.target.value
    console.log(value)
    setAmount(value)
  }

  const startQuiz = () => {
    dispatch(loadQuiz({ categoryType, difficultyType, mcqsType, amount }))
    setModalIsOpen(true)
  }

    const MCQSanswer = (e) => {
      var result = [],
      node = e.target.parentNode.parentNode.firstChild;
      debugger
      
      while ( node ) {
        if ( node !== this && node.nodeType === Node.ELEMENT_NODE ) 
        result.push( node );
        node = node.nextElementSibling || node.nextSibling;
      }
     const filtered = result.filter(el=> el.firstElementChild !== e.target)
     filtered.forEach(el=>el.firstElementChild.checked = false)
 
  }

  return (
    <div>
      <div className='quiz_main mt-5'>
        <h2 className='text-center'>
          Quiz App
        </h2>
        <select onChange={category} className="form-select mb-4" aria-label="Default select example">
          <option select>Category</option>
          <option value="21">Sports</option>
          <option value="18">Computer Science</option>
          <option value="23">History</option>
        </select>
        <select onChange={difficulty} className="form-select mb-4" aria-label="Default select example">
          <option select>Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <select onChange={type} className="form-select mb-4" aria-label="Default select example">
          <option select>Type</option>
          <option value="">Any type</option>
          <option value="multiple">Multiple Choice</option>
          <option value="boolean">True / False</option>
        </select>
        <div className="mb-3">
        <input onChange={amountOfQuestions} type="text" className="form-control" placeholder='Amount of Questions'/>
        </div>
        <div className="d-grid gap-2">
          <button onClick={startQuiz} className="btn btn-primary" type="button">Button</button>
        </div>
      </div>
      <ReactModal isOpen={modalIsOpen}
            style={
                {
                    overlay:{
                        backgroundColor : "gray"
                    },
                    content: {
                        color: "#0a0a0a",
                        backgroundColor: "#ffffff",
                    }
                }
            }
        >
          {quizData.map((el, index)=> {
            return(
                <div>
              
              <div>
                {el.type === "multiple" ? <Mcqs elem={el} ind={index} fun={MCQSanswer}/> : <Boolean elem={el} key={index}/>}
              </div>
              </div>
            )
          })}
             <button className='reactModal__button' style={{float:"right"}} onClick={()=> setModalIsOpen(false)}>Close</button>   
      </ReactModal>
    </div>
  )
}

const Mcqs = ({elem, fun, ind}) => {
// debugger
const answers = [elem.correct_answer,...elem.incorrect_answers] 
  return (
    <div key={ind}>
      <h3 className='quiz-h3'>{elem.question}</h3><br/>
      <div key={ind}>
        {answers.map((el,index)=>(

        <div className="form-check" key={index}>
          <input className="form-check-input" type="radio" onChange={fun} name="1" id="flexRadioDefault1"/>
          <label  className="form-check-label quiz-lable" for="flexRadioDefault1">
            {el}
          </label>
        </div>
        ))
      }
        {/* <div className="form-check">
          <input className="form-check-input" type="radio" name="2" onChange={fun} id="flexRadioDefault2" />
          <label  className="form-check-label quiz-lable" for="flexRadioDefault2">
            {elem.incorrect_answers[0]}
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" onChange={fun} name="3" id="flexRadioDefault3"/>
          <label  className="form-check-label quiz-lable" for="flexRadioDefault3">
            {elem.incorrect_answers[1]}
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" onChange={fun} name="4" id="flexRadioDefault4" />
          <label className="form-check-label quiz-lable" for="flexRadioDefault4">
            {elem.incorrect_answers[2]}
          </label>
        </div> */}
      </div>
    </div>
  )
}


export const Boolean = ({elem, key}) => {
  return (
    <div>
      <h3 className='quiz-h3'>{elem.question}</h3>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="5" id="flexRadioDefault5" />
        <label className="form-check-label quiz-lable" for="flexRadioDefault5">
          True
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="6" id="flexRadioDefault6" />
        <label className="form-check-label quiz-lable" for="flexRadioDefault6">
          False
        </label>
      </div>
    </div>
  )
}

