import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import CustomLink from '../CustomLink/CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user, loading] = useAuthState(auth);
    const signout = () => {
        signOut(auth);
    };

    return (
        <header className='mb-5'>
            <>
                <Navbar collapseOnSelect expand="lg" fixed="top" bg="white" variant="dark">
                    <Container>

                        <Navbar.Toggle className='ms-auto bg-black' aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            {/* <Nav className="me-auto">
                                <Nav.Link href="home#services">Services</Nav.Link>
                                <Nav.Link href="home#experts">Experts</Nav.Link>
                            </Nav> */}
                            <Nav className="m-auto">
                                <Nav.Link className='text-black' as={CustomLink} to="/">Home
                                </Nav.Link>
                                <Nav.Link className='text-black' as={CustomLink} to="/photos">Photos
                                </Nav.Link>
                                <Nav.Link className='text-black' as={CustomLink} to="/blog">Blog
                                </Nav.Link>
                                <Nav.Link className='text-black' as={CustomLink} to="/about">About me
                                </Nav.Link>
                                {
                                    user ?
                                        <button className='btn btn-link text-decoration-none text-black fw-bold' onClick={signout}>Sign Out</button>
                                        :
                                        <Nav.Link as={CustomLink} to="/login">
                                            Login
                                        </Nav.Link>}
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </header>
    );
};

export default Header;