import React from 'react';
import { Form, Button } from 'react-bootstrap';

const CheckOut = () => {
    return (
        <div className='container text-center w-25 mx-auto'>
            <h2 className=' text-color text-center my-5 fw-bold'>Contact Form</h2>
            <Form>
                <Form.Group className="mb-3" controlId="username">
                    <Form.Control type="text" placeholder="Enter Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="phoneNumber">
                    <Form.Control type="number" placeholder="Phone Number" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="textfield">
                    <Form.Control type="text" placeholder="Mention Your Available Time" required />
                </Form.Group>
                <Button className='btn-bg w-50' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div >
    );
};

export default CheckOut;