import React from 'react'
import { Link } from 'react-router-dom'
import {FaBars,FaTimes} from 'react-icons/fa'
import { useRef } from 'react'
import './Navbar.css'
import logoPermos from '../assets/logo permos.jpg'
function Navbar() {
    const navRef = useRef()
    const showNavbar = () =>{
        navRef.current.classList.toggle("responsive_nav")
    }
  return (
    <header>
        <div className='navbar-logo'>
                    <img src={logoPermos} alt='/'  className='logo'/>
                <p className='permos'>
                Permos
                </p>
                </div>
        <nav ref={navRef}>
            <Link to='/'>Home</Link>
            <Link to='/Aboutus'>About us</Link>
            <Link to='/Study'>Study</Link>
            <Link to='/Tips'>Tips</Link>
            <Link to='/Gallery'>Gallery</Link>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}><FaTimes/></button>
        </nav>
        <button className='nav-btn' onClick={showNavbar}>
            <FaBars/>
        </button>
    </header>
  )
}

export default Navbar