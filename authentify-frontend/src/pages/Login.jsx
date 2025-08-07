import React, { useState } from 'react'
import API from '../services/api'
import { useNavigate, Link } from 'react-router-dom'
import { showSuccess, showError } from '../components/ToastNotification'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    API.post('/login', { email, password })
      .then(res => {
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("name", res.data.fullName)
        localStorage.setItem("verified", res.data.verified)
        localStorage.setItem("email", email)
        showSuccess("Login successful!")
        setTimeout(() => {
          navigate("/dashboard")
        }, 900)

      })
      .catch(() => showError("Invalid credentials"))
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#805ee7' }}>
      <div className="bg-white p-5 rounded">
        <h3 className="text-center">Login</h3>
        <div className="mb-3">
          <label>Email Id</label>
          <input className="form-control" type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input className="form-control" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <Link to="/reset-password" className="d-block text-end mb-3">Forgot password?</Link>
        <button className="btn btn-custom w-100" onClick={handleLogin}>
          Login
        </button>

        <p className="text-center mt-2">
          Don't have an account? <Link to="/register">Sign up</Link>
        </p>
      </div>
    </div>
  )
}
