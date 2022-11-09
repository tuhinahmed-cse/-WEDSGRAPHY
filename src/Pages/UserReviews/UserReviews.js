import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import toast from 'react-hot-toast';
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

        const proceed = window.confirm('Are you sure, you want to Delect review');
        if (proceed){

            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{

                if(data.deletedCount > 0){

                    toast.success('Deleted Successfully');
                    const remaining = userReviews.filter(rew => rew._id !== id);
                    setUserReviews(remaining);
                }
            })


        }

    }

    return (
        <Container className='mt-5'>
            <h2  style={{ color: '#E59866', fontFamily: 'cursive', textAlign:'center' }}> List Of My All Review</h2>

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