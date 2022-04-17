import React from 'react';
import my_photo from '../../images/my-photo.png'

const About = () => {
    return (
        <div className='text-center container w-75 mt-5'>
            <img src={my_photo} style={{ width: '250px' }} alt="" />
            <h5>Md Gulam Asib</h5>
            <p>My professional ambition differs from what I am doing now; I want to advance my career in the Cloud Computing industry. Before that as long as I stay in Bangladesh I'd want to learn web app development skills. I want to finish Jankhar Mahbub's web-programming course within the next six months. When the course is completed, I will not sit idle; instead, I will participate in real-world programming challenges to continue to develop my expertise. I am devoting enough time each day to achieving my present objective. I practice coding for 6 to 10 hours a day. I am not a genius by birth. As a result, accomplishing the same work takes a long time and demands a lot of patience.</p>
        </div>
    );
};

export default About;