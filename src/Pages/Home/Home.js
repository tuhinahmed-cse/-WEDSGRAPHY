import React from 'react';
import useTitle from '../../hooks/useTitle';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {

    useTitle('Home');
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <AboutMe></AboutMe>
            <Contact></Contact>
        </div>
    );
};

export default Home;