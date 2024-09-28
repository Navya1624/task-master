import React from 'react'
import Navbar from '../../components/Navbar'
import DailyPlanner from '../../components/DailyPlanner'

const Home = () => {
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

