import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import API from '../services/api'
import { showSuccess, showError } from '../components/ToastNotification'

export default function NewPassword() {
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = () => {
    API.post('/reset-password', {
      email: localStorage.getItem("email"),
      newPassword: password
    })
      .then(() => {
        showSuccess("Password reset successfully!")
        navigate("/login")
      })
      .catch(() => showError("Failed to reset password"))
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#805ee7' }}>
      <div className="bg-white p-5 rounded">
        <h3 className="text-center">New Password</h3>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-custom w-100" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  )
}
