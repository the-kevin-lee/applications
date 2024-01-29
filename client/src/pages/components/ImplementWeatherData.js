import { useState, useEffect } from "react";

// const baseURL = "http://localhost:5000";

const ImplementWeatherData = (location) => {
  const [weatherData, setWeatherData] = useState(null); // Holds weather data
  const [error, setError] = useState(null); // Holds  errors

  useEffect(() => {
    // If location isn't provided, set an error and fetch data
    if (!location) {
      setError("No location provided.");
      return;
    }

    // function to fetch weather data
    const fetchData = async () => {
      const URL = `/api/weather?location=${encodeURIComponent(location)}`;
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error(`API call failed with status: ${response.status}`);
        }
        const data = await response.json();
        setWeatherData(data); // Update the state with the fetched data
        console.log("Fetched weather data:", data);
      } catch (error) {
        console.error("Error fetching weather info:", error);
        setError(error.message || 'An unknown error occurred'); // Set error state
      }
    };

   
    const timerId = setTimeout(() => {
        fetchData();
    }, 1000);
   
    return ()=> {
        clearTimeout(timerId);
    }

    // fetchData(); 
  }, [location]); // Only refetch data when the location changes

  return { weatherData, error }; // Return both weather data and error state
};

export default ImplementWeatherData;
