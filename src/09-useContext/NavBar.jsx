import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export const NavBar = () => {
    return (
        <nav className="navbar-dark navbar navbar-expand-lg bg-dark rounded">
            <div className="container-fluid">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} >Home</NavLink>
                        <NavLink to="/login" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} >login</NavLink>
                        <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} >about</NavLink>

                    </ul>
                </div>
            </div>
        </nav>


    )
}
