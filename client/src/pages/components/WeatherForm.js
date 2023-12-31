import { useState} from "react";
import './WeatherForm.css';

const baseURL = 'http://localhost:5000';

const WeatherForm = ({setLocation}) => {
    const [city,setCity] = useState("");
    // update the input as the user types
    const handleNewInput = (e) => {
        setCity(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${baseURL}/api/weather?location=${encodeURIComponent(city)}`, {
                headers: {
                    'Cache-Control': 'no-cache'
                }
            })
            const data = await response.json();
            console.log("Weather data:", data);
        } catch (error) {
            console.log("Error fetching data:", error)
        } 
    }

    
    return (
        <form className="Weather-Form" onSubmit={handleSubmit}>
            <input
                className="Weather-Form-Search-Bar"
                type="text"
                value={city}
                onChange={handleNewInput}
                placeholder="Enter City"
            />
            <button className="Weather-Form-Button"type="submit">Get Weather Info</button>

        </form>
    )


}

export default WeatherForm;