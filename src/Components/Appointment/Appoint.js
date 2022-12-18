import React from "react";
import person from "../../images/profile1.png"
import "./Appoint.css"
import sign from "../../images/Vector.png";
import bell from "../../images/bell.png";
import doctor from "../../images/doctor.png" 
function Appoint() {
  return (
    <div>
      <div className="top-right">
      <a href="/" style={{
        color : "#717E9D"
      }} > Home</a>
      <div className="appointment">
      <img src={sign} alt = ""/>
      <a href="">Your Appointment</a>

      </div>
      <img className='bell' src = {bell} alt="" />
      <div className="person">
        <h3>David Morse</h3>
        <img src={person} alt="" />
      </div>

      </div>
     
  <div className="Appointments">
    

    <h2  
    style={{
      color : "#2248A9",
      fontSize : "1.3rem",
      marginTop : "4rem"
    }}
    >All Appointments</h2>
    
    <div className="card-appoint">
      <div className="image-desc">
      <img src={doctor} alt="" />
      <div className="info">
      <h3>Dr. John Doe</h3>

      <h3 style={{color : "#66256B"}} >Gynecologist</h3>
      </div>
      </div>
      <div className="buttons">
        <button className = "yellow" >Reschedule</button>
        <button className = "red" >Cancel</button>
      </div>
    </div>
  </div>

    </div>
  )
}

export default Appoint
