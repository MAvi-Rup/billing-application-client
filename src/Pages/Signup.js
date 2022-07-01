import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Signup = () => {
    const emailRef = useRef('');
    const nameRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();


    const formSubmit = (e) => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        const data = {
            name,
            email,
            password
        }


        const url = `http://localhost:5000/registration`

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
               e.target.reset()
               toast('Regestration Success')
            })

    }
    const navigateLogin = () => {
        navigate('/login')
    }

    return (
        <div className='container w-50'>
            <h1 className='text-center mt-5 mb-5'>Please Singup</h1>
            <Form onSubmit={formSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control className='bg-opacity-50' ref={nameRef} type="name" placeholder="Enter Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className=' bg-opacity-50' ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className='bg-opacity-50 ' ref={passwordRef} autoComplete='off' type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Signup
                </Button>
            </Form>
            <p className='fst-italic'>Already have an account?<Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
        </div>
    );
};

export default Signup;