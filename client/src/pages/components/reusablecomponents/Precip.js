import React from "react";
import ImplementWeatherData from "../ImplementWeatherData";


const Precip = ({data,location}) => {
    const weatherData = ImplementWeatherData('precip', location)

    if (!weatherData || !weatherData.data || !weatherData.data.values) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {weatherData && <h3><b>Chances Of</b></h3>}
            
            {weatherData && <h3 className="precip-card"> Precipitation: {weatherData.data.values.precipitationProbability}</h3>}
            {weatherData && <h3 className="precip-card"> Freezing Rain: {weatherData.data.values.freezingRainIntensity}</h3>}
            {weatherData && <h3 className="precip-card"> Rain: {weatherData.data.values.rainIntensity}</h3>}
            {weatherData && <h3 className="precip-card"> Snow: {weatherData.data.values.snowIntensity}</h3>}
            {weatherData && <h3 className="precip-card"> Sleet: {weatherData.data.values.sleetIntensity}</h3>}
            
        </div>
    )


}

export default Precip;