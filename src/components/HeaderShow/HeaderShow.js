import React from 'react';
import { Button } from 'react-bootstrap';
import './HeaderShow.css'

const HeaderShow = () => {
    return (
        <div className='miniheader container' >
            <div className='text-edit container' >
                <h1 className='ipl'>Famous Ipl </h1>
                <h1><span>One</span> of the best frensizy</h1> 
                <h1>Should is it Next destination</h1>
                <p className='extra-text'> Ipl is one of the best premmiar league all over the world . in this site 
                    there are lots of players from various game and you are going to see their comment,reveiw as well ass opinion
                </p>
                <Button variant="light">Live Demo</Button> {' '}
            </div>
            <img className='img-font' src="https://assets.iplt20.com//IPL/photo/2021/10/07/51348ae0-b175-46b5-9304-96ebfcd5fa12/singh74_0013.jpg" />
        </div>
    );
};

export default HeaderShow;