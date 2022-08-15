import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Footer = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        if (email) {
            alert("Thanks for subscribe!");

        }
    }
    return (
        <footer className='mt-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.801' }}>
            <div className='row'>
                <div className='container col-6 pt-3'>
                    <Form onSubmit={handleSubmit} className='w-50 mx-auto'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <div className='text-start h3 text-white'><Form.Label>Stay connected</Form.Label></div>
                            <Form.Control type="email" name="email" placeholder="Enter email" />
                        </Form.Group>
                        <div className='text-start'>
                            <Button variant="primary" type="submit">
                                Subscribe
                            </Button>
                        </div>
                    </Form>
                </div>
                <div className='col-6 mx-auto pt-4'>
                    <h5><Link className=' text-white' to='/'>Home</Link></h5>
                    <h5><Link className=' text-white' to='/photos'>Photos</Link></h5>
                    <h5><Link className=' text-white' to='/blog'>Blog</Link></h5>
                    <h5><Link className=' text-white' to='/about'>About me</Link></h5>
                    <h5><Link className=' text-white' to='/register'>Sign up</Link></h5>
                </div>
            </div>
            <div className='py4'>
                <p className='pt-4 pb-4 text-white'>Copyright Gyanangkur Wedding Photography &copy; {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
};

export default Footer;