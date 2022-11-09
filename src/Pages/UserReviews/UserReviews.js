import React, { useContext, useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import UserReviewsRow from './UserReviewsRow';

const UserReviews = () => {

    const { user } = useContext(AuthContext);

    console.log(user);

    const [userReviews, setUserReviews] = useState([]);

    useEffect(() => {

        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setUserReviews(data))


    }, [user?.email])

    console.log(userReviews)

    return (
        <Container>

            <h3 style={{ color: '#E59866', fontFamily: 'cursive' }}>
                Total Review: {userReviews.length}



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

                        userReviews.map(userReview => <UserReviewsRow key={userReview._id} userReview={userReview}></UserReviewsRow>)
                    }



                </tbody>
            </Table>
        </Container>


    );
};

export default UserReviews;

// 