import React from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';
import { FaDollarSign, FaMoneyBill, FaServicestack } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const ServicesDetails = () => {

    const {title, _id, img, price, description, service_id } =useLoaderData();
    return (
        <Container>
            <h3 style={{ color: '#E59866', marginTop: '40px', marginBottom:'30px', fontFamily: 'cursive', textAlign: 'center' }}>WELCOME TO SERVICE DETAILS AND REVIEW PAGE
            </h3>
            <Row>
            <div>
            <Card className="mb-5">
      <Card.Header className='d-flex justify-content-between align-items-center'>
       
      <Card.Title>  

        <h4 style={{ color: '#E59866', fontFamily: 'cursive', textAlign: 'center' }}> Service Name: {title}</h4>
      
      </Card.Title>
      </Card.Header>
      <Card.Body>
        
        <Card.Img variant="top" src={img} />
        <Card.Text>
            <h6 className='mt-4'style={{ color: '#E59866', fontFamily: 'cursive', textAlign: 'center' }}> <FaServicestack></FaServicestack> Service Details</h6>
            
            <p>{description}</p>
        
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">

          <h5 style={{ color: '#E59866', fontFamily: 'cursive', textAlign: 'center' }}> <FaMoneyBill style={{ fontSize:'40px'}} ></FaMoneyBill> Price For This Service : {price}<FaDollarSign></FaDollarSign></h5>
      </Card.Footer>
    </Card>
        </div>
            </Row>
        </Container>
    );
};

export default ServicesDetails;