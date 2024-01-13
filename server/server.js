require('dotenv').config({ path: '../.env' });


const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());






//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv Realtime Weather Data Routing
app.get('/api/weather', async (req, res) => {
    const location = req.query.location;
    console.log("Requested location parameter:", location);
    


    if (!location || location.trim() === '') {
        return res.status(400).json({error: 'Location parameter is missing.'})
    }

    const encodedLocation = encodeURIComponent(location);
    const APIkey = process.env.API_KEY;

    const url = `https://api.tomorrow.io/v4/weather/realtime?location=${(encodedLocation)}&apikey=${APIkey}`;

    console.log("Encoded location:", encodedLocation);
    console.log("Requesting ext API with URL:", url);


    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',

        }
    };

    console.log("Requesting external API with URL:", url);
    try {
        const response = await axios.get(url, options);
        console.log("Data received:", response.data);
        res.json(response.data);
    } catch (error) {
        console.error("Error object:", error);
        console.error("Error fetching data:", error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Error fetching weather data' });
    }
});


// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv Forecast Weather Data Routing
app.get('/api/forecast', async (req,res) => {
    // cache controlling
    res.set('Cache-Control', 'no-store');

    const location = req.query.location;

    if (!location || location.trim()==='') {
        return res.status(400).json({error: 'Location parameter for forecast is missing.'});
    }

    const encodedLocation = encodeURIComponent(location);
    const APIkey = process.env.API_KEY;
    const url = `https://api.tomorrow.io/v4/weather/forecast?location=${encodedLocation}&fields=temperature&timesteps=1h&units=metric&apikey=${APIkey}`;

    try {
        const response = await axios.get(url, {headers: {accept: 'application/json'}});
        console.log('Forecast data received:', response.data); // This logs the response data
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching forecast data:", error);
        res.status(500).json({error: 'Error fetching forecast data'});
    }
});




console.log("NODE_ENV is set to:", process.env.NODE_ENV);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



