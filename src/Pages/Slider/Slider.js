import React from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';
import img from '../../assets/img1.webp';
import img1 from '../../assets/img2.webp';
import img2 from '../../assets/img4.jpg';

const Slider = () => {
    return (
        <Container>
            <div className='' style={{backgroundColor:'#E8F8F5', padding:'40px'}}>
                <h3 style={{textAlign: 'center', color: '#0DFA75', fontFamily:'fantasy'}}> WELCOME TO MY WEBSITE  <span style={{ color: '#19B45D', fontFamily:'fantasy'}} >WEDSGRAPHY</span></h3>
                <p style={{textAlign: 'center', color: 'goldenrod',}}> I am here to Make Your Wedding and Wedding related Occation <br /> More Beautiful To Take Every Moment in My Camera. I am a Professional Photographer  </p>
            </div>
            <Row>
            <Carousel className=''>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
          style={{height:'80vh'}}
        />
        <Carousel.Caption>
          <h3>Make your wedding a wonderful story.</h3>
          <p>I am here to take every moment of your beautiful memories in my camera.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img}
          alt="Second slide"
          style={{height:'80vh'}}
        />

        <Carousel.Caption>
          <h3>Make your wedding a wonderful story.</h3>
          <p>I am here to take every moment of your beautiful memories in my camera.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Third slide"
          style={{height:'80vh'}}
        />

        <Carousel.Caption>
          <h3>Make your wedding a wonderful story.</h3>
          <p>
          I am here to take every moment of your beautiful memories in my camera.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </Row>
        </Container>
    );
};

export default Slider;