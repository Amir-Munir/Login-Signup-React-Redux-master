import { Users } from '../../Users';

const initialState = {
    Users,
    sort: 'asc'
}
export const TableReducer  = (state = initialState, action) => {
    switch (action.type) {

        case 'SORT':
            return{
                ...state,
                Users: action.payload
            }

        case 'MAX':
            return{
                ...state,
                max: action.payload
            }

        case 'MIN':
            return{
                ...state,
                min: action.payload
            }

        case 'SORT-ORDER':
            return{
                ...state,
                sort: action.payload
            }

        default : 
        return state
    }

}

export default TableReducer;