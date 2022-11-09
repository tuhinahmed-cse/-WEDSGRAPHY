import React from 'react';
import { Table } from 'react-bootstrap';

const ReviewsTable = ({review}) => {

    const {title,user_email, description } =review;
    return (
        <tr>
          <td>{title}</td>
          <td>{user_email}</td>
          <td>{description}</td>
        </tr>
    );
};

export default ReviewsTable;