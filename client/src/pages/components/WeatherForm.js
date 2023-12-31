import React, {useState} from 'react';

const WeatherForm = ({onCitySubmit}) => {
    const [inputCity, setInputCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputCity.trim()) {
            onCitySubmit(inputCity); // lifting state up when form is submitted
            setInputCity("") // resetting the field
        }
    }



    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={inputCity}
                onChange={(e) => setInputCity(e.target.value)}
                placeholder='Enter City'
            />
            <button type='submit'>Get Weather Info</button>
        </form>
    )
}

export default WeatherForm;