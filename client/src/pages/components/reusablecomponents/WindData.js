import React from "react";



const WindData = ({weatherData, error}) => {
   
    if (error) {
        return <div>Error: {error}</div>
    }

    if (!weatherData || !weatherData.data || !weatherData.data.values) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {weatherData && <h2 className="wind-card-title">Wind Data</h2>}
            {weatherData && <h3 className="wind-card"> Speed : {weatherData.data.values.windSpeed}</h3>}
            {weatherData && <h3 className="wind-card"> Direction: {weatherData.data.values.windDirection}</h3>}
            {weatherData && <h3 className="wind-card"> Gust : {weatherData.data.values.windGust}</h3>}
        </div>
    )


}

export default WindData;