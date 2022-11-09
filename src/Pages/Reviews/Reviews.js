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
        
        {
            reviews.map(reeview =><ReviewsTable key={reeview._id} reeview={reeview}></ReviewsTable> )
        }
        
      </tbody>
    </Table>
        </div>
    );
};

export default Reviews;