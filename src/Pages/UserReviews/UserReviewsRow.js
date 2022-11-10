import React from 'react';
import { Button, Image } from 'react-bootstrap';

const UserReviewsRow = ({userReview, handleDelete, handleEdit }) => {

    const {_id, title, img, name, email,review, time} = userReview;

    console.log(userReview)
    return (
        <tr>
            <td>{title}</td>
          <td> <Image
                    style={{ height: '30px' }}
                    roundedCircle
                    src={img}>
                  </Image> </td>
          <td>{name}</td>
          <td>{email}</td>
          <td>{review}</td>
          <td>{time}</td>
          <td> <Button onClick={() => handleEdit(_id)} className='me-3' variant="warning">Edit</Button>
          <Button onClick={() => handleDelete(_id)} variant="danger">Delete</Button>
           </td>
        </tr>
    );
};


export default UserReviewsRow;