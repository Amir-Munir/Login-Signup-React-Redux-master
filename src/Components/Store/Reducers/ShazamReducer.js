const initialState = {
    loadShazam: []
}

const ShazamReducer = (state = initialState, action) => {
    switch( action.type) {
        case 'LOAD-SHAZAM':
            debugger
            return {
                ...state,
                loadShazam: action.payload
            }

        case 'INPUT-VALUE':
            return {
                ...state,
                inputValue: action.payload
            }

        case 'LANG-DROPDOWN-VALUE':
            return {
                ...state,
                langDropdown: action.payload
            }

        case 'RESULT-DROPDOWN-VALUE':
            return {
                ...state,
                resultDropdown: action.payload
            }

        default:
            return state
    }
}


export default ShazamReducer;