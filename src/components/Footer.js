import React from 'react';

import * as visibilityFilters from '../constants/visibilityFilters';

import FilterLink from '../containers/FilterLink';

const Footer = () => {
  return (
    <h4>
      Show: {" "}
      <FilterLink filter={visibilityFilters.SHOW_ALL}>
        All
      </FilterLink>
      {", "}
      <FilterLink filter={visibilityFilters.SHOW_ACTIVE}>
        Active
      </FilterLink>
      {", "}
      <FilterLink filter={visibilityFilters.SHOW_COMPLETED}>
        Completed
      </FilterLink>
    </h4>
  );
};

export default Footer;
