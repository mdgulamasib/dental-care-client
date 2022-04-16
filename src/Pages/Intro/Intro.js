import React from 'react';
import doctor from '../../images/doctor.png'
import './Intro.css'

const Intro = () => {
    return (
        <div className='container mt-5'>
            <div className='doctor-summary'>
                <div className='summary-text'>
                    <h2>Dr. Brad Wilson</h2>
                    <h6>Dental Surgeon</h6>
                    <p><strong>Dr. Brad Wilson</strong> is a dentist in Idaho Falls, Idaho. He provides advice on proper brushing, flossing, cleaning, healthy gums, and other dental care. It's ideal to visit Dr. Brad Wilson every 6 months or twice a year, absent additional tests that suggest a serious problem. Besides regular consultancy he is an excellent and one of the top surgeon in Idaho Falls city.</p>
                </div>
                <div>
                    <img className='summary-img' src={doctor} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Intro;