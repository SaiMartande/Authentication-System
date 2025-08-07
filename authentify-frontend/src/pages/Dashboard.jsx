import React from 'react'
import Navbar from '../components/Navbar'

export default function Dashboard() {
  const name = localStorage.getItem("name")
  const verified = localStorage.getItem("verified") === "true"

  return (
    <>
      <Navbar name={name} verified={verified} />
      <div className="d-flex flex-column align-items-center mt-5">
        <img
          src="/src/assets/dashboard.png" 
          alt="Dashboard"
          style={{ width: 200 }}
        />
        <h5 className="mt-3">Hey {name} 👋</h5>
        <h2 className="fw-bold mt-2">Welcome to our product</h2>
        <p className="text-center w-50">
          Let’s start with a quick product tour and you can set up the authentication in no time!
        </p>
        <button className="btn btn-primary mt-3">Get Started</button>
      </div>
    </>
  )
}
