import React, { useState } from 'react'
import '../App.css'
import { Box, Drawer, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import CommentRoundedIcon from '@mui/icons-material/CommentRounded'
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded'
import {  ShoppingCartRounded } from '@mui/icons-material'
const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const menuOptions = [
        {
            text: "Home",
            icon: <HomeIcon />
        },
        {
            text:"About",
            icon: <InfoIcon/>
        },
        {
            text:"Testimonials",
            icon: <CommentRoundedIcon/>
        },
        {
            text: "Contact",
            icon: <PhoneRoundedIcon/>
        },
        {
            text: "cart",
            icon: <ShoppingCartRounded/>
        }
    ]
    return (
        <nav>
            <div className='nav-logo-container'></div>
            <div className='navbar-title-container'>
                TaskMaster
            </div>
            <div className='navbar-links-container'>
                <a href="">Daily Planner</a>
                <a href="">Domains</a>
                <a href="">Remainders</a>
                <a href="">Timers</a>
                <button className='primary-button'>Profile</button>
            </div>
        </nav>
    )
}

export default Navbar
