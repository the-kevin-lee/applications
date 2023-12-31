import React from "react";
import implementWeatherData from "../implementWeatherData";


const Temp = ({data,location}) => {
    const weatherData = implementWeatherData('temp', location)

    return (
        <div>
            {weatherData && <p> Current Temperature: {weatherData.temperature} Celsius</p>}
        </div>
    )


}

export default Temp;