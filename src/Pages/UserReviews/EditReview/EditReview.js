import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const EditReview = () => {

    const {user} = useContext(AuthContext);

    const [userReview, setUserReview] = useState({});
    const navigate = useNavigate();

    const router = useParams();
    const {id} =router;
    useEffect(() => {

        fetch(`http://localhost:5000/reviewss/${id}`)
            .then(res => res.json())
            .then(data => setUserReview(data))


    }, [id])

console.log(userReview)


const handleSubmit =event => {


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


        fetch(`http://localhost:5000/reviewss/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(send)
    })
    .then(res => res.json())
    .then(data => {
      toast.success('upadate sucessFull');
      navigate('/myreviews');

    })
    .catch(err => toast.error(err.message))
}


    return (
        <div style={{backgroundColor:"#D6EAF8", height:'50vh'}}>
            <Container>
        <h3 className='mb-4' style={{ color: '#E59866', padding:'30px', fontFamily: 'cursive', textAlign: 'center' }}>PLEASE Edit YOUR REVIEW !!
            </h3>
        <Row>
          <Col></Col>
          <Col lg='6'>

          <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="hidden" name='service_id' defaultValue={userReview.service_id} placeholder="Service ID" readOnly />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label> Service Title</Form.Label>
        <Form.Control type="text" name='title' defaultValue={userReview.title} placeholder="Service Title" readOnly />
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
        <Form.Label> Please Edit Your Review</Form.Label>
        <Form.Control type="text" name='review' defaultValue={userReview.review} placeholder="Enter Your Review" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="hidden" name='time' defaultValue={userReview.time} placeholder="" required />
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

export default EditReview;