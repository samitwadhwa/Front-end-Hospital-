import React from "react";
import "./Desktop7.css";
import { useState } from "react";
import { Link } from "react-scroll";
import pic from "../../images/pic.png";
import doctor from "../../images/doctor.png"
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import DeskModal from "./DeskModal"
import data from "../../hospitalData";
import { setSelected , selectSelectedDistrict , selectSelectedState } from "../../features/statesAndDistricts/stateSlice";
import { useSelector } from "react-redux";
const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const Desktop7 = () => {

  const {hospitalName , id} = useParams();
  const [ModalDeskOpen, setModalDeskOpen] = useState(false);
  const hospitalData = data.filter((hospital) => hospital.FIELD1 == id)
  console.log(hospitalName);
  console.log(id);
  const state = useSelector(selectSelectedState);
  const district = useSelector(selectSelectedDistrict);
  return (
    <>
      <div className="page">
        <nav>
          <div className="navbar-menus">
            <ul>
              <li>
                {" "}
                <a
                  style={{ color: "#2248A9", fontWeight: "600" }}
                  href="/"
                 
                >
                  Home
                </a>{" "}
              </li>
              <li>
                {" "}
                <Link
                  style={{ color: "#717E9D" }}
                  to="#about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  About Us
                </Link>{" "}
              </li>
              <li> <a href = "/consultancy" style={{color : "#717E9D"}}>Consultancy</a>  </li>
              <li>
                {" "}
                <Link
                  style={{ color: "#717E9D" }}
                  to="#our-services"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Our services
                </Link>
              </li>

              <li>
                <a className="login" href="/login">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="banner">
          <h2>
           {hospitalName} - <span>{district}</span> - {state}
          </h2>
        </div>
        <div className="wrapper">
          <div className="sub-wrapper">
            <div className="dleft">
              <div className="img-container">
                <img src={pic} alt="" />
              </div>
            </div>
            <div className="dright">
              <div className="card-col">
                <div className="cl-left">
                  <p>Name:</p>
                </div>
                <div className="cl-right">
                  <p>{hospitalName}</p>
                </div>
              </div>
              <div className="card-colr">
                <div className="cl-left">
                  <p>State:</p>
                </div>
                <div className="cl-right">
                  <p>{state}</p>
                </div>
              </div>
              <div className="card-col">
                <div className="cl-left">
                  <p>District</p>
                </div>
                <div className="cl-right">
                  <p>{district}</p>
                </div>
              </div>
              <div className="card-colr">
                <div className="cl-left">
                  <p>Category:</p>
                </div>
                <div className="cl-right">
                  <p>Private</p>
                </div>
              </div>
              <div className="card-col">
                <div className="cl-left">
                  <p>Contanct No:</p>
                </div>
                <div className="cl-right">
                  <p>0731 4077000, 0731 4001713</p>
                </div>
              </div>
              <div className="card-colr">
                <div className="cl-left">
                  <p>Website:</p>
                </div>
                <div className="cl-right">
                  <p>www.email.com</p>
                </div>
              </div>
              <div className="special">
                <div className="cl-left">
                  <p>Specialities:</p>
                </div>
                <div className="cl-right">
                  <p>
                    Cardiology Urology ,Cardiac Surgery Cancer,Surgery ,
                    Neurology , Ophthalmology, Neurosurgery Surgical ,
                    Gastro-enterologist, General MedicineENT, General SurgeryICU
                    ,Gastro Enterologist CT /MRI, NephrologyPathology,
                    OrthopedicsRadiology, Pediatrics, Physiotherapy ,Gynaecology
                    and Obstratics, Plastic and Cosmetic surgery
                    ,Bariatric/Diabetes Surgeries.
                  </p>
                </div>
              </div>
              <div className="specialr">
                <div className="cl-left">
                  <p>Facilities:</p>
                </div>
                <div className="cl-right">
                  <p>
                    Audiology , Colposcopy , CT Scan EEG, EMG, Echocardiography
                    , GI Endoscopy , Histopathology,Holter Monitoring, MRI
                    Pathology/ Blood Bank , Pulmonary , Function Lab,Uro Dynamic
                    studies, Ultrasound, X-ray
                  </p>
                </div>
              </div>
              <div className="card-col">
                <div className="cl-left">
                  <p>Address:</p>
                </div>
                <div className="cl-right">
                  <p>{hospitalData[0].LocalAddress}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="doctor-list">
            <div className="tag">
              <div className="ltag">
                <h2>
                  Listed <span>Doctor's</span>
                </h2>
              </div>
              
            </div>
            <div className="Appointments" 
            style={{
              marginLeft: "50px"
            }}
            >
    

   
    
    <div className="card-appoint"  
    style={{
    
    gap: "10rem",
    width: "135%",

    }}
    >
      <div className="image-desc">
      <img src={doctor} alt="" />
      <div className="info">
      <h3>Dr. John Doe</h3>

      <h3 style={{color : "#66256B"}} >Gynecologist</h3>
      </div>
      </div>
      <div className="buttons">
        {/* <button className = "yellow" >Reschedule</button> */}
       
        <DeskModal
        open = {ModalDeskOpen}
        setOpen = {setModalDeskOpen}
        />
      </div>
    </div>
    <div className="card-appoint"  
    style={{
    
    gap: "10rem",
    width: "135%",

    }}
    >
      <div className="image-desc">
      <img src={doctor} alt="" />
      <div className="info">
      <h3>Dr. Kunal Kushwaha</h3>

      <h3 style={{color : "#66256B"}} >Gynecologist</h3>
      </div>
      </div>
      <div className="buttons">
        {/* <button className = "yellow" >Reschedule</button> */}
       
        <DeskModal
        open = {ModalDeskOpen}
        setOpen = {setModalDeskOpen}
        />
      </div>
    </div>
    <div className="card-appoint"  
    style={{
    
    gap: "10rem",
    width: "135%",

    }}
    >
      <div className="image-desc">
      <img src={doctor} alt="" />
      <div className="info">
      <h3>Dr. Anish oberoi</h3>

      <h3 style={{color : "#66256B"}} >Gynecologist</h3>
      </div>
      </div>
      <div className="buttons">
        {/* <button className = "yellow" >Reschedule</button> */}
       
        <DeskModal
        open = {ModalDeskOpen}
        setOpen = {setModalDeskOpen}
        />
      </div>
    </div>
    <div className="card-appoint"  
    style={{
    
    gap: "10rem",
    width: "135%",

    }}
    >
      <div className="image-desc">
      <img src={doctor} alt="" />
      <div className="info">
      <h3>Dr. Sam Malik</h3>

      <h3 style={{color : "#66256B"}} >Gynecologist</h3>
      </div>
      </div>
      <div className="buttons">
        {/* <button className = "yellow" >Reschedule</button> */}
       
        <DeskModal
        open = {ModalDeskOpen}
        setOpen = {setModalDeskOpen}
        />
      </div>
    </div>
    
    <div className="card-appoint"  
    style={{
    
    gap: "10rem",
    width: "135%",

    }}
    >
      <div className="image-desc">
      <img src={doctor} alt="" />
      <div className="info">
      <h3>Dr. Ramesh Mahajan</h3>

      <h3 style={{color : "#66256B"}} >Gynecologist</h3>
      </div>
      </div>
      <div className="buttons">
        {/* <button className = "yellow" >Reschedule</button> */}
       
        <DeskModal
        open = {ModalDeskOpen}
        setOpen = {setModalDeskOpen}
        />
      </div>
    </div>
  </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Desktop7;
