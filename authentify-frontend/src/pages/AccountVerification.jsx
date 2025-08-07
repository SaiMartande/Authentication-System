import React, { useEffect, useState } from 'react';
import API from '../services/api';
import { showSuccess, showError } from '../components/ToastNotification';
import { useNavigate } from 'react-router-dom';

export default function AccountVerification() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (!storedEmail) {
      showError("No email found. Please log in again.");
      navigate("/login");
      return;
    }

    setEmail(storedEmail);

    // Send account verification OTP
    sendVerificationOtp(storedEmail);
  }, [navigate]);

  const sendVerificationOtp = (email) => {
    setLoading(true);
    API.post('/send-account-verification-otp', { email })
      .then((res) => {
        showSuccess(res.data || `Verification OTP sent to ${email}`);
      })
      .catch(() => {
        showError("Failed to send OTP. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleVerify = () => {
    const otpCode = otp.join('');
    if (otpCode.length !== 6) {
      showError("Please enter a 6-digit OTP.");
      return;
    }

    API.post('/verify-otp', {
      email,
      otp: otpCode
    })
      .then((res) => {
        showSuccess(res.data || "Account verified successfully!");
        navigate("/login");
      })
      .catch(() => {
        showError("Invalid OTP. Please try again.");
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ background: '#805ee7' }}>
      <div className="bg-white p-5 rounded text-center" style={{ width: 400 }}>
        <h4 className="mb-3">Verify Your Account</h4>
        <p className="text-muted mb-4">
          Enter the 6-digit OTP sent to your email <strong>{email}</strong>.
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
        <button
          className="btn btn-custom w-100"
          onClick={handleVerify}
          disabled={loading}
        >
          {loading ? "Sending OTP..." : "Verify Account"}
        </button>
      </div>
    </div>
  );
}
