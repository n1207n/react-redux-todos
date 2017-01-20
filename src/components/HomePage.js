import React from 'react';
import {Link} from 'react-router';

import VisibleTodoList from '../containers/VisibleTodoList';

const HomePage = () => {
  return (
    <div>
      <h1>React Redux Todo</h1>
      <VisibleTodoList />
    </div>
  );
};

export default HomePage;
