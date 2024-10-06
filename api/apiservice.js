/* eslint-disable no-unused-vars */
// apiService.js
import axios from 'axios';

const API_BASE_URL = 'https://intern-task-api.bravo68web.workers.dev';

export const checkHealth = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/health`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to check API health');
    }
};

export const signUpUser = async (email, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signup`, {
            email,
            password
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to sign up user');
    }
};

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/login`, {
            email,
            password
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to login user');
    }
};

export const getProducts = async (token) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/products`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch products');
    }
};

export const getUserDetails = async (token) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/me`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch user details');
    }
};