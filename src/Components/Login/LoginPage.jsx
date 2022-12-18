import React from "react";
import PropTypes from "prop-types";
import "./LoginPage.css";
import { useHistory , useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import { Backdrop } from "@material-ui/core";
import axios from "axios";
const LoginPage = (props) => {
  // const { handleSubmit, loginstate, error } = props;
  // const { pageHeading } = loginPageLabels;
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
   const navigate = useNavigate();
   const handleSubmit = (e) =>{
     e.preventDefault();
     
     localStorage.setItem("login-response" , '{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkFuaXNoYW5pc2giLCJlbWFpbCI6ImFuaXNoQGdtYWlsLmNvbSIsInR5cGUiOiJhZG1pbiIsImlhdCI6MTY3MTM3MTM3NiwiZXhwIjoxNjcxNDA3Mzc2fQ.8QF55goxcxVO7yhGFlzK-7TwPzKOqx3acWuRAmohYxA","type":"Bearer","email":"anish@gmail.com","role":"SubAdmin","permissions":[],"username":"Anish Agarwal","userid":"Anishanish","streamToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiQW5pc2hhbmlzaCJ9.aLx-_lqW9ZUt6eDkiVkYDZ8OcyLYwxkep1Xtq_oEK2A"}')
      
      navigate("/");
    
  }
  
  return  (
    
    <div className="login-container">
      <div className="login-message">
        <p>Login</p>
      </div>
      <form
        className="login-form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >

        <input
          type="email"
          className="login-credentials"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <input
          type="password"
          className="login-credentials"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
        {/* {error && ( */}
          {/* <p className="error-message">
            {" Something went Wrong. Please Try Again!!"}
          </p> */}
        {/* )} */}
        <button className="login-button" >Login</button>
      </form>
    </div>
  );
};

LoginPage.propTypes = {
  loginPageLabels: PropTypes.object,
  handleSubmit: PropTypes.func,
  loginstate: PropTypes.bool,
  error: PropTypes.bool,
};

export default LoginPage;
