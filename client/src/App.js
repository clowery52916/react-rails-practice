import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import CityList from "./components/CityList";
import City from './components/City'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import styled from 'styled-components'
import PostShow from './components/PostShow'

const Flex = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  background-color: #151515;
  color: #EAEAEA;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <Flex>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/cities" component={CityList} />
          <Route exact path="/cities/:id" component={City}/>
          <Route exact path="/cities/:id/posts/:id" component={PostShow}/>
        </Switch>
        <Footer/>
        </Flex>
      </Router>
    );
  }
}

export default App;
