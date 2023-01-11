import { createStore } from 'redux';
import weatherReducer from './weather';

const store = createStore(weatherReducer);

export default store;