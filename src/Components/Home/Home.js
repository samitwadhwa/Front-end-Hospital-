import React, { useEffect, useState } from "react";
import "./Home.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import line from "../../images/Line1.png";
import obj from "../../Components/states";
import { Link } from "react-scroll";
import MenuItem from "@mui/material/MenuItem";
import samit from "../../images/Samit.jpeg";
import sapt from "../../images/saptarshi.jpeg";
import anish from "../../images/anish.jpeg";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import service from "../../images/serviceImg.png";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
// import { stat } from 'fs';

function Home() {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );
  // const [district , setDistrict] = useState([]);
  const navigate = useNavigate();

  const HandleClick = () => {
    navigate("/searchPage");
  };
  return (
    <>
      <div className="Home">
        <Header />

        <section id="#about">
        <div className="about-wrap" style={{
          display: "flex"
        }}>

          <div className="row">
            <div className="about-right">
              <div className="date">
                <div className="line-about">
                  <img src={line} alt="" />
                  <h2>About us</h2>
                </div>
                <p>
                  we are young and creative company and we offer you fresh{" "}
                  <br /> ideas
                </p>
              </div>
            </div>
            <div className="about-para">
              <p>
              Our appointment booking system is designed to streamline and  <br />
                  simplify the process of scheduling appointments at hospitals <br />
                  and healthcare facilities. Our team is dedicated to providing <br />
                  a user-friendly and efficient platform that makes it easy for <br />
                  patients to schedule appointments and for healthcare providers <br />
                  to manage their schedules. We understand the importance of <br />
                  accessibility and convenience in the healthcare industry, and<br />
                  we are committed to providing a system that meets the needs of<br />
                  both patients and providers. Our system is built on the latest<br />
                  technology and is constantly updated to ensure that it is<br />
                  reliable and secure. We take pride in the quality of our<br />
                  product and are committed to providing exceptional customer<br />
                  service to our users. We are grateful for the opportunity to<br />
                  serve the healthcare community and look forward to helping<br />
                  make the appointment booking process as seamless as possible.<br />
                  Thank you for choosing our system.
              </p>
            </div>
          </div>
          <div className="image-about">
          <img src = {service} alt="" style={{
            height: "17rem",
            margin: "8rem"
          }}/>
          </div>
        </div>
        </section>
        <section
          style={{
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="team">
            <div className="row">
              <div className="heading2">
                <h2>Team Member</h2>
              </div>
              <br />
              <br />
              <div className="cards-row"  >
            

                  <img src = {samit} alt="" style={{
                       height: "11rem",
                      //  width: "70%"
                  }} />
        
                  {/* <Card>{card}</Card> */}
             
              
                  {/* <Card>{card}</Card> */}
                 

                  <img src={sapt} alt=""  
                  style={{
                    height : "11rem"
                  }}
                  />
               
             
                
               

                  <img src={anish} alt="" 
                   style={{
                    height : "11rem"
                  }}
                  />
            
              
             
              </div>
            </div>
          </div>
        </section>
        <section id="#our-services">
          <div className="about-wrap" 
           style={{
            display : "flex",
            // flexDirection : "row"
            }}
          >

          <div className="row">
            <div className="about-right">
              <div className="date">
                <div className="line-about">
                  <img src={line} alt="" />
                  <h2>Our services</h2>
                </div>
                <p>
                  we are young and creative company and we offer you fresh{" "}
                  <br /> ideas
                </p>
              </div>
            </div>
            <div className="about-para" 
           >
              <p>
                Our website will help users to successfully find hospitals in <br />
                their districts and eventually book an appointment with the <br />
                hospital's qualified doctors where you can pay after <br />
                appointment. If users want a medical consultant to meet online <br />
                we have arranged that too in our app.
              </p>
            </div>
          </div>
          <div className="image-about">
          <img src = {service} alt="" style={{
            height: "17rem",
            margin: "8rem"
          }}/>
          </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
