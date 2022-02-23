import { combineReducers } from 'redux';
import FormReducer from './FormReducer';
import todoReducer from './TodoReducer';
import MenuCartReducer from './MenuCartReducer';
import ShazamReducer from './ShazamReducer';

export default combineReducers({
    regForm :FormReducer,
    todo : todoReducer,
    menuReducer: MenuCartReducer,
    shazam: ShazamReducer

});

// export default rootReducer;