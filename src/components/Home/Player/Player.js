import React from 'react';
import './Player.css'

const Player = (props) => {
    const{picture,name,price,reveiw,comment}=props.player;
    console.log(props);
    // const
    return (
        <div className='player-comment' >
            
            
           <div>
           
            <img src={picture} alt="" />
            <h3>Name:{name}</h3>
            <p>reveiw:{reveiw}</p>
            <p>Comment: {comment}</p>
            
           </div>

        </div>
    );
};

export default Player;