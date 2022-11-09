import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Blog = () => {
    return (
      <Container>
        <h3 className='mb-4' style={{ color: '#E59866', marginTop: '50px', fontFamily: 'cursive', textAlign: 'center' }}>PLEASE ADD A NEW SERVICE YOU WANT !!
            </h3>
        <Row>
          <Col></Col>
          <Col lg='6'>

          <Form>

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
    );
};

export default Blog;