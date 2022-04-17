import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import Intro from '../DoctorIntro/Intro';
import Services from '../Services/Services';
import FAQ from './FAQ/FAQ';

import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Intro></Intro>
            <Services></Services>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;