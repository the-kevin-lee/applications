import { useState, useEffect } from "react";

const ImplementForecastData = (location) => {
    const [forecastData, setForecastData] = useState({ hourly: null, daily: null });
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!location) return;

        const baseURL = `http://localhost:5000/api/forecast`;
        const fetchForecast = async (timestep) => {
            const url = `${baseURL}?location=${encodeURIComponent(location)}&timesteps=${timestep}`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`API call failed with status: ${response.status}`);
            }
            return response.json();
        };

        Promise.all([fetchForecast('1h'), fetchForecast('1d')])
            .then(([hourlyData, dailyData]) => {
                setForecastData({ hourly: hourlyData, daily: dailyData });
            })
            .catch((error) => {
                setError(error.message || 'An unknown error occurred');
            });

    }, [location]);

    return { 
        hourlyForecast: forecastData.hourly, 
        dailyForecast: forecastData.daily, 
        error 
    };
};

export default ImplementForecastData;
