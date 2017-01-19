import React, { PropTypes } from 'react';

const Todo = ({ text, completed, onClick }) => {
  return (
    <li style={{
        textDecoration: completed ? 'line-through' : 'none',
      }} onClick={onClick}>
      {text}
    </li>
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Todo;
