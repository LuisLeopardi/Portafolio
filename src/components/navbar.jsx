import React from 'react'
import {BrowserRouter as Router, Link } from 'react-router-dom';

export const Navbar = () => {
return (
    <>
    <Router>
    <h1 className='logo'> Websites <br/> <i>&amp; apps </i>  </h1>
    <nav className='navbar'>     
        <Link to="/Portafolio"> Projects </Link>
        <Link to="/Portafolio/about"> About me </Link>   
        <p >Order <i>(comming soon)</i>  </p>
    </nav>
    </Router>
    </>
)}