import React, { Component } from 'react';
import './App.css';
import cover from './images/championships.jpeg';
import depapel from './images/casa.jpg';
import gamers from './images/gamer.jpg';
import hacker from './images/mrrobot.jpg';
import ender from './images/enders.jpg';
import letscook from './images/breakingbad.jpg';
import TvItem from './TvItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <br /><br /><br />
        <div className='container'>
          <TvItem name='CASA de Papel' logo={depapel} />
          <TvItem name='GAMER' logo={gamers} />
          <TvItem name='Mr. ROBOT' logo={hacker} />
        </div>
        <div className='container'>
          <TvItem name='CHAMPIONSHIP' logo={cover} />
          <TvItem name="ENDER'S GAME" logo={ender} />
          <TvItem name='BREAKING BAD' logo={letscook} />
        </div>
      </div>
    );
  }

}

export default App; 