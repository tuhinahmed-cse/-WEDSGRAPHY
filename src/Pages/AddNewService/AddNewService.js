import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';

const AddNewService = () => {


    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        
        const service_id = form.service_id.value;
        const title = form.title.value;
        const img = form.img.value;
        const price = form.price.value;
        const description = form.description.value;

        const send = {
            service_id,
            title,
            img,
            price,
            description
        }

        fetch('http://localhost:5000/serviceadd', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(send)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    toast.success(' Service Added successfully')
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));
        

    }
useTitle('Add-Service')
    return (
        <div style={{backgroundColor:"#D6EAF8", height:'95vh'}}>
            <Container>
        <h3 className='mb-4' style={{ color: '#E59866', padding:'30px', fontFamily: 'cursive', textAlign: 'center' }}>PLEASE ADD A NEW SERVICE YOU WANT !!
            </h3>
        <Row>
          <Col></Col>
          <Col lg='6'>

          <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Service ID</Form.Label>
        <Form.Control type="text" name='service_id' placeholder="Enter Service ID" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Service Title</Form.Label>
        <Form.Control type="text" name='title' placeholder="Enter Service Title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Service Image</Form.Label>
        <Form.Control type="text" name='img' placeholder="Enter Service Image URL" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Service Price</Form.Label>
        <Form.Control type="text" name='price' placeholder="Enter Service Price $" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Service Details</Form.Label>
        <Form.Control type="text" name='description' placeholder="Enter Service Details" />
      </Form.Group>

      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
        </div>
    );
};

export default AddNewService;