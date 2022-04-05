import React from 'react';
import './single.css'
const SinglePlayer = (props) => {
    const{name,picture,price,reveiw,comment}=props.singleplayer;
    return (
        <div className='single-comment' >
            
            
           <div>
           
            <img src={picture} alt="" />
            <h3>Name:{name}</h3>
            <p>reveiw:{reveiw}</p>
            <p>comment:{comment}</p>
            
           </div>

        </div>
    );
};

export default SinglePlayer;