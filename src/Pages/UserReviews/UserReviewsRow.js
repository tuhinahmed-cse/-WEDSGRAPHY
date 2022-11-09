import React from 'react';
import { Button, Image } from 'react-bootstrap';

const UserReviewsRow = ({userReview, handleDelete }) => {

    const {_id, img, name, email,review, time} = userReview;

    console.log(userReview)
    return (
        <tr>
          <td> <Image
                    style={{ height: '30px' }}
                    roundedCircle
                    src={img}>
                  </Image> </td>
          <td>{name}</td>
          <td>{email}</td>
          <td>{review}</td>
          <td>{time}</td>
          <td> <Button className='me-3' variant="warning">Edit</Button>
          <Button onClick={() => handleDelete(_id)} variant="danger">Delete</Button>
           </td>
        </tr>
    );
};


export default UserReviewsRow;