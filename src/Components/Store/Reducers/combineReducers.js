import { combineReducers } from 'redux';
import FormReducer from './FormReducer';
import todoReducer from './TodoReducer';
import MenuCartReducer from './MenuCartReducer';
import ShazamReducer from './ShazamReducer';
import TableReducer from './TableReducer';
import QuizReducer from './QuizReducer';

export default combineReducers({
    regForm :FormReducer,
    todo : todoReducer,
    menuReducer: MenuCartReducer,
    shazam: ShazamReducer,
    tableReducer: TableReducer,
    quizData: QuizReducer

});

// export default rootReducer;