const express = require('express');
const axios = require('axios');
const app = express();

const cors = require('cors');


app.use(cors());

// CORS handling
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000/'); // Replace with your React app's origin
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// });






// API routing 
app.get('/api/weather', async (req, res) => {
    console.log("Received request for /api/weather with city:", req.query.location);
    const city = req.query.location;
    const APIkey = "vzkgb5IUigg9TrPsg6Tiu7j98yILxd30";

    const options = {
        method: 'GET',
        url: `https://api.tomorrow.io/v4/weather/realtime?location=${encodeURIComponent(city)}&apikey=${APIkey}`,
        headers: {
            accept: 'application/json',

        }
    };

    console.log("Requesting external API with URL:", options.url);
    try {
        const response = await axios.request(options);
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