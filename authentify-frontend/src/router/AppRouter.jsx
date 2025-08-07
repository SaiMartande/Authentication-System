import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'
import VerifyOtp from '../pages/VerifyOtp'
import NewPassword from "../pages/NewPassword";
import ResetPassword from '../pages/ResetPassword'
import AccountVerification from '../pages/AccountVerification';

export default function AppRouter() {
  const token = localStorage.getItem("token")

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/account-verification" element={<AccountVerification />} />
        <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  )
}
