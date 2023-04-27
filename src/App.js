import React from "react";
import './app.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Login/Login";
import Map from "./Components/Map/Map";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Map />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
       </Router>
    </>
  )
}

export default App;
