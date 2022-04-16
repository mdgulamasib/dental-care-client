import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" id='navbar-styling' variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'><img src={logo} className='me-md-5' height={90} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className='me-md-3' as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link className='me-md-3' as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link className='me-md-3' href="#pricing">Pricing</Nav.Link>
                            <Nav.Link className='me-md-3' href="#about">About</Nav.Link>
                            <Nav.Link as={Link} to='/login'>
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;