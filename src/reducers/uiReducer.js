import objectAssign from 'object-assign';

import { SET_VISIBILITY_FILTER } from '../constants/actionTypes';

import initialState from './initialUIState';

export default function uiReducer(state = initialState, action) {
  switch (acion.type) {
    case SET_VISIBILITY_FILTER:
      return objectAssign({}, state, {filter: action.filter});

    default:
      return state;
  }
}
