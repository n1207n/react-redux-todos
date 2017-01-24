import React, { PropTypes } from 'react';
import { Nav, NavItem }  from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <div>
        <Nav bsStyle="pills" activeKey={1}>
          <IndexLinkContainer to={{ pathname: "/" }}>
            <NavItem eventKey={1}>
              Home
            </NavItem>
          </IndexLinkContainer>

          <LinkContainer to={{ pathname: "*" }}>
            <NavItem eventKey={2}>
              404 page
            </NavItem>
          </LinkContainer>
        </Nav>

        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
