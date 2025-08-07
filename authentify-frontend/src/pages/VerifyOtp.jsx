import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';
import { showSuccess, showError } from '../components/ToastNotification';

export default function VerifyOtp() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const navigate = useNavigate();

  const email = localStorage.getItem("email");

  useEffect(() => {
    if (!email) {
      showError("No email found. Please try again.");
      navigate("/login");
    }
  }, [email, navigate]);

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleSubmit = () => {
    const otpCode = otp.join('');
    if (otpCode.length !== 6) {
      showError("Please enter a 6-digit OTP");
      return;
    }

    // Only handle forgot-password verification
    API.post('/verify-reset-otp', {
      email,
      otp: otpCode
    })
      .then(() => {
        showSuccess("OTP verified!");
        navigate("/new-password");
      })
      .catch(() => {
        showError("Invalid OTP");
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ background: '#805ee7' }}>
      <div className="bg-white p-5 rounded text-center" style={{ width: 400 }}>
        <h4 className="mb-3">Reset Password - Enter OTP</h4>
        <p className="text-muted mb-4">
          Enter the 6-digit code sent to your email <strong>{email}</strong>.
        </p>
        <div className="d-flex justify-content-center mb-3">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength="1"
              className="form-control mx-1 text-center fw-bold"
              style={{ width: 50, fontSize: 24 }}
              value={digit}
              onChange={e => handleChange(e.target.value, index)}
            />
          ))}
        </div>
        <button className="btn btn-custom w-100" onClick={handleSubmit}>
          Verify OTP
        </button>
      </div>
    </div>
  );
}
