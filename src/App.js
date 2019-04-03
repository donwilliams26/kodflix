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
            <div className='overlay'>
              <h1>
                CASA de PAPEL
              </h1>
            </div>
          </div>
          <div className='item'>
            <img src={gamers} alt='gamericon' />
            <div className='overlay'>
              <h1>
                GAMER
              </h1>
            </div>
          </div>
          <div className='item'>
            <img src={hacker} alt='Mr.robot' />
            <div className='overlay'>
              <h1>
                Mr. ROBOT
              </h1>
            </div>
          </div>
        </div>
        <div className='container'>      
          <div className='item'>
            <img src={ender} alt='enders' />
            <div className='overlay'>
              <h1>
                ENDER'S GAME
              </h1>
            </div>
          </div>
          <div className='item'>
            <img src={letscook} alt='bbad' />
            <div className='overlay'>
              <h1>
                BREAKING BAD
              </h1>
            </div>
          </div>
          <div className='item'>
            <img src={cover} alt='champion' />
            <div className='overlay'>
              <h1>
                CHAMPIONSHIPS
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;