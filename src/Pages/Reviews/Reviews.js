import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ReviewsTable from './ReviewsTable';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    const {service_id} = useLoaderData();
    
   

   


    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${service_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
            

    }, [service_id]);

    return (
        <div>
            <h3 style={{ color: '#E59866',  fontFamily: 'cursive' }}>
             Total Review: {reviews.length}
            
            </h3>

            <Table striped bordered hover>
      <thead>
        <tr>
          <th> Reviewer Image</th>
          <th>Name</th>
          <th>Email</th>
          <th>Review Details</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        
        
           <ReviewsTable  reeview={reviews}></ReviewsTable> 
        
      </tbody>
    </Table>
        </div>
    );
};

export default Reviews;