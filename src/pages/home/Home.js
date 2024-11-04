import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import DailyPlanner from '../../components/DailyPlanner'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate();
    useEffect(()=>{
        const isUserLoggedIn=JSON.parse(window.localStorage.getItem('isUserLoggedin'));
        console.log(isUserLoggedIn);
        if(!isUserLoggedIn){
            navigate("/login")
        }
    },[])
    return (
        <div>
            <div className='home-container'>
                <Navbar></Navbar>
            </div>
            <div className='planner-container'>
                <DailyPlanner />
            </div>
        </div>
    )
}

export default Home

