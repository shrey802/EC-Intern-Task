/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// Login.jsx
import React, { useState } from 'react';
import { loginUser } from '../../api/apiservice';
import '../css/auth.css'
import { useNavigate } from "react-router-dom";
const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser(email, password);
            onLogin(response.token);
            setMessage('Login successful!');
            navigate('/products');
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <h2>Login</h2>
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
            <button type="submit">Login</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default Login;
