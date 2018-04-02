import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import CityList from "./components/CityList";

class App extends Component {
  render() {
    return (
      <Router>
        
        <Switch>
          <Route exact path="/cities" component={CityList} />
        </Switch>
      </Router>
    );
  }
}

export default App;
