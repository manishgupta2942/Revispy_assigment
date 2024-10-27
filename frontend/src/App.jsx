import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SignUp from './components/SignUp';
import Login from './components/Login';
import VerifyEmail from './components/VerifyEmail';
import ProtectedPage from './components/ProtectedPage';
import InterestsPage from './components/InterestsPage';
import PrivateRoute from './components/PrivateRoute';// Import the PrivateRoute component

const App = () => (
    <Router>
        <Header />
      
        <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            
            {/* Protected Routes */}
            <Route
                path="/protected"
                element={
                    <PrivateRoute>
                        <ProtectedPage />
                    </PrivateRoute>
                }
            />
            <Route
                path="/interests"
                element={
                    <PrivateRoute>
                        <InterestsPage />
                    </PrivateRoute>
                }
            />
        </Routes>
    </Router>
);

export default App;
