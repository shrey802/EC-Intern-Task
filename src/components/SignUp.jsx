/* eslint-disable no-unused-vars */
// Signup.jsx
import React, { useState } from 'react';
import { signUpUser } from '../../api/apiservice';
import '../css/auth.css'
import { useNavigate } from "react-router-dom";
const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const response = await signUpUser(email, password);
            setMessage(response.data.result);
            navigate('/login');
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <form onSubmit={handleSignUp}>
            <h2>Register</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Sign Up</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default Signup;
