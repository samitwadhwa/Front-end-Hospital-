import React, { useEffect, useState, useContext } from "react";
import "./Home/Home.css";
import InputLabel from "@mui/material/InputLabel";
import obj from "./states";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

import { setSelected , selectSelectedDistrict , selectSelectedState } from "../features/statesAndDistricts/stateSlice";
import { useDispatch } from "react-redux";
// import StateContext from "../Context/StateProvider";
function Header() {
  const dispatch = useDispatch();
  const [stat, setStat] = useState();
  const [district, setDistrict] = useState([]);
  const[select , setSelect] = useState(false);
  useEffect(() => {
    if (stat != undefined || stat != null) {
      const res = obj.states.filter((item) => item.state == stat);
      setDistrict(res[0].districts);
      setSelect(true);
    }
  }, [stat]);
  const navigate = useNavigate();
  const HandleClick = () => {
    // console.log(stat)

    navigate("/searchpage");
  };
  return (
    <div>
      <header>
        <Navbar />
        <div className="all-content" id="#home">
          <div className="content">
            <h3>
              Search Your Nearest Hospital
              <br />
              over 1,000 hospital in india.
            </h3>
          </div>

          <div className="header-title">
            <form action="">
              <div className="form">
                <h2>Search Hospital</h2>
                <p>Hint: please select state,district to search hospital</p>
              </div>

              <div className="form-inputs">
                <div className="input1">
                  <FormControl fullWidth>
                    <InputLabel
                      id="demo-simple-select-label"
                      style={{
                        backgroundColor: "white",
                        fontSize: "1.3rem",
                        fontFamily: "poppins,sans-serif",
                        fontWeight: "700",
                        color: "black",
                      }}
                    >
                      {" "}
                      State{" "}
                    </InputLabel>
                    <Select
                      style={{
                        backgroundColor: "white",
                      }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value = ""
                      label="state"
                      onChange={(e) => {
                        setStat(e.target.value);
                       
                      }}
                      >
                        
                      
                      {obj.states.map((use) => (
                        <MenuItem value={use.state}>{use.state}</MenuItem>
                      ))}
                     
                    </Select>
                  </FormControl>
                </div>
                <div className="input2">
                  <FormControl fullWidth>
                    <InputLabel
                      id="demo-simple-select-label"
                      style={{
                        backgroundColor: "white",
                        fontSize: "1.3rem",
                        fontFamily: "poppins,sans-serif",
                        fontWeight: "700",
                        color: "black",
                      }}
                    >
                      {" "}
                      District{" "}
                    </InputLabel>
                    <Select
                      style={{
                        backgroundColor: "white",
                      }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={age}
                      label="district"
                        onChange={(e) => {
                          dispatch(setSelected({selectedState: stat , selectedDistrict : e.target.value}))
                        }}
                    >
                      {/* {console.log(district)} */}
                      {district.map((item) => (
                        <MenuItem value={item}>{item}</MenuItem>
                      ))}
                      {/* <MenuItem >Ten</MenuItem>
      <MenuItem >Twenty</MenuItem>
      <MenuItem >Thirty</MenuItem> */}
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div className="btn">
                {select ? <button onClick={HandleClick}>Search</button> : <button>Search</button>}
              </div>
            </form>
          </div>
        </div>
      </header>
      {/* {console.log(stat)} */}
    </div>
  );
}
export default Header;
