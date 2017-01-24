import { connect } from 'react-redux';

import * as actions from '../actions/todoActions';
import * as visibilityFilters from '../constants/visibilityFilters';

import TodoList from '../components/TodoList';

function getVisibleTodoList(state, filter) {
  switch (filter) {
    case visibilityFilters.SHOW_ACTIVE:
      return state.todoState.todos.filter(todo => !todo.completed);
    case visibilityFilters.SHOW_COMPLETED:
      return state.todoState.todos.filter(todo => todo.completed);
    default:
      return state.todoState.todos;
  }
}

function mapStateToProps(state) {
  return {
    todos: getVisibleTodoList(state, state.uiState.filter),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onTodoClick: (id) => {
      dispatch(actions.toggleTodo(id));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
