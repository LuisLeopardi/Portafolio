import React from 'react'
import {BrowserRouter as Router, NavLink} from 'react-router-dom';

export const Navbar = () => {
return (
    <>
    <Router>
    <h1 className='logo'> Websites <br/> <i>&amp; apps </i>  </h1>
    <nav className='navbar'>     
        <NavLink to="/"> Projects </NavLink>
        <NavLink to="/about"> About me </NavLink>   
        <p >Order <i>(comming soon)</i>  </p>
    </nav>
    </Router>
    </>
)}