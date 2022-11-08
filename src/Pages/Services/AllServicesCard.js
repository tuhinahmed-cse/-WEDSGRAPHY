import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaDollarSign, FaMoneyBill, FaServicestack } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';

const AllServicesCard = ({service}) => {

    const {_id, title, service_id, img, price, description}= service;
    return (
        <div>
            <Card className="mb-5">
      <Card.Header className='d-flex justify-content-between align-items-center'>
       
      <Card.Title>  

        <h4 style={{ color: '#E59866', fontFamily: 'cursive', textAlign: 'center' }}> Service Name: {title}</h4>
      
      </Card.Title>
      </Card.Header>
      <Card.Body>
        
        <PhotoProvider>
          <PhotoView src={img}>
          <Card.Img variant="top" src={img} />
          </PhotoView>
        </PhotoProvider>

        <Card.Text>
            <h6 className='mt-4'style={{ color: '#E59866', fontFamily: 'cursive', textAlign: 'center' }}> <FaServicestack></FaServicestack> Service Details</h6>
          {
            description.length > 250 ?
            <p>{description.slice(0, 100) + '...'} <Link to={`/serviceDetails/${_id}`}><Button variant="outline-info">View Details</Button></Link> </p>
            :
            <p>{description}</p>
          }
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">

          <h5 style={{ color: '#E59866', fontFamily: 'cursive', textAlign: 'center' }}> <FaMoneyBill style={{ fontSize:'40px'}} ></FaMoneyBill> Price For This Service : {price}<FaDollarSign></FaDollarSign></h5>
      </Card.Footer>
    </Card>
        </div>
    );
};

export default AllServicesCard;