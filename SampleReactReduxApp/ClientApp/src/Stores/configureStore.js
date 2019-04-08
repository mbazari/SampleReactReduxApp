import { createStore,combineReducers } from 'redux';
import PersonReducer from '../Reducers/PersonReducer';
import NewsReducers from '../Reducers/NewsReducers'
export default (defaultState) => {
    const store = createStore(PersonReducer ,defaultState);
    return store;
}