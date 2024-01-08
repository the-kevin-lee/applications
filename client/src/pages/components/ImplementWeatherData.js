import { useState, useEffect } from "react";

const baseURL = "http://localhost:5000";

const ImplementWeatherData = (location) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      if (!location) return; // Don't fetch if location is not set

      const URL = `${baseURL}/api/weather?location=${encodeURIComponent(location)}`;
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error(`API call failed with status: ${response.status}`);
        }
        const data = await response.json();
        setWeatherData(data);
        console.log("Fetched weather data:", data);
      } catch (error) {
        console.error("Error fetching weather info:", error);
        setError(error.message || 'An unknown error occurred');
      }
    };

    fetchData();
  }, [location]);

  return { weatherData, error };
};

export default ImplementWeatherData;





// import { useState, useEffect } from "react";

// const baseURL = "http://localhost:5000";

// const ImplementWeatherData = (location) => {
//   const [weatherData, setWeatherData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     //fetch info only if location has been set but not the weather data

//     const fetchData = async () => {
//       const URL = `${baseURL}/api/weather?location=${encodeURIComponent(
//         location
//       )}`;
//       try {
//         const response = await fetch(URL);
//         const data = await response.json();
//         if (data.error) {
//           throw new Error(data.error);
//         }
//         setWeatherData(data);
//         console.log("Fetched weather data:", data);
//       } catch (error) {
//         console.error("Error fetching weather info:", error);
//         setError(error.message);
//       }
//     };
//     if (location && weatherData === null) {
//       fetchData();
//     }
//   }, [location, weatherData]);

//   return weatherData;
// };

// export default ImplementWeatherData;
