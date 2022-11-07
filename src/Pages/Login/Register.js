import React, { useContext, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { FaCameraRetro, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate =useNavigate();



const handleSubmit=(event)=>{

    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, photoURL, password);

    createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
            form.reset();
            handleUpdateProfile(name, photoURL);
            navigate('/');
            toast.success('Registration Complete!! Welcome to our site ')
        })
        .catch(e => {

            setError(e.message);
            toast.error(e.message);
        });

}

const handleUpdateProfile = (name, photoURL) =>{

    const profile = {
      displayName:name,
      photoURL:photoURL
    }

    updateUserProfile(profile)
    .then(()=>{})
    .catch(error =>console.error(error));
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
                  <p className=" mb-5 text-center text-info">Please Register to See More Features!!</p>
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Your Name
                        </Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter Name" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Your PhotoURL
                        </Form.Label>
                        <Form.Control type="text" name='photoURL' placeholder="Enter PhotoURL" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Register
                        </Button>
                      </div>
                      <Form.Text className="text-danger ms-4">
                                {error}
                            </Form.Text>
                    </Form>
                    <div className='mt-3 text-center'>
                    
                    </div>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already have an account?{" "}
                        <Link to='/login' className="text-primary fw-bold">
                          Login
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

export default Register;