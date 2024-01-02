import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import "./Home.css";
import Navbar from "./components/Navbar";
import WeatherAlert from "./components/reusablecomponents/WeatherAlert";

const Home = () => {
  ////////////// LOCATION HANDLING ////////////////////////////////////////////
  // Default location = New York
  const [chosenLocation, setChosenLocation] = useState("New York");

  // Check for a saved location in local storage on component mount
  useEffect(() => {
    const savedLocation = localStorage.getItem("userLocation");
    console.log("Retrieved location from storage:", savedLocation);
    if (savedLocation) {
      setChosenLocation(savedLocation);
    }
  }, []);

  // Handle city change from WeatherForm
  const handleCityChange = (newCity) => {
    updateLocation(newCity);
  };

  // Update location and save to local storage
  const updateLocation = (newLocation) => {
    setChosenLocation(newLocation);
    localStorage.setItem("userLocation", newLocation);
  };

  return (
    <>
      <div className="main-content-home">
        <Navbar onCitySubmit={handleCityChange} />
        <section className="weather-alert">
          <WeatherAlert chosenLocation={chosenLocation} />
        </section>
        <section>
            <h1 className="cityname-display">{(chosenLocation).toUpperCase()}</h1>
        </section>
        <section className="weather-cards">
          <Card id="1" type="temp" chosenLocation={chosenLocation} />
          <Card id="2" type="precipitation" chosenLocation={chosenLocation} />
          <Card id="3" type="winddata" chosenLocation={chosenLocation} />
          <Card id="4" type="humidity" chosenLocation={chosenLocation} />
          <Card id="5" type="clouddata" chosenLocation={chosenLocation} />
          <Card id="6" type="weathercondition" chosenLocation={chosenLocation} />
        
        </section>

        <br />
      </div>
    </>
  );
};

export default Home;
