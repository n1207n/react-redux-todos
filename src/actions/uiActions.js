import * as types from '../constants/actionTypes';

export default function setVisibilityFilter(filter) {
  return {
    type: types.SET_VISIBILITY_FILTER, filter
  };
}
