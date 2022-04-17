import React from 'react';

const Footer = () => {
    const copy = '©'
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5'>
            <p><small>copyright {copy} {year} <a style={{ textDecoration: 'none' }} href="#">mdgulamasib.com</a> <span>All Right Reserved</span> </small> </p>
        </footer>
    );
};

export default Footer;