import React from 'react';
import './Player.css'

const Player = (props) => {
    const{picture,name,price}=props.player;
    console.log(props);
    // const
    return (
        <div  >
            
            
           <div>
           
            <img src={picture} alt="" />
            <h3>Name:{name}</h3>
            <p>price:{price}</p>
            
           </div>

        </div>
    );
};

export default Player;