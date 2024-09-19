import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <nav>
            <div className='nav-logo-container'></div>
            <div className='navbar-title-container'>
                TaskMaster
            </div>
            <div className='navbar-links-container'>
                <Link to="/">Daily Planner</Link>
                <Link to="">Domains</Link>
                <Link to="">Remainders</Link>
                <Link to="">Timers</Link>
                <button className='primary-button'>Profile</button>
            </div>
        </nav>
    )
}
export default Navbar
