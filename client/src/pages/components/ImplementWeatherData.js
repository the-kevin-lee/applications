import { useState, useEffect } from "react";

const baseURL = "http://localhost:5000";

const ImplementWeatherData = (location) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    //fetch info only if location has been set but not the weather data
    if (location && !weatherData) {
      const fetchData = async () => {
        const URL = `${baseURL}/api/weather?location=${encodeURIComponent(
          location
        )}`;
        try {
          const response = await fetch(URL);
          const data = await response.json();
          setWeatherData(data);
        } catch (error) {
          console.error("Error fetching weather info:", error);
        }
      };

      fetchData();
    }
  }, [location, weatherData]);

  return weatherData;
};

export default ImplementWeatherData;
