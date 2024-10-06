/* eslint-disable no-unused-vars */
// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signup from './components/SignUp';
import Login from './components/Login';
import Products from './components/Product';

function App() {
    const [token, setToken] = useState('');

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Signup />} />
                    <Route path="/login" element={<Login onLogin={setToken} />} />
                    <Route path="/products" element={<Products token={token} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
