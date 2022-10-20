const axios = require('axios');

require('dotenv').config();
const port=+process.env.KEY_PORT_NUMBER;
const express = require('express');
const app = express();


app.get('/status', (req, res) => {
   return res.status(200).send('ok');
    })

    
app.get('/weather/:city', async (req, res) => {
    try{const weather = await axios.get(`http://api.weatherapi.com/v1/current.json?key=3b6c1ada6d9a4cf5b67141034221210&q=${req.params.city}&aqi=no`);
    const weatherParis = weather.data.current.temp_c
    return res.status(200).send({temp_in_celsius : weatherParis})}
    catch {return res.status(404).send({message : 'ville introuvable'})};
})

function getRandomIndex(max) {
    return Math.floor(Math.random() * max-1);
}

app.get('/quoteday', async (req, res) => {
    const quoteday = await axios.get('https://zenquotes.io/api/quotes');
            return res.status(200).send(quoteday.data[getRandomIndex(quoteday.data.length)].q);
     })


app.listen(port, () => {
    console.log(port)
})


