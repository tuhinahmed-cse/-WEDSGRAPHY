import React from 'react';
const ReviewsTable = ({review}) => {

    const {title,user_email, description } =review;
    return (
        <tr>
          <td>{title}</td>
          <td>{user_email}</td>
          <td>{description}</td>
          <td>{description}</td>
        </tr>
    );
};

export default ReviewsTable;