import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carusel.css'
const Caruse = () => {
    return (
        <div className='carusel' >
            <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://1.bp.blogspot.com/-JLLXagxzzs0/VSWCpB49ibI/AAAAAAAABPI/tapHZlMaNZM/s1600/HD%2BWallpapers%2BKKR%2Bvs%2BMI%2BPepsi%2BIPL%2B2015%2BMatch%2B01-08.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      {/* <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.gettyimages.com/photos/cheerleaders-dance-during-the-ipl-t20-match-between-mumbai-indians-picture-id86024545?s=2048x2048"
      alt="Second slide"
    />

    <Carousel.Caption>
      {/* <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block   w-100"
      src="https://media.gettyimages.com/photos/the-mumbai-indians-celebrate-after-they-defeated-the-chennai-super-picture-id1148678006?s=2048x2048"
      alt="Third slide"
    />

    <Carousel.Caption>
      {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Caruse;