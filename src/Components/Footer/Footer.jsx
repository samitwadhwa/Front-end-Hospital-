import React from "react";
// import Retechgen_Logo from "../../icons/Retechgen_Final_LOGO.png";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.png";
import Facebook from "../../images/facebook.svg";
import LinkedIn from "../../images/linkedin.svg";
import Twitter from "../../images/twitter.svg";

function Footer() {
  return (

    <>
    <footer className=" flex justify-around flex-wrap m-3 mt-14">
      <div className=" w-[19rem] h-60">
        <div className="logo">
          <img className=" h-40 m-4" src={Logo} alt="Logo" />
        </div>
        <div className="text">
          <p className="text-[#1F2347]/70 font-medium text-sm p-3">
            Known For conveninet, user-freindly, reliable, secure and flexible appointment booking system.
          </p>
        </div>
      </div>
      <div className=" w-[19rem] h-60">
        <div className="flex flex-col ml-3 mt-10">
          <h3 className="text-xl text-[#1F2347] font-semibold">Quick Links</h3>
          <div className="flex flex-col items-center h-1 w-30 bg-[#1B8DA6] mt-2"></div>
        </div>
        <div className="links">
          <ul className="text-[#1F2347]/70 font-medium text-sm p-3 flex flex-col justify-around h-40">
            {/* <Link to="/about"> */}
              <li className=" hover:text-retechgen-blue cursor-pointer">About Us</li>
            {/* </Link> */}
            {/* <Link to="/services"> */}
              <li className=" hover:text-retechgen-blue cursor-pointer">Services</li>
            {/* </Link> */}
            {/* <Link to="/products"> */}
              <li className=" hover:text-retechgen-blue cursor-pointer">Products</li>
            {/* </Link> */}
            {/* <Link to="/contact"> */}
              <li className=" hover:text-retechgen-blue cursor-pointer">Contact Us</li>
            {/* </Link> */}
          </ul>
        </div>
      </div>
      <div className=" w-[19rem] xs:h-48 sm:h-60">
        <div className="flex flex-col ml-3 mt-10">
          <h3 className="text-xl text-[#1F2347] font-semibold">Social</h3>
          <div className="flex flex-col items-center h-1 w-18 bg-[#1B8DA6] mt-2"></div>
        </div>
        {/* <div className="email mt-4">
          <form action="https://api.sheetmonkey.io/form/4kkKsqrdXd5j1tjjQAvsC4" method="post">
          <input
            className="border border-solid border-[#000000] w-52 p-5 text-sm focus:outline-none rounded-sm box-border h-8 mt-3 ml-3"
            type="email"
            name="email"
            placeholder="Enter your Email"
          />
          </form>
        </div> */}
        <div className=" w-44 mt-7 socials">
          <ul className="flex justify-around ">
            <li className=" border border-solid border-[#00000014] p-1 rounded-[50%] cursor-pointer">
              <a href="#" target="_blank"><img  className="px-1 h-6" src={Facebook} alt="Facebook" /></a>
              
            </li>
            <li className=" border border-solid border-[#00000014] p-1 rounded-[50%] cursor-pointer">
              <a href="#"><img className="h-[1.2rem]" src={LinkedIn} alt="LinkedIn" /></a>
            </li>
            <li className=" border border-solid border-[#00000014] p-1 rounded-[50%] cursor-pointer">
              <a href="#"><img className="h-6" src={Twitter} alt="Twitter" /></a>
            </li>
          </ul>
        </div>
      </div>
    </footer>

    <div className="h-05 w-full bg-[#000000]/20 mt-14">
    </div>
    <h2 className="text-[#1F2347]/70 my-4 font-semibold text-sm  flex justify-around"> @2022 - All rights reserved</h2>

    </>
  );
}

export default Footer;
