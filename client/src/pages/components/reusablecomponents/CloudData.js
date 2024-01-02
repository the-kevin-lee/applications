import React from "react";
import ImplementWeatherData from "../ImplementWeatherData";

const CloudData = ({ location }) => {
    const weatherData = ImplementWeatherData('clouddata', location);

    // Check for the existence of the nested data you're trying to access
    const cloudData = weatherData?.data?.values;

    if (!weatherData || !weatherData.data || !weatherData.data.values) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {cloudData && <h3 className="cloud-card"> Cloud Cover: {cloudData.cloudCover}</h3>}
            {cloudData && <h3 className="cloud-card"> Cloud Base: {cloudData.cloudBase}</h3>}
            {cloudData && <h3 className="cloud-card"> Cloud Ceiling: {cloudData.cloudCeiling}</h3>}
            {cloudData && <h3 className="cloud-card"> UV Index: {cloudData.uvIndex}</h3>}
            {cloudData && <h3 className="cloud-card"> UV Health Concern: {cloudData.uvHealthConcern}</h3>}
        </div>
    );
};

export default CloudData;
