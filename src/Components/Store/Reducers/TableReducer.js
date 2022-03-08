import { Users } from '../../Users';

const initialState = {
    Users
}
export const TableReducer  = (state = initialState, action) => {
    switch (action.type) {

        case 'SORT':
            return{
                ...state,
                Users: action.payload
            }

        default : 
        return state
    }

}

export default TableReducer;