import React from 'react';
import usePlayers from '../Hook/usePlayer';
import Player from './Player/Player';



const Home = () => {

    const[players,setPlayers]=usePlayers();
    return (
        <div  className='home-container'>
            {
                players.map(player=> <Player
                key={player.id}
                player={player}

                ></Player>)
            }
            <p>hi i am home </p>
            
            
        </div>
    );
};

export default Home;