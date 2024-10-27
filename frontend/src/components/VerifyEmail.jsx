import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const VerifyEmail = () => {
    const [code, setCode] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const email = location.state?.email; // Get email from the location state

    const handleChange = (e) => {
        setCode(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const res = await axios.post('api/auth/verify-email', {
                email,
                verificationCode: code,
            });
            setSuccess(res.data.message);

            // Redirect after a short delay
            setTimeout(() => {
                navigate('/protected');
            }, 1500);
        } catch (err) {
            setError(err.response?.data?.error || 'Failed to verify email');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Verify your email</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={code} 
                        onChange={handleChange} 
                        placeholder="Enter verification code" 
                        className="block w-full p-2 mb-4 border rounded" 
                        required 
                    />
                    <button type="submit" className="w-full bg-black text-white p-2 rounded">Verify</button>
                </form>
                {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
                {success && <p className="text-green-500 mt-4 text-center">{success}</p>}
            </div>
        </div>
    );
};

export default VerifyEmail;
