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

    const handleDelete = id =>{

        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if (proceed){

            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{

                if(data.deletedCount > 0){

                    alert('deleted successfully');
                    const remaining = userReviews.filter(rew => rew._id !== id);
                    setUserReviews(remaining);
                }
            })


        }

    }

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
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {

                        userReviews.map(userReview => <UserReviewsRow key={userReview._id} userReview={userReview} handleDelete={handleDelete} ></UserReviewsRow>)
                    }



                </tbody>
            </Table>
        </Container>


    );
};

export default UserReviews;

// 