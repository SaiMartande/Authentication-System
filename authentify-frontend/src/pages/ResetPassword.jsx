import React, { useState } from 'react'
import API from '../services/api'
import { useNavigate } from 'react-router-dom'
import { showSuccess, showError } from '../components/ToastNotification'

export default function ResetPassword() {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const handleSendOtp = () => {
    if (!email) {
      showError("Please enter your email")
      return
    }

    API.post('/forgot-password', { email })
      .then(() => {
        showSuccess("OTP sent to your email")
        localStorage.setItem("email", email)
        navigate('/verify-otp', { state: { mode: "forgot-password" } })
      })
      .catch(() => showError("Failed to send OTP"))
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#805ee7' }}>
      <div className="bg-white p-5 rounded" style={{ width: 400 }}>
        <h3 className="text-center mb-4">Reset Your Password</h3>
        <input
          className="form-control mb-3"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button className="btn btn-custom w-100" onClick={handleSendOtp}>
          Send OTP
        </button>
      </div>
    </div>
  )
}
