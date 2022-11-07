import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { FaCameraRetro, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import img from '../../assets/wed.jpeg'
const Login = () => {

    const [error, setError]= useState('');

const handleSubmit =() =>{


}


const handleGoogleSignIn =()=>{

}

    return (
        <div style={{backgroundColor:'#F5EEF8', backgroundImage:`url(https://i.pinimg.com/originals/6c/b2/fc/6cb2fc7aa33ba8777830de4d99a1e140.jpg)`, }}>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase text-center text-info "> <FaCameraRetro></FaCameraRetro> WELCOME TO WEDSGRAPHY</h2>
                  <p className=" mb-5 text-center text-info">Please Login to See More Features!!</p>
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <p className="small">
                          <a className="text-primary" href="#!">
                            Forgot password?
                          </a>
                        </p>
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Login
                        </Button>
                      </div>
                    </Form>
                    <div className='mt-3 text-center'>
                    <Button variant="outline-secondary"><FaGoogle></FaGoogle> Login With Google</Button>
                    </div>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account?{" "}
                        <Link to='/register' className="text-primary fw-bold">
                          Sign Up
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    );
};

export default Login;