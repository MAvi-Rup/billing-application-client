import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const formSubmit = () => {

    }
    const navigateRegister = () => {

    }
    const resetPassword = () => {

    }
    return (
        <div className='container w-50'>
            <h1 className='text-center mt-5 mb-5'>Please Login</h1>
            <Form onSubmit={formSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className='bg-opacity-50 text-white' ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className='bg-opacity-50 text-white' ref={passwordRef} autoComplete='off' type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
            </Form>
            <p className='text-danger fst-italic'>New to Billing Database? <Link to="/register" className='text-dark pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>
            <p className='text-danger fst-italic'>Forget Password? <button className='btn btn-link text-dark pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>

        </div>
    );
};

export default Login;