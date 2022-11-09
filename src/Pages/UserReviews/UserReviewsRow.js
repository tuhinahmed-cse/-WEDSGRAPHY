import React from 'react';
import { Image } from 'react-bootstrap';

const UserReviewsRow = ({userReview}) => {

    const {img, name, email,review, time} = userReview;

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
        </tr>
    );
};

export default UserReviewsRow;