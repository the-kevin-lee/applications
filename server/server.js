const express = require('express');
const axios = require('axios');
const app = express();

const cors = require('cors');


app.use(cors());







// API routing 
app.get('/api/weather', async (req, res) => {
    const location = req.query.location;
    console.log("Requested location parameter:", location);
    


    if (!location || location.trim() === '') {
        return res.status(400).json({error: 'Location parameter is missing.'})
    }

    const encodedLocation = encodeURIComponent(location);
    const APIkey = "vzkgb5IUigg9TrPsg6Tiu7j98yILxd30";

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




console.log("NODE_ENV is set to:", process.env.NODE_ENV);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});