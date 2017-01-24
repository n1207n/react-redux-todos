import objectAssign from 'object-assign';

import * as types from '../constants/actionTypes';

import initialState from './initialState';

const todoSingleReducer = (state = {}, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return objectAssign({}, state, {
        id: action.id,
        text: action.text,
        completed: false,
      });

    case types.TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }

      return objectAssign({}, state, {
        completed: !state.completed,
      });
    default:
      return state;
  }
};

export default function todoReducer(state = initialState, action) {

  switch (action.type) {
    case types.ADD_TODO:
      return objectAssign({}, state, {
        todos: [
          ...state.todos,
          todoSingleReducer(undefined, action),
        ],
      });

    case types.TOGGLE_TODO:
      return objectAssign({}, state, {
        todos: state.todos.map(todo => todoSingleReducer(todo, action)),
      });

    default:
      return state;
  }
}
