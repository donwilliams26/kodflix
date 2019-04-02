import React, { Component } from 'react';
import './App.css';
import cover from './images/championships.jpeg';
import depapel from './images/casa.jpg';
import gamers from './images/gamer.jpg';
import hacker from './images/mrrobot.jpg';
import ender from './images/enders.jpg';
import letscook from './images/breakingbad.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <br /><br /><br />
        <div className='container'>
          <div className='item'>
            <img src={depapel} alt='money heist' />
          </div>
          <div className='item'>
            <img src={gamers} alt='gamericon' />
          </div>
          <div className='item'>
            <img src={hacker} alt='Mr.robot' />
          </div>
        </div>
        <div className='container'>      
          <div className='item'>
            <img src={ender} alt='enders' />
          </div>
          <div className='item'>
            <img src={letscook} alt='bbad' />
          </div>
          <div className='item'>
            <img src={cover} alt='champion' />
          </div>
        </div>
      </div>
    );
  }
}

export default App;