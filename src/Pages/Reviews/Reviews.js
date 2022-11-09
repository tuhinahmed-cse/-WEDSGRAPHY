import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import ReviewsTable from './ReviewsTable';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <div>
            <h3>
            Review: {reviews.length}
            
            </h3>

            <Table striped bordered hover>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        
        {
            reviews.map(review =><ReviewsTable key={review._id} review={review}></ReviewsTable> )
        }
        
      </tbody>
    </Table>
        </div>
    );
};

export default Reviews;