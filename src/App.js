import React, { useState } from "react";
import "./app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Login/Login";
import Map from "./Components/Map/Map";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/footer/footer";
import Cabinet from "./Components/Cabinet/Cabinet";
import Home from "./Components/Home/Home";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = (email) => {
    setEmail(email);
    setLoggedIn(true);
  };

  return (
    <>
      <Router>
        <Navbar />
        <Footer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cabinet" element={<Cabinet />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
