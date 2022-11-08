import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <Container className='mt-5' style= {{ backgroundColor: '#F5EEF8', backgroundImage: `url(https://fujifilm-x.com/en-us/wp-content/uploads/sites/11/2020/06/EXPOSURE_CENTER_RASK7031.jpg)`, height:'70vh'}}>
            <Row >
<Col lg='4'></Col>
<Col lg='4'>

<h1 className='text-white text-center' style={{marginTop:'100px',}}> Still, have a question?</h1>

<p className=' text-center mt-5' style={{color:'#7E5109', fontWeight:'700'}}> If you have any kind of question about my service feel free to knock me. I am 24/7 availanle in Phone call Messenger , WhatsApp etc. Also  if you want to know my service charge please contact with me. Thank You</p>
<br />
<Button variant="warning">Contact Me</Button>

</Col>
<Col lg='4'>
</Col>


            </Row>
        </Container>
    );
};

export default Contact;