import React from "react";



const WeatherCondition = ({weatherData, error}) => {
    
    if (error) {
        return <div>Error: {error}</div>
    }

    if (!weatherData || !weatherData.data || !weatherData.data.values) {
        return <div>Loading...</div>;
    }


    return (
        <div>
            {weatherData && <h2 className="weathercondition-card-title">Condition</h2>}
            {weatherData && <h3 className="weathercondition-card"> {weatherData.data.values.weatherCode}</h3>}
            
        </div>
    )
}

export default WeatherCondition;



