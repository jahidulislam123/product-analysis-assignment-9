import React from 'react';
import usePlayers from '../Hook/usePlayer';
import SinglePlayer from '../SinglePlayer/SinglePlayer';

const Reveiw = () => {
    const[players,setPlayers]=usePlayers();
    return (
        <div>
            {
                players.map(singleplayer=><SinglePlayer
                
                    key={singleplayer.id}
                    singleplayer={singleplayer}
                
                ></SinglePlayer>)
            }
        </div>
    );
};

export default Reveiw;