import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Technologies from "./Technologies";
import Details from "./Details";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Technologies} />
          {/* details here is a wildcard */}
          <Route exact path="/:technologyId" component={Details} />
        </div>
      </Router>
    );
  }
}

export default App;
