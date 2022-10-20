const axios = require('axios');

require('dotenv').config();
const port=+process.env.KEY_PORT_NUMBER;
const express = require('express');
const app = express();


app.get('/status', (req, res) => {
   return res.status(200).send('ok');
    })

app.get('/weather', async (req, res) => {
    const weather = await axios.get("http://api.weatherapi.com/v1/current.json?key=3b6c1ada6d9a4cf5b67141034221210&q=Paris&aqi=no");
    return res.status(200).send(`temp_in_celsius : ${weather.data.current.temp_c}`)
})

app.listen(port, () => {
    console.log(typeof port)
})


