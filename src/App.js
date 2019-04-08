import React, { Component } from 'react';
import './App.css';
/*import cover from './images/championships.jpeg';
import depapel from './images/casa.jpg';
import gamers from './images/gamer.jpg';
import hacker from './images/mrrobot.jpg';
import ender from './images/enders.jpg';
import letscook from './images/breakingbad.jpg';
import Tvitem from './tvItem';*/
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Technologies from './Technologies';
import Details from './Details';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Technologies} />
          <Route exact path='/Details' component={Details} />
        </div>
      </Router>
    );
  }
}

export default App; 