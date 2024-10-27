import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/auth/login', formData);
            localStorage.setItem('token', res.data.token);
            window.location.href = '/protected';
        } catch (err) {
            alert(err.response.data.error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        className="block w-full p-2 mb-2 border rounded" 
                        required 
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={formData.password} 
                        onChange={handleChange} 
                        className="block w-full p-2 mb-4 border rounded" 
                        required 
                    />
                    <button type="submit" className="w-full bg-black text-white p-2 rounded">Login</button>
                </form>
                <p className="text-center mt-4">
                    Don't have an account? <Link to="/" className="text-blue-500 hover:underline">Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;

