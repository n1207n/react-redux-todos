import * as types from '../constants/actionTypes';

export function addTodo(text) {
  return {
    type: types.ADD_TODO, text
  };
}

export function toggleTodo(index) {
  return {
    type: types.TOGGLE_TODO, index
  };
}
