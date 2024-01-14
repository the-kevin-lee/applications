import { useState, useEffect } from "react";

const ImplementForecastData = (location) => {
  const [forecastData, setForecastData] = useState({ hourly: [], daily: [] });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!location) return;

    const fetchHourlyForecast = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/forecast?location=${encodeURIComponent(location)}&timesteps=1h`);
        if (!response.ok) {
          throw new Error(`Hourly API call failed with status: ${response.status}`);
        }
        const data = await response.json();
        setForecastData(prevData => ({ ...prevData, hourly: data.hourly }));
      } catch (error) {
        setError(error.message || 'An unknown error occurred');
      }
    };

    const fetchDailyForecast = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/forecast?location=${encodeURIComponent(location)}&timesteps=1d`);
        if (!response.ok) {
          throw new Error(`Daily API call failed with status: ${response.status}`);
        }
        const data = await response.json();
        setForecastData(prevData => ({ ...prevData, daily: data.daily }));
      } catch (error) {
        setError(error.message || 'An unknown error occurred');
      }
    };

    // Fetch hourly forecast immediately
    fetchHourlyForecast();

    // Fetch daily forecast after a delay
    const timerId = setTimeout(() => {
      fetchDailyForecast();
    }, 10000); // Delay the daily forecast request by 10 seconds

    // Clean up the timeout when the component unmounts
    return () => {
      clearTimeout(timerId);
    };
  }, [location]);

  return {
    hourlyForecast: forecastData.hourly,
    dailyForecast: forecastData.daily,
    error
  };
};

export default ImplementForecastData;
