import React from "react";
import ImplementWeatherData from "../ImplementWeatherData";


const WeatherCondition = ({data,location}) => {
    const weatherData = ImplementWeatherData('weathercondition', location)

    if (!weatherData || !weatherData.data || !weatherData.data.values) {
        return <div>Loading...</div>;
    }


    return (
        <div>
            {weatherData && <h3 className="weathercondition-card"> Condition: {weatherData.data.values.weatherCode}</h3>}
            
        </div>
    )
}

export default WeatherCondition;



