const initialState = {
    loadQuiz:[],
    score: 0
}

const QuizReducer = (state = initialState ,action) => {
    debugger
    switch(action.type) {
        case "LOAD-QUIZ":
            return{
                ...state,
                loadQuiz: action.payload
            }

        case "SCORE":
            debugger
            return{
                ...state,
                score: state.score + 1
            }

        default:
            return state
    }
}

export default QuizReducer;