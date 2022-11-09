import React from 'react';
import { Image } from 'react-bootstrap';
const ReviewsTable = ({reeview}) => {

    const {img, name, email,review, time } =reeview;
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

export default ReviewsTable;