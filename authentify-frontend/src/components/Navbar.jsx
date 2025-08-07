import React from 'react'
import logo from '../assets/logo1.png'
import ProfileDropdown from './ProfileDropdown'

export default function Navbar({ name, verified }) {
  return (
    <nav className="navbar navbar-light bg-white px-4">
      <div className="navbar-brand d-flex align-items-center">
        <img src={logo} alt="Authify" style={{ height: 40 }} />
        <span className="ms-2 fw-bold">Authentify</span>
      </div>
      <ProfileDropdown name={name} verified={verified} />
    </nav>
  )
}
