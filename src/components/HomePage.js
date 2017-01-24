import React from 'react';

import VisibleTodoList from '../containers/VisibleTodoList';

class HomePage extends React.Component {
  render () {
    return (
      <div>
        <h1>React Redux Todo</h1>
        <VisibleTodoList />
      </div>
    );
  }
}

export default HomePage;
