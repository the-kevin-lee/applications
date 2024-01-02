import React from "react";
import ImplementWeatherData from "../ImplementWeatherData";

const Humidity = ({ location }) => {
    const weatherData = ImplementWeatherData('humidity', location);


    if (!weatherData || !weatherData.data || !weatherData.data.values) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {weatherData && weatherData.data && weatherData.data.values && (
                <>
                    <h3 className="humidity-card"> Humidity: {weatherData.data.values.humidity}</h3>
                    <h3 className="humidity-card"> Visibility: {weatherData.data.values.visibility}</h3>
                    <h3 className="humidity-card"> Pressure Surface Level: {weatherData.data.values.pressureSurfaceLevel}</h3>
                </>
            )}
        </div>
    );
}

export default Humidity;
