import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './Reducers/combineReducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers,composeEnhancer(applyMiddleware(thunk)))

export default store;