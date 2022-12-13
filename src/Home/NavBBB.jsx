import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../img/aseelogo.jpg"
export default function NavBBB() {
  return (
    <div className="navbar">
        <div className='container'>
            <div className="logo">
                <Link to="/">
                    <img alt="Nawabi" src={logo}/>
                </Link>
            </div>
            <div className='links'>
                <Link className='link' to="#"><h6>Art</h6></Link>
                <Link className='link' to="#"><h6>Technology</h6></Link>
                <Link className='link' to="#"><h6>Design</h6></Link>
                <Link className='link' to="/login"><h6>Login</h6></Link>
                <Link className='link' to="/register"><h6>Register</h6></Link>
                <Link className="link" to="/write"><h6>Write</h6></Link>
            </div>
        </div>
    </div>
  )
}
