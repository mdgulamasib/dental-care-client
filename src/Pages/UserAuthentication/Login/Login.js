import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';
import './Login.css'

const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password)
    }

    const navigateRegister = event => {
        navigate('/register')
    }


    return (
        <div className='container text-center w-25 mx-auto'>
            <h2 className=' text-color text-center my-5 fw-bold'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Email Address" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button className='btn-bg w-50' variant="primary" type="submit">
                    Login
                </Button>
            </Form>

            <p className='mt-3'>Don't have an account?<span className='text-primary btn' onClick={navigateRegister}>Click to Register</span></p>
            <div className='d-flex align-items-center'>
                <div className='divider-bg w-50'></div>
                <p className='mt-2 px-2 fw-bold'>OR</p>
                <div className='divider-bg w-50'></div>
            </div>
            <GoogleSignIn></GoogleSignIn>
        </div>
    );
};

export default Login;