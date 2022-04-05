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
                players.slice(0,3).map(player=> <Player
                key={player.id}
                player={player}

                ></Player>)
            }


            
            
            
        </div>
        <a href="/reveiw"><button className='bitton' >Review</button></a>

        
        </div>
    );
};

export default Home;