import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Technologies from "./Technologies";
import Details from "./Details/Details";
import NotFound from "./NotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Technologies} />
            {/* details here is a wildcard */}
            <Route exact path="/not-found" component={NotFound} />
            <Route exact path="/:technologyId" component={Details} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
