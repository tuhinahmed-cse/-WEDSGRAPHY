import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
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