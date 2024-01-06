import React from "react";

const CloudData = ({ weatherData }) => {
    // Check for the existence of the nested data you're trying to access
    if (!weatherData || !weatherData.data || !weatherData.data.values) {
        return <div>Loading...</div>;
    }

   

    return (
        <div>
            {weatherData && <h3 className="cloud-card"> Cloud Cover: {weatherData.cloudCover}</h3>}
            {weatherData && <h3 className="cloud-card"> Cloud Base: {weatherData.cloudBase}</h3>}
            {weatherData && <h3 className="cloud-card"> Cloud Ceiling: {weatherData.cloudCeiling}</h3>}
            {weatherData && <h3 className="cloud-card"> UV Index: {weatherData.uvIndex}</h3>}
            {weatherData && <h3 className="cloud-card"> UV Health Concern: {weatherData.uvHealthConcern}</h3>}
        </div>
    );
};

export default CloudData;
