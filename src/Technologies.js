import React from 'react';
import cover from './images/championships.jpeg';
import depapel from './images/casa.jpg';
import gamers from './images/gamer.jpg';
import hacker from './images/mrrobot.jpg';
import ender from './images/enders.jpg';
import letscook from './images/breakingbad.jpg';
import Tvitem from './tvItem';

export default function Technologies() {
    return (
        <div>
            <div className='container'>
                <Tvitem id='Casa de Papel' name='CASA de Papel' logo={depapel} />
                <Tvitem id='Gamer' name='GAMER' logo={gamers} />
                <Tvitem id='Mr. Robot' name='Mr. ROBOT' logo={hacker} />
                <Tvitem id='Championship' name='CHAMPIONSHIP' logo={cover} />
                <Tvitem id="Ender's Game" name="ENDER'S GAME" logo={ender} />
                <Tvitem id='Breaking Bad' name='BREAKING BAD' logo={letscook} />
            </div>
        </div>
    );
}

