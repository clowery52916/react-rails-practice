import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import CityList from "./components/CityList";
import City from './components/City'

class App extends Component {
  render() {
    return (
      <Router>
        
        <Switch>
          <Route exact path="/cities" component={CityList} />
          <Route exact path="/cities/:id" component={City}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
