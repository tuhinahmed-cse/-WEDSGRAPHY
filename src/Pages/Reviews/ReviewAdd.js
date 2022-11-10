import React, { useContext} from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ReviewAdd = ({service_id, title, _id}) => {
    const { user} = useContext(AuthContext);
    

    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const service_id = form.service_id.value;
        const title = form.title.value;
        const name = form.name.value;
        const img = form.img.value;
        const email = form.email.value;
        const review = form.review.value;
        const time = form.time.value;

        const send = {
            service_id,
            title,
            name,
            img,
            email,
            review,
            time
        }

        fetch('http://localhost:5000/reviewadd', {
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
                    toast.success(' Review Added successfully')
                    form.reset();
                   window.location.reload();
                   
                    
                }
            })
            .catch(er => console.error(er));
        

    }

    return (
        <div style={{backgroundColor:"#D6EAF8", height:'70vh'}}>
            <Container>
        <h3 className='mb-4' style={{ color: '#E59866', padding:'30px', fontFamily: 'cursive', textAlign: 'center' }}>PLEASE ADD YOUR REVIEW !!
            </h3>
        <Row>
          <Col></Col>
          <Col lg='6'>

          <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="hidden" name='service_id' defaultValue={service_id} placeholder="Service ID" readOnly />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="hidden" name='title' defaultValue={title} placeholder="Service Title" readOnly />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="hidden" name='name' defaultValue={user?.displayName} placeholder="Name" readOnly />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="hidden" name='img' defaultValue={user?.photoURL} placeholder="Image" readOnly />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control  type="hidden" name='email' defaultValue={user?.email} placeholder="email" readOnly />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Review</Form.Label>
        <Form.Control type="text" name='review' placeholder="Enter Your Review" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Review Time</Form.Label>
        <Form.Control type="time" name='time' placeholder="" required />
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

export default ReviewAdd;