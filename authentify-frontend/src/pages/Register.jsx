import React, { useState } from 'react';
import API from '../services/api';
import { useNavigate, Link } from 'react-router-dom';
import { showSuccess, showError } from '../components/ToastNotification';

export default function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    API.post(
      '/register',
      { fullName, email, password },
      { withCredentials: true }
    )
      .then(() => {
        showSuccess('Registered successfully!');
        navigate('/login');
      })
      .catch((err) => {
        console.error(err);
        showError('Registration failed');
      });
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: '#805ee7' }}
    >
      <div className="bg-white p-5 rounded">
        <h3 className="text-center">Create Account</h3>
        <div className="mb-3">
          <label>Full Name</label>
          <input
            className="form-control"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Email Id</label>
          <input
            className="form-control"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            className="form-control"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Link to="/forgot-password" className="d-block text-end mb-3">
          Forgot password?
        </Link>
        <button className="btn btn-custom w-100" onClick={handleRegister}>
          Sign Up
        </button>
        <p className="text-center mt-2">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}
