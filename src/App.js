// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import "./tailwindCSS/Tailwind_Output.css";
// import Desktop from "./Components/Desktop5/Desktop5";
import { Route, Routes } from "react-router-dom";
import Appoint from './Components/Appointment/Appoint';
import Login from "./Components/Login/LoginPage";
import Consultancy from "./Components/Consultant/Consultancy"
import Chat from "./Components/chat/Chat"
import Desktop7 from './Components/Desktop7/Desktop7';
import Desktop5 from './Components/Desktop5/Desktop5';
function App() {
  return (
    <div className="App">
   
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchPage" element={<Desktop5/>} />
        {/* <Appoint/> */}
        <Route path="/appointment" element={<Appoint/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/consultancy" element={<Consultancy/>} />
        <Route path="/hospitalView/:hospitalName/:id" element={<Desktop7/>} />
        <Route path="/chat" element={<Chat/>} />
      </Routes>
    </div>
  );
}
export default App;