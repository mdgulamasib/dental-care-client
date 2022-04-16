import React from 'react';
import './GoogleSignIn.css'
import google_icon from '../../../images/google_icon.png'

const GoogleSignIn = () => {
    return (
        <div>
            <button
                className='btn mx-auto my-2 googlelogin-btn'>
                <img src={google_icon} alt="" />
                <span className='px-2'>Login Using Google Account</span>
            </button>
        </div>
    );
};

export default GoogleSignIn;