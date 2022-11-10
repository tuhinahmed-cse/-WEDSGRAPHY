import React from 'react';
import {  Col, Container, Row } from 'react-bootstrap';
import { FaCamera, FaConnectdevelop, FaTools } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import img from '../../assets/pro.jpg'

const AboutMe = () => {
    return (
<Container className='mt-4' style={{backgroundColor:'#E8F8F5'}}>
    
    <Row>

        <Col lg='6' sm='12'>
            <h4 style={{color:'#E59866', marginTop:'80px', fontFamily:'cursive'}}> Why Choose Me</h4>

            <h1 style={{color:'#2C3E50', fontFamily:'cursive',fontWeight:'700'}}>Adding the memories of every moment</h1>

            <div className='mt-4'>
            <h2> <FaTools ></FaTools> <span style={{fontWeight:'600',fontFamily:'cursive'}}  >Professional</span>  </h2>
            <p className='ms-5'><small > I am too much serious about my work and never disappointed my client in any situation </small></p>
            </div>

            <div className='mt-2'>
            <h2> <FaCamera ></FaCamera> <span style={{fontWeight:'600', fontFamily:'cursive'}}  >Experienced Photographer</span>  </h2>
            <p className='ms-5'><small > I had already attend lots of wedding. So i know better then others how to make your wedding more beautiful </small></p>
            </div>
            <div className='mt-2'>
            <h2> <FaConnectdevelop></FaConnectdevelop> <span style={{fontWeight:'600', fontFamily:'cursive'}}  >Support 24/7</span>  </h2>
            <p className='ms-5'><small > I am available 24/7. If you need me then feel free to cal me anytime. i am Always available. </small></p>
            </div>

        </Col>

        <Col lg='6' sm='12'>

            <PhotoProvider>
                <PhotoView src={img}>
                <img src={img}
            style={{width:'300px', height:'300px', marginLeft:'50px', marginTop: '120px' }}
            
            alt="" />
                </PhotoView>
            </PhotoProvider>

        </Col>

    </Row>
        
</Container>
    );
};

export default AboutMe;
