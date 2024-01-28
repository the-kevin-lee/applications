import React from "react";

const CloudData = ({ weatherData, error }) => {
    // Check for the existence of the nested data you're trying to access
    if (error) {
        return <div>Error: {error}</div>;
    }


    if (!weatherData || !weatherData.data || !weatherData.data.values) {
        return <div>Loading...</div>;
    }

   

    return (
        <div>
            {weatherData && <h2 className="cloud-card-title">Clouds</h2>}
            {weatherData && <h3 className="cloud-card"> Cover: {weatherData.data.values.cloudCover}</h3>}
            {weatherData && <h3 className="cloud-card"> Base: {weatherData.data.values.cloudBase}</h3>}
            {weatherData && <h3 className="cloud-card"> Ceiling: {weatherData.data.values.cloudCeiling}</h3>}
            {weatherData && <h3 className="cloud-card"> UV Index: {weatherData.data.values.uvIndex}</h3>}
            {weatherData && <h3 className="cloud-card"> UV Health Concern: {weatherData.data.values.uvHealthConcern}</h3>}
        </div>
    );
};

export default CloudData;
