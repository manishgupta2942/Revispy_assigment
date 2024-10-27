// PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const isAuthenticated = !!localStorage.getItem('token'); // Check if token exists
    console.log(isAuthenticated);
    

    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
