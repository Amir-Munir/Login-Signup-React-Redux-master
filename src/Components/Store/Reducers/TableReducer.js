import { Users } from '../../Users';

const initialState = {
    Users
}
export const TableReducer  = (state = initialState, action) => {
    switch (action.type) {
        // case 'LOAD_USERS':
        //     return {
        //         ...state,
        //         users: action.payload
        //     }
        default : 
        return state
    }

}

export default TableReducer;