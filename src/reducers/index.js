import { combineReducers } from 'redux';
import uiState from './uiReducer';
import todoState from './todoReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  uiState,
  todoState,
  routing: routerReducer
});

export default rootReducer;
