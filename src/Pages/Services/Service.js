import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, price, description, img } = service;

    const navigate = useNavigate();

    const navigateToCheckOut = id => {
        navigate('/checkout')
    }


    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: "auto" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <h6 className="card-text fw-bold">Approximate Fees: ${price}</h6>
                    <p className="card-text">{description}</p>
                    <button onClick={() => navigateToCheckOut()} className="btn-primary book-a-call-style">Book a Call</button>
                </div>
            </div>
        </div >
    );
};

export default Service;