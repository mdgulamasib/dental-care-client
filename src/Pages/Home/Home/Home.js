import React from 'react';
import FAQ from '../FAQ/FAQ'
import Banner from '../Banner/Banner'
import Intro from '../DoctorIntro/Intro'

import './Home.css'
import Services from '../Services/Services'


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