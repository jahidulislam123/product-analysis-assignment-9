import React from 'react';

const SinglePlayer = (props) => {
    const{name,picture,price}=props.singleplayer;
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

export default SinglePlayer;