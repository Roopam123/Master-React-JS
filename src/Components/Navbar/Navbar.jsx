import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/logo.png';
import './Navbar.css';
import { IoMdMenu } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";

const Navbar = () => {
  const [menu,setMenu] = useState(true);
  return (
    <header>
      <div className='nav-left'>
        {/* Logo Are */}
        <div className="log">
          <Link to='/'><img src={logo} alt="" /></Link>
        </div>
      </div>
      <div className={menu?'nav-right':"nav-right-menu"}>
        {/* Menu area */}
        <div className='nav-menu'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contect">Contect</Link></li>
          </ul>
        </div>
        {/* Singup and Login Area */}
        <div className='nav-btn'>
          <span><Link to="/singup" className='lab-btn'>Create Account</Link></span>
          <span><Link to="/login">Login</Link></span>
        </div>
      </div>
      {/* Menu Icons */}
      <div className='menuicon'>
        <span><IoMdMenu onClick={()=>{setMenu(false)}} className={menu?"":"menu-hidden"}/></span>
        <span><MdOutlineCancel onClick={()=>{setMenu(true)}} className={menu?"menu-hidden":""}/></span>
      </div>
    </header>
  )
}

export default Navbar

