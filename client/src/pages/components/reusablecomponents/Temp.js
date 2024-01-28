import React from "react";
import './weatherCards.css'

const Temp = ({weatherData, error}) => {


    if (error) {
        return <div>Error: {error}</div>
    }

    if (!weatherData || !weatherData.data || !weatherData.data.values) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {weatherData && <h2 className="temp-card-title">Temperature</h2>}
            {weatherData && <h3 className="temp-card"> {weatherData.data.values.temperature}° Celsius</h3>}
            {weatherData && <h3 className="temp-card"> Feels Like: {weatherData.data.values.temperatureApparent}° Celsius</h3>}
            {weatherData && <h3 className="temp-card"> Dew Point: {weatherData.data.values.dewPoint}° Celsius</h3>}

        </div>
    )


}

export default Temp;