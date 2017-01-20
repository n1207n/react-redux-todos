import React, { PropTypes } from 'react';

import Todo from './Todo';

class TodoList extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render () {
    const { todos, onTodoClick } = this.props;

    if (todos.length == 0) {
      return <h3>No todos to display</h3>
    }

    return (
      <ul>
        {todos.map(todo => {
          <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)}/>
        })}
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;
