const initialState = {
    todo: [],
} 

const todoReducer = (state = initialState, action)=> {
    switch (action.type) {
        
        case 'GET_TODO':
            return {
                ...state,
                todo: action.payload.data
                
            }

        case 'DELETE':
            // debugger
            return {
                ...state,
                todo: state.todo.filter(todo => todo.id !== action.payload)
            }

        case 'VIEW':
            return {
                ...state,
                view: action.payload
            }

        case 'ADD':
            // debugger
            const name = action.payload.name 
            const value = action.payload.value
            return{
                ...state,
                add: {...state.add, [name] : value }
            }


        case 'NEWTODO':
            // debugger
            let allTodos = []
            const obj = action.payload;
            const findId = state.todo.findIndex((i)=> i.id == obj.id)
            // debugger
            if(findId >= 0 ){
                state.todo[findId] = obj
                allTodos = state.todo
                // debugger
            }
            else{
                allTodos = [action.payload,...state.todo]
            }
            
            return{
                ...state,
                todo: allTodos
            }
        default:
            return state
    }
}
export default todoReducer;