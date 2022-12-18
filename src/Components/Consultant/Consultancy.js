import React from "react";
import person from "../../images/profile1.png"
// import "../Appointment/Appoint"
import profileImg from "../../images/profile4.png"
import {Link} from "react-scroll"
import sign from "../../images/Vector.png";
import bell from "../../images/bell.png";
import { useState , useEffect } from "react";
import doctor from "../../images/doctor.png" 
import { useNavigate } from "react-router-dom";
function Appoint() {
const[token , settoken] = useState();
const navigate = useNavigate();
const handleClick = () =>{
    navigate("/chat")
}
 useEffect(() => {
  console.log(localStorage.getItem("login-response"));
  settoken(localStorage.getItem("login-response"));
 })
  return (
    <div>
      <nav>
          <div className="navbar-menus">
          <ul>
          <li>  <Link style={{color : "#717E9D"}}  spy={true} smooth={true} offset={-100} duration={300}>Home</Link> </li>
          <li>  <Link  style={{color : "#2248A9" , fontWeight : "600"}}  spy={true} smooth={true} offset={-100} duration={300}>Consultancy</Link> </li>

          <li> <Link style={{color : "#717E9D"}}  spy={true} smooth={true} offset={-100} duration={500}>About Us</Link>  </li>
          <li>  <Link style={{color : "#717E9D"}}   spy={true} smooth={true} offset={-100} duration={500}>Our services</Link>
          </li>
  
          {token ? <li> <a href="/appointment"><img  style={{height: "2.8rem"}}  src={profileImg} alt = "profile" /> </a></li> : <li><a className='login' href = "/login">Login</a></li> }
          </ul>
          </div>
          </nav>
  <div className="Appointments">
    

    <h2  
    style={{
      color : "#2248A9",
      fontSize : "1.3rem",
      marginTop : "4rem"
    }}
    >Consultant Doctors</h2>
    
    <div className="card-appoint">
      <div className="image-desc">
      <img src={doctor} alt="" />
      <div className="info">
      <h3>Dr. John Doe</h3>

      <h3 style={{color : "#66256B"}} >Gynecologist</h3>
      </div>
      </div>
      <div className="buttons">
        
        <button style={{
                backgroundColor: "#FF3E3E",
                color: "white",
                padding: "11px 29px",
                borderRadius: "5px"
        }} onClick = {handleClick} >Chat now</button>
      </div>
    </div>
  </div>

    </div>
  )
}

export default Appoint
