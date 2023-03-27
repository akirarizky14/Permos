import React from 'react';
import './Footer.css';
import logoPermos from '../assets/logo permos.jpg'
import logofb from '../assets/Logofb.png'
import logoig from '../assets/logo ig.jpg'
import logoyt from '../assets/logo youtube 2.png'
import logogmail from '../assets/logo gmail.png'

function Footer() {
  return (
    <div className='Footer'>
        <div className='footer-container'>
        <div className='socialmedia'>
            <div className='logo'>
                <img src={logoPermos} alt='/' className='logopermos'/>
            </div>
            <div className='facebook1'>
                <img src={logofb} alt='/' className='fb2'/>
                <p className='s1'>@Permos</p>
            </div>
            <div className='ig1'>
                <img src={logoig} alt='/' className='ig2'/>
                <p className='s2'>@Permos</p>
            </div>
            <div className='yt1'>
                <img src={logoyt} alt='/' className='yt2'/>
                <p className='s3'>@Permos</p>
            </div>
            <div className='wa1'>
                <img src={logogmail} alt='/' className='wa2'/>
                <p className='s4'>@Permos</p>
            </div>
        </div>
        <h1 className='bawah'>©Permira Moskow 2023</h1>
        </div>
    </div>
  );
};

export default Footer;