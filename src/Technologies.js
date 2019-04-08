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
                <Tvitem name='CASA de Papel' logo={depapel} />
                <Tvitem name='GAMER' logo={gamers} />
                <Tvitem name='Mr. ROBOT' logo={hacker} />
            </div>

            <div className='container'>
                <Tvitem name='CHAMPIONSHIP' logo={cover} />
                <Tvitem name="ENDER'S GAME" logo={ender} />
                <Tvitem name='BREAKING BAD' logo={letscook} />

            </div>
        </div>
    );
}
