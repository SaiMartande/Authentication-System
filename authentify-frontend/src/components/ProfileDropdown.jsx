import React from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';
import { showSuccess, showError } from './ToastNotification';

export default function ProfileDropdown({ name, verified }) {
  const navigate = useNavigate();

  const handleVerify = () => {
    navigate("/account-verification");
  };

  const sendOtp = () => {
    API.post('/forgot-password', { email: localStorage.getItem("email") })
      .then(() => showSuccess("OTP sent to email"))
      .catch(() => showError("Failed to send OTP"));
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    navigate("/login");
  };

  return (
    <div className="dropdown">
      <button
        type="button"
        className="btn btn-dark rounded-circle"
        data-bs-toggle="dropdown"
      >
        {name?.[0]?.toUpperCase()}
      </button>
      <ul className="dropdown-menu dropdown-menu-end">
        {!verified && (
          <li>
            <button className="dropdown-item" onClick={handleVerify}>
              Verify Account with OTP
            </button>
          </li>
        )}
        <li>
          <button className="dropdown-item" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}
