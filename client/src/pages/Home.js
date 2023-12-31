import React from "react";
import { Link } from "react-router-dom";
import Card from "./components/Card";
import './Home.css';
import Navbar from "./components/Navbar";


const Home = () => {
    ////////////// LOCATION HANDLING vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
    // default location = New York
    const [chosenLocation, setChosenLocation] = useState('New York');  
    const [weatherData, setWeatherData] = useState(null);


    useEffect(() => {
        const savedLocation = localStorage.getItem('userLocation');
        if (savedLocation) {
            setChosenLocation(savedLocation);
        }
    }, []);

    // fetching and setting new weather data based on newCity
    const handleCityChange = async (newCity) => {
        updateLocation(newCity); // new localStorage location will be changed to new city
        setWeatherData(newCity); // new Weather Data will passed to Cards below
    }

    // once user entered a new location from form
    const updateLocation = (newLocation) => {
        setChosenLocation(newLocation);
        localStorage.setItem('userLocation', newLocation);
    }
    /////////////////////////////////////////////////////////////////


    return (
        <>

            <Navbar onCitySubmit={handleCityChange}/>
            <section className="weather-cards">
                <Card id="1" weatherData={weatherData} chosenLocation={chosenLocation} />
                <Card id="2" weatherData={weatherData} chosenLocation={chosenLocation} />
                <Card id="3" wetaherData={weatherData} chosenLocation={chosenLocation} />
            </section>
            
            
            <h1>Welcome! </h1>


        </>

    )
}


export default Home