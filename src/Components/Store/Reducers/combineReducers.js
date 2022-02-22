import { combineReducers } from 'redux';
import FormReducer from './FormReducer';
import todoReducer from './TodoReducer';
import MenuCartReducer from './MenuCartReducer';

export default combineReducers({
    regForm :FormReducer,
    todo : todoReducer,
    menuReducer: MenuCartReducer

});

// export default rootReducer;