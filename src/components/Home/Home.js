import React from 'react';
import HeaderShow from '../HeaderShow/HeaderShow';
import usePlayers from '../Hook/usePlayer';
import Player from './Player/Player';
import './Home.css';


const Home = () => {

    const[players,setPlayers]=usePlayers();
    
    return (

        <div>
            <div>
  <HeaderShow></HeaderShow>


  </div>
  <h1>Review</h1>
        <div  className='home-container'>
            {
                players.map(player=> <Player
                key={player.id}
                player={player}

                ></Player>)
            }
            
            
            
        </div>
        </div>
    );
};

export default Home;