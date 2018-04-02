import React, { Component } from 'react';
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Nav = styled.div`
  height: 15vh;
  width: 100vw;
  background: black;
  color: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1;
`;

const LinkContainer = styled.div`
  display: flex;
  margin-right: 10px;
`;

const LinkMargin = styled.div`
  margin: 10px;
  a {
    color: white;
    margin: auto;
  }
`;

class Navbar extends Component {
    render() {
        return (
            <Nav>
        {/* site name goes here */}
          <LinkContainer>
            <LinkMargin>
              <Link to="/cities">Cities</Link>
              {/* link to user Profile  & city page*/}
            </LinkMargin>
            <LinkMargin>
              <Link to="/">Login</Link>
              {/* link to user Profile  & city page*/}
            </LinkMargin>
            <LinkMargin>
              <Link to="/">Sign Up</Link>
              {/* Link to user sign up page & city page */}
            </LinkMargin>
          </LinkContainer>
      </Nav>
        );
    }
}

export default Navbar;