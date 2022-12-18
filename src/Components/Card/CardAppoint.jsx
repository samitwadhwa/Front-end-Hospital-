import React from "react";
import "../Desktop5/Desktop5.css";
import pic from "../../images/doctor.png";

const CardAppoint = (props) => {
  return (
    <>
      <div className="card">
        <div className="card-left">
          <img src={pic} alt="" />
        </div>
        <div className="card-middle">
          <p className="card-title">{props.name}</p>
          <p className="card-sub-title">Add : {props.desc}</p>
        </div>
        <div className="card-right">
          <div className="card-btn">
            <button className="btn">View</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardAppoint;