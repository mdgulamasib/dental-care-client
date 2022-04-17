import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {

    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }


    return (
        <>
            <Navbar collapseOnSelect expand="lg" id='navbar-styling' variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'><img src={logo} className='me-md-5 ' height={90} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className='me-md-3' as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link className='me-md-3' href="home#services">Services</Nav.Link>
                            <Nav.Link className='me-md-3' as={Link} to="/blog">Blog</Nav.Link>
                            <Nav.Link className='me-md-3' as={Link} to="/about">About</Nav.Link>
                            {
                                user ?
                                    <Nav.Link onClick={handleSignOut} >
                                        Sign-out
                                    </Nav.Link>
                                    :
                                    <Nav.Link as={Link} to="login">
                                        Login
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;