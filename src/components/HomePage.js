import React from 'react';

import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';

class HomePage extends React.Component {
  render () {
    return (
      <div>
        <h1>React Redux Todo</h1>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
