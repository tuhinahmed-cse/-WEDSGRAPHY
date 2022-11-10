import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useTitle from '../../hooks/useTitle';
import AllServicesCard from './AllServicesCard';

const AllServices = () => {

    const [allServices, setAllServices] = useState([]);

    useEffect(() => {
        fetch('https://b6a11-service-review-server-side-one-zeta.vercel.app/allServices')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, []);

    useTitle('Services')
    return (
        <Container>
            <h3 style={{ color: '#E59866', marginTop: '80px', fontFamily: 'cursive', textAlign: 'center' }}>WELCOME TO MY SERVICES PAGE
            </h3>
            <h3 style={{ color: '#E59866', marginTop: '20px', fontFamily: 'cursive', textAlign: 'center' }}>What I Offer
            </h3>

            <h3 className='mt-4' style={{ color: '#2C3E50', fontFamily: 'cursive', textAlign: 'center' }}>Real Wedding Memories <br /> Captured Services
            </h3>
             <Row>
             <Col></Col>
             <Col lg='10'>

            {
                allServices.map(service => <AllServicesCard key={service._id} service={service}></AllServicesCard> )
            }

             </Col>
             <Col></Col>
             
             </Row>
            
             
        </Container>
    );
};

export default AllServices;