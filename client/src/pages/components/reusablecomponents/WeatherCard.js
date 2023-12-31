import React from "react";


const WeatherCard = ({APIdata}) => {
    // toggling between fahrenheit and celsius
    if (chosenUnit === Fah) {
        let unit = Fah;
    } else if (chosenUnit === Cel) {
        let unit = Cel;
    }
    (
        <div className="weather-card">
            <h2>{APIdata.temperature}{unit}</h2>
            <p>{APIdata.description}</p>
        </div>
    )
}