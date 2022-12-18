// import React, { useState } from 'react'
import './Home/Home.css'
import {Link} from "react-scroll";
import profileImg from "../images/profile4.png"
// import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
function Navbar() {
 const[token , settoken] = useState();


 useEffect(() => {
  console.log(localStorage.getItem("login-response"));
  settoken(localStorage.getItem("login-response"));
 })
  return (
  
    <div>
      
      <nav>
          <div className="navbar-menus">
          <ul>
          <li>  <Link to="/" spy={true} smooth={true} offset={-100} duration={300}>Home</Link> </li>
          <li> <Link to="#about" spy={true} smooth={true} offset={-100} duration={500}>About Us</Link>  </li>
          <li> <a href = "/consultancy" >Consultancy</a>  </li>
          <li>  <Link to="#our-services" spy={true} smooth={true} offset={-100} duration={500}>Our services</Link>
          </li>
  
          {token ? <li> <a href="/appointment"><img  style={{height: "2.8rem"}}  src={profileImg} alt = "profile" /> </a></li> : <li><a className='login' href = "/login">Login</a></li> }
          </ul>
          </div>
          </nav> 
    </div>
  )
}

export default Navbar
