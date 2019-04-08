import { createStore } from 'redux';
import PersonReducer from '../Reducers/PersonReducer';

export default (defaultState) => {
    const store = createStore(PersonReducer,defaultState);
    return store;
}