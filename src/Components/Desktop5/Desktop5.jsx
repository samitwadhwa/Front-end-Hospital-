import React, { useContext, useState , useEffect} from "react";
import "./Desktop5.css";
import Box from "@mui/material/Box";
import obj from "../states";
import TextField from "@mui/material/TextField";
import data from "../../hospitalData";
import MenuItem from "@mui/material/MenuItem";
import hospital from "../../images/hospital.png";
import right from "../../images/Vector.png";
import Hospital from "../../Hospital";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import profileImg from "../../images/profile4.png"
// import StateContext from "../../Context/StateProvider";
import "../Home/Home.css";
import { useNavigate } from "react-router-dom";
import {Link} from "react-scroll"
import { setSelected , selectSelectedDistrict , selectSelectedState } from "../../features/statesAndDistricts/stateSlice";
import { useSelector } from "react-redux";

const Desktop5 = () => {
  const [stat, setStat] = useState();
  const [district, setDistrict] = useState([]);
  const[token , settoken] = useState();
  const selectedState = useSelector(selectSelectedState); 
  const selectedDistrict = useSelector(selectSelectedDistrict); 
  console.log(selectedState);
  console.log(selectedDistrict);
  useEffect(() => {
    if (stat != undefined || stat != null) {
      const res = obj.states.filter((item) => item.state == stat);
      setDistrict(res[0].districts);
      // setSelect(true);
    }
    
  }, [stat]);
  useEffect(() => {
    setStat(selectedState);
  }, [selectedState]);
  // const {state , setState} = useContext(StateContext);
  const navigate = useNavigate();
  // console.log(state)
 
  useEffect(() => {
   console.log(localStorage.getItem("login-response"));
   settoken(localStorage.getItem("login-response"));
  })
  const HandleClick = () =>{
    navigate("/appointment")
  }

  return (
    <>
      <div className="page">
      <nav>
          <div className="navbar-menus">
          <ul>
          <li>  <a  style={{color : "#2248A9" , fontWeight : "600"}} href ="/">Home</a> </li>
          <li> <Link style={{color : "#717E9D"}} to="#about" spy={true} smooth={true} offset={-100} duration={500}>About Us</Link>  </li>
          <li> <a href = "/consultancy" style={{color : "#717E9D"}}>Consultancy</a>  </li>
          <li>  <Link style={{color : "#717E9D"}}  to="#our-services" spy={true} smooth={true} offset={-100} duration={500}>Our services</Link>
          </li>
  
          {token ? <li> <a href="/appointment"><img  style={{height: "2.8rem"}}  src={profileImg} alt = "profile" /> </a></li> : <li><a className='login' href = "/login">Login</a></li> }
          </ul>
          </div>
          </nav>
        <div className="wrapper">
          
          <section className="text-header">
            <h2 className="heading">
              COMPLETE LIST OF HOSPITALS IN {selectedDistrict} - {selectedState} 
            </h2>
            <p>
              Find complate list of Public and Private Hospitals network in
              Indore. Select your Hospital and get in touch to the hospital
              staff for any Health Issue. View complete list of Service and
              Facilities of Hospital with Address, Contact No. and other
              Hospital details.
            </p>
          </section>
          <section className="search-body">
            <div className="left">
              <div className="left-wrapper">
                <div className="left-box">
                  <img src={hospital} alt="" />
                </div>
                <div className="content">
                  <div className="title">
                    <h4>District</h4>
                  </div>
                  <div className="sub-title">
                    <span>
                      <img src={right} alt="" />
                    </span>
                    <p>{selectedDistrict}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="right-wrapper">
                {data.map((hospital)=>(
                    <Card key = {hospital.FIELD1} id = {hospital.FIELD1} name = {hospital.Hospital.length > 17 ? hospital.Hospital.slice(0,16) + "..." : hospital.Hospital } desc = {hospital.LocalAddress}/>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Desktop5;
