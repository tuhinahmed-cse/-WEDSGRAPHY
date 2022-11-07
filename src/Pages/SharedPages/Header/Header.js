import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaCamera } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);


    const handleLogOut =()=>{
        logOut()
        .then(() => { })
        .catch(error => console.error(error))

    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="info" variant="light">
        <Container>
          <Navbar.Brand ><FaCamera style={{fontSize:'36px'}}></FaCamera> <Link to='/' style={{textDecoration:'none', color: 'whitesmoke', fontWeight:'bold',}}> WEDSGRAPHY</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link ><Link to='/' style={{textDecoration:'none', color: 'whitesmoke', fontWeight:'bold', marginLeft:'60px', fontSize:'16px'}}>HOME</Link></Nav.Link>
              <Nav.Link ><Link to='/services' style={{textDecoration:'none', color: 'whitesmoke', fontWeight:'bold', marginLeft:'60px', fontSize:'16px'}}>SERVICES</Link></Nav.Link>
              <Nav.Link ><Link to='/blog' style={{textDecoration:'none', color: 'whitesmoke', fontWeight:'bold', marginLeft:'60px',fontSize:'16px'}}>BLOG</Link></Nav.Link>
              
            </Nav>
            <Nav>
              {/* <Nav.Link ><Link to='/login'>Login</Link></Nav.Link> */}

              {
                                user?.uid ?
                                    
                                        <>
                                        <Nav.Link ><Link to='/blog' style={{textDecoration:'none', color: 'whitesmoke', fontWeight:'bold', marginLeft:'60px',fontSize:'16px'}}>My Reviews</Link></Nav.Link>

                                        <Nav.Link ><Link to='/blog' style={{textDecoration:'none', color: 'whitesmoke', fontWeight:'bold', marginLeft:'60px', marginRight:'40px',fontSize:'16px'}}>Add Service</Link></Nav.Link>

                                        <Button variant="light" onClick={handleLogOut} style={{color:'goldenrod',fontWeight:'700'}}>Log out</Button>

                                        
                                        
                                        </>
                                    :
                                    <>
                                       

                                        <Link to='/login'><Button variant="light" style={{color:'goldenrod',fontWeight:'700'}}>Login</Button></Link>

                                    </>
                            }
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;