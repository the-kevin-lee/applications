import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import "./Home.css";
import Navbar from "./components/Navbar";
import WeatherAlert from "./components/reusablecomponents/WeatherAlert";
import ImplementWeatherData from "./components/ImplementWeatherData";



const Home = () => {

//  const [showWeatherData,setShowWeatherData] = useState(true);
  const [chosenLocation, setChosenLocation] = useState("new york");
  // const [weatherData, setWeatherData] = useState(ImplementWeatherData(chosenLocation));

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

//  let weatherData;
//   if (showWeatherData) {
//      weatherData = ImplementWeatherData(chosenLocation);
//      setShowWeatherData(false);
//   }
     
  const weatherData = ImplementWeatherData(chosenLocation);


  return (
    <>
        <div className="main-content-home">
            <Navbar onCitySubmit={handleCityChange} />
            <WeatherAlert chosenLocation={chosenLocation} />
            <h1 className="cityname-display">{chosenLocation}</h1>
            <section className="weather-cards">
                {/* Pass the fetched weatherData to each Card */}
                <Card id="1" type="temp" weatherData={weatherData} />
                <Card id="2" type="precipitation" weatherData={weatherData} />
                <Card id="3" type="winddata" weatherData={weatherData} />
                <Card id="4" type="humidity" weatherData={weatherData} />
                <Card id="5" type="clouddata" weatherData={weatherData} />
                <Card id="6" type="weathercondition" weatherData={weatherData} />
            </section>
            <hr className="divider"/>
            <section className="future-forecast">
                <h1>Future Forecast</h1>
            </section>
        </div>
    </>
);
};

export default Home;
