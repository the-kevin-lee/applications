import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css";
import WeatherForm from "./WeatherForm";

const Navbar = ({ onCitySubmit }) => {
  const [showWelcome, setShowWelcome] = useState(true);
  

  useEffect(() => {
     setTimeout(() => {
      setShowWelcome(false);
      
    }, 1000)
  }, [])

  return (
    <nav>
     
      <h2
        className={`app-name ${
          showWelcome === false ? "fade-in" : "fade-out"
        }`}
      >
        {showWelcome ? "Welcome"  : "PREDICT"}
      </h2>
      <WeatherForm onCitySubmit={onCitySubmit} />
    </nav>
  );
};

export default Navbar;



