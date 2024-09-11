import React from 'react'
import Navbar from './Navbar'
import '../App.css'
import DailyPlanner from './DailyPlanner'
const Home = () => {
  return (
    <div>
    <div className='home-container'>
     <Navbar></Navbar>
    </div>
    <div className='planner-container'>
      <DailyPlanner/>
    </div>
    </div>
  )
}

export default Home


