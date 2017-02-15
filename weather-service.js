const locales = require("./base/locales")
const weathers = require("./base/weather")

module.exports = {
    /**
        Returns all locales saved in the db
    */
    getLocales() {
        return locales
    },
    
    /**
        Returns a weather given the locale
    */
    getWeatherByLocaleId(localeId) {
        for (var weather of weather) {
            if (weather.locale.id === localeId) {
                return weather
            }
        }
    }
}