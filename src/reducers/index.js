import counterReducer from '../reducers/counter';
import loggedReducer from '../reducers/isLogged';
import colorReducer from "./colorGen";
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    colorGen: colorReducer,
})

export default allReducers;