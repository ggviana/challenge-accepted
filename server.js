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

// If a path was not found, throw 404
server.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

server.use((err, req, res, next) => {
  res.status(err.status || 500).send({
      message: err.message,
      error: err,
      title: 'error'
  })
})

server.listen(PORT, () => {
    console.log(`Listening at localhost:${PORT}`)
})