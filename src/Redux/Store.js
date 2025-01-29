import { userReducer } from "./Reducer";
import { createStore } from 'redux';

const store=createStore(userReducer)

export default store;