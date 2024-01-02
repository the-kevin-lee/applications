import React from "react";
import ImplementWeatherData from "../ImplementWeatherData";


const WindData = ({data,location}) => {
    const weatherData = ImplementWeatherData('winddata', location)


    if (!weatherData || !weatherData.data || !weatherData.data.values) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {weatherData && <h3 className="wind-card"> Wind Speed : {weatherData.data.values.windSpeed}</h3>}
            {weatherData && <h3 className="wind-card"> Direction: {weatherData.data.values.windDirection}</h3>}
            {weatherData && <h3 className="wind-card"> Gust : {weatherData.data.values.windGust}</h3>}
        </div>
    )


}

export default WindData;