const initialState = {
    loadShazam: []
}

const ShazamReducer = (state = initialState, action) => {
    switch( action.type) {
        case "LOAD-SHAZAM":
            return {
                ...state,
                loadShazam: action.payload
            }

        default:
            return state
    }
}


export default ShazamReducer;