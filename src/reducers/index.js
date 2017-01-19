import { combineReducers } from 'redux';
import uiReducer from './uiReducer';
import todoReducer from './todoReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  uiReducer,
  todoReducer,
  routing: routerReducer
});

export default rootReducer;
