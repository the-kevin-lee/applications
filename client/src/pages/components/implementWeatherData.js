import React from "react";
import {useState, useEffect} from "react";



const baseURL = 'http://localhost:5000';

const implementWeatherData = (id, location) => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        //fetch info
        const fetchData =  async() => {
            const URL = `${baseURL}/api/weather?location=${encodeURIComponent(location)}`;
            try {
                const response = await fetch(URL);
                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                console.error("Error fetching weather info:", data);
            }
        }


        // if location exists, fetch info
        if (location) {
            fetchData();
        }

}, [id,location]);

return weatherData;

}

export default implementWeatherData;