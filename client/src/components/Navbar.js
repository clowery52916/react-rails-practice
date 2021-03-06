import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const BondLogo = styled.img`
  max-height: 25px;
  border-radius: 30px;
  margin: 0 4px;
`;

const Nav = styled.div`
  height: 15vh;
  width: 100vw;
  background-color: #202020;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  border-bottom: .9px solid #EAEAEA;
  a {
    color: white;
    margin: auto;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  margin-right: 10px;
`;

const LinkMargin = styled.div`
  margin: 10px;
  
`;

const LogoFlex = styled.div`
display: flex;
margin-left: 10px;
`

class Navbar extends Component {
  render() {
    return (
      <Nav>
        <LogoFlex><Link to="/"><h1>Vagab
        <BondLogo src="http://www.thedigitalbits.com/media/k2/items/cache/3d3b7d5d68132cc424920deb43e754bb_XL.jpg" alt="Bond Logo" />
        nd</h1></Link>
        </LogoFlex>

        {/* site name goes here */}
        <div>
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
        </div>
      </Nav>
    );
  }
}

export default Navbar;
