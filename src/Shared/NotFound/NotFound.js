import React from 'react';
import notfound from '../../images/PageNotFound.png'

const NotFound = () => {
    return (
        <div className='text-center mt-5'>
            <img className='mb-5' src={notfound} style={{ width: '300px' }} alt="" />
            <h1 className='mt-5'>Error: 404 (Page Not-found)</h1>
        </div>
    );
};

export default NotFound;