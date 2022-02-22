const initialState = {
    signup : {},
    login : {}
}

export default function FormReducer (state = initialState, action ) {
    switch(action.type){
        
        case 'SIGNUP':

            const name = action.payload.name 
            const value = action.payload.value

            return {
                ...state,
                signup : {...state.signup, [name] : value }
            }

        case 'LOGIN':
            const name1 = action.payload.name
            const value1 = action.payload.value
            return{
                ...state,
                login: {...state.login, [name1] : value1}
            }

        case 'EMAIL-VALIDATION':
            // debugger
            return{
                ...state,
                eVal: action.payload
            }

        case 'PASSWORD-VALIDATION':
            // debugger
            return{
                ...state,
                pVal: action.payload
            }

        case 'EMAIL-ERROR':
            // debugger
            return{
                ...state,
                email_Error: action.payload,
            }

        case 'PASSWORD-ERROR':
            // debugger
            return{
                ...state,
                password_Error: action.payload,
            }
            default:
                return state
    }
}