import React from "react";
import { Link } from "react-router-dom";
import Card from "./components/Card";
import './Home.css';
import WeatherForm from "./components/WeatherForm";
import Navbar from "./components/Navbar";


const Home = () => {
    ////////////// LOCATION HANDLING vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
    // default location = New York
    // const [chosenLocation, setChosenLocation] = useState('New York');  


    // useEffect(() => {
    //     const savedLocation = localStorage.getItem('userLocation');
    //     if (savedLocation) {
    //         setChosenLocation(savedLocation);
    //     }
    // }, []) // deploy once

    // // once user entered a new location from form
    // const updateLocation = (newLocation) => {
    //     setChosenLocation(newLocation);
    //     localStorage.setItem('userLocation', newLocation);
    // }
    /////////////////////////////////////////////////////////////////


    return (
        <>

            <Navbar />
            <section className="weather-cards">
                <Card id="1" />
                <Card id="2" />
                <Card id="3" />
            </section>
            
            
            <h1>Welcome! </h1>


        </>

    )
}


export default Home