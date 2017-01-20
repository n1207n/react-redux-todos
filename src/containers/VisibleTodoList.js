import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions/todoActions';
import * as visibilityFilters from '../constants/visibilityFilters';

import TodoList from '../components/TodoList';

const VisibleTodoList = (props) => {
  const { todos, actions } = props;

  return (
    <TodoList todos={todos} onTodoClick={actions.toggleTodo}/>
  );
};

VisibleTodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  actions: PropTypes.object.isRequired,
};

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
    todos: getVisibleTodoList(state, state.filter),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibleTodoList);
