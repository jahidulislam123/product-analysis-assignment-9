import React from 'react';
import './About.css'
const About = () => {
    return (
        <div className='container about'>
            <h2>About </h2>
            <div className='compo'>
            <img src="/images/photo_2022-04-05_19-07-36.jpg" alt="" />
           <h2>Details</h2> 
           <h5>Name:  MD. Jahidul Islam Topu</h5>
           <p>passion: Programming</p>
            </div>
            <div className='compo'>
            <img src="/images/photo_2022-04-05_19-07-25.jpg" alt="" />
           <h2>Details</h2> 
           <h5>Name: Ali Azam</h5>
           <p>passion: Listening song</p>
            </div>
            <div className='compo'>
            <img src="/images/photo_2022-04-05_19-07-42.jpg" alt="" />
           <h2>Details</h2> 
           <h5>Name: Mahmudur Rahaman</h5>
           <p>passion: Cycyling</p>
            </div>

        </div>
    );
};

export default About;