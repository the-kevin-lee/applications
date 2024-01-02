import React from "react";
import ImplementWeatherData from "../ImplementWeatherData";
import './weatherCards.css'

const Temp = ({data,location}) => {
    const weatherData = ImplementWeatherData('temp', location)

    if (!weatherData || !weatherData.data || !weatherData.data.values) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {weatherData && <h3 className="temp-card"> Current Temperature: {weatherData.data.values.temperature} Degrees Celsius</h3>}
            {weatherData && <h3 className="temp-card"> Feels Like: {weatherData.data.values.temperatureApparent} Degrees Celsius</h3>}
            {weatherData && <h3 className="temp-card"> Dew Point: {weatherData.data.values.dewPoint} Degrees Celsius</h3>}

        </div>
    )


}

export default Temp;