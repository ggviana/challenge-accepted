const WeatherService = require("./weather-service")
const express = require("express")
const server = express()

const PORT = process.env.PORT

server.get('/api/locales', (req, res) => {
    res.send(WeatherService.getLocales())
})

server.get('/api/weather/:localeId', (req, res) => {
    const weather = WeatherService.getWeatherByLocaleId(req.params.localeId)
    
    if (weather) {
        res.send(weather)
    } else {
        res.status(404).send('Not found')
    }
})

server.all('*', (req, res) => {
    res.status(404).send('Not found')
})

server.listen(PORT, () => {
    console.log(`Listening at localhost:${PORT}`)
})