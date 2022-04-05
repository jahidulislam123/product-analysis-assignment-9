import React from 'react';
import usePlayers from '../Hook/usePlayer';
import SinglePlayer from '../SinglePlayer/SinglePlayer';
import Caruse from './Carusel/Caruse';
import './Reveiw.css'
const Reveiw = () => {
    const[players,setPlayers]=usePlayers();
    return (

        

        
        <div >
           <div className='width-carusel container'>
           <Caruse></Caruse>
           </div>
            <br /> <br />
            
            <div className='reveiw-class'>

            {
                players.map(singleplayer=><SinglePlayer
                
                    key={singleplayer.id}
                    singleplayer={singleplayer}
                
                ></SinglePlayer>)
            }
            </div>
           
            
        </div>
    );
};

export default Reveiw;