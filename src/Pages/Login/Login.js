import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { FaCameraRetro, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {

   const {providerLogin, signIn}= useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const [error, setError] = useState('');
    const navigate =useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';




    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            navigate(from, {replace:true});
            toast.success('Login SucessFully! Thank You')
        })
        .catch(error => {
          console.error(error);
          setError(error.message);
          toast.error(error.message);

        })
    }


    const handleGoogleSignIn =()=>{

        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, {replace:true});
            toast.success('Login SucessFully! Thank You')
    
        })
        .catch(error => console.error(error))
    
    }

    return (
        <div style= {{ backgroundColor: '#F5EEF8', backgroundImage: `url(https://i.pinimg.com/originals/6c/b2/fc/6cb2fc7aa33ba8777830de4d99a1e140.jpg)`, }}>
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
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label className="text-center">
                                                    Email address
                                                </Form.Label>
                                                <Form.Control type="email" name='email' placeholder="Enter email" required />
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicPassword"
                                            >
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" name='password' placeholder="Password" required />
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicCheckbox"
                                            >

                                            </Form.Group>
                                            <div className="d-grid">
                                                <Button variant="primary" type="submit">
                                                    Login
                                                </Button>
                                                
                                            </div>
                                            <Form.Text className="text-danger ms-4">
                                                    {error}
                                                </Form.Text>
                                        </Form>
                                        <div className='mt-3 text-center'>
                                            <Button variant="outline-secondary" onClick={handleGoogleSignIn}><FaGoogle></FaGoogle> Login With Google</Button>
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