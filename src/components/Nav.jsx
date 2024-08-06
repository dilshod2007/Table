import React from 'react'
import { NavLink } from 'react-router-dom'
import "../components/Nav.css"

const Nav = () => {
  return (
<div className='nav'>
    <nav className="navbar">
        <ul className="nav-list">
            <li className="nav-item">
                <NavLink to="/" className="nav-link">Home</NavLink>
                <br />
                <NavLink to="/single" className="nav-link">Single</NavLink>
            </li>
        </ul>
    </nav>
</div>

  )
}

export default Nav