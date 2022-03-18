const initialState = {
    loadQuiz:[],
    score: 0
}

const QuizReducer = (state = initialState ,action) => {
    // debugger
    switch(action.type) {
        case "LOAD-QUIZ":
            return{
                ...state,
                loadQuiz: action.payload
            }

        case "SCORE":
            return{
                ...state,
                score: state.score + action.payload
            }

        case "RESET-STATE":
            return{
                ...state,
                score: action.payload
            }

        default:
            return state
    }
}

export default QuizReducer;