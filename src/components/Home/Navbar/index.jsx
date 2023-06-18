import React from 'react'
import './style.css'

const Navbar = () => {
  return (
    <>
    <div className='nav'>
    <div className='logo'>OST Placement Search Private Limited</div>
    
        <div className='myactive'><a href='#' >Blogs</a></div>
        <div className='two'><a href='#'>Newsfeed</a></div>
        <div className='three'><a href='#'>Upcoming Events</a></div>
        <div className='four'><a href='#'>Jobs</a></div>
        </div>
    </>
  )
}

export default Navbar
