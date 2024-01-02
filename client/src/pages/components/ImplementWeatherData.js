
import { useState, useRef, useEffect } from "react";

const baseURL = 'http://localhost:5000';
const THROTTLE_TIME = 20000; // 30 seconds

const ImplementWeatherData = (id, location) => {
    const [weatherData, setWeatherData] = useState(null);
    const [dataFetched, setDataFetched] = useState(false); // Add dataFetched state

    const timer = useRef(null);

    useEffect(() => {
        if (!dataFetched) {
            // Fetch info
            const fetchData = async () => {
                const URL = `${baseURL}/api/weather?location=${encodeURIComponent(location)}`;
                try {
                    const response = await fetch(URL);
                    const data = await response.json();
                    setWeatherData(data);
                    setDataFetched(true); // Set dataFetched to true after fetching data
                } catch (error) {
                    console.error("Error fetching weather info");
                }
            };

            // Throttle API call
            const throttleApiCall = () => {
                if (timer.current) {
                    clearTimeout(timer.current);
                }
                timer.current = setTimeout(fetchData, THROTTLE_TIME);
            };

            // If location exists, throttle API call
            if (location) {
                throttleApiCall();
            }

            // Cleanup timer on component unmount
            return () => {
                if (timer.current) {
                    clearTimeout(timer.current);
                }
            };
        }
    }, [dataFetched]);

    return weatherData;
};

export default ImplementWeatherData;


// import React from "react";
// import {useState, useEffect} from "react";



// const baseURL = 'http://localhost:5000';

// const ImplementWeatherData = (id, location) => {
//     const [weatherData, setWeatherData] = useState(null);

//     useEffect(() => {
//         //fetch info
//         const fetchData =  async() => {
//             const URL = `${baseURL}/api/weather?location=${encodeURIComponent(location)}`;
//             try {
//                 const response = await fetch(URL);
//                 const data = await response.json();
//                 setWeatherData(data);
//             } catch (error) {
//                 console.error("Error fetching weather info");
//             }
//         }


//         // if location exists, fetch info
//         if (location) {
//             fetchData();
//         }

// }, [id,location]);

// return weatherData;

// }

// export default ImplementWeatherData;