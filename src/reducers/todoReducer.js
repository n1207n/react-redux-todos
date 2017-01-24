import objectAssign from 'object-assign';

import * as types from '../constants/actionTypes';

import initialState from './initialState';

export default function todoReducer(state = initialState, action) {

  switch (action.type) {
    case types.ADD_TODO:
      return objectAssign({}, state, {
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text,
            completed: false,
          },
        ],
      });

    default:
      return state;
  }
}
