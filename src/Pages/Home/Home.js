import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import Intro from '../DoctorIntro/Intro';
import Services from '../Services/Services';

import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Intro></Intro>
            <Services></Services>
        </div>
    );
};

export default Home;