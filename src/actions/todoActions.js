import * as types from '../constants/actionTypes';

let nextTodoId = 0;

export function addTodo(text) {
  return {
    type: types.ADD_TODO, id: nextTodoId++, text
  };
}

export function toggleTodo(id) {
  return {
    type: types.TOGGLE_TODO, id
  };
}
