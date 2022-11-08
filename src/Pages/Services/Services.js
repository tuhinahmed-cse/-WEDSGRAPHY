import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ServicesCard from './ServicesCard';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);


    return (
        <Container>
            <h3 style={{ color: '#E59866', marginTop: '80px', fontFamily: 'cursive', textAlign: 'center' }}>What I Offer
            </h3>

            <h3 className='mt-4' style={{ color: '#2C3E50', fontFamily: 'cursive', textAlign: 'center' }}>Real Wedding Memories <br /> Captured Services
            </h3>
             <Row>
             <Col></Col>
             <Col lg='10'>

            {
                services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
            }

             </Col>
             <Col></Col>
             
             </Row>
            
             <h1 style={{ textAlign: 'center' }}> 
             <Link to='/allServices'><Button variant="info">See All Services</Button></Link>
            </h1>
             
        </Container>
    );
};

export default Services;