import axios from 'axios'

export const getWeather = async (city) => {

  // STEP 1: Get coordinates
  const geoResponse = await axios.get(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
  )

  const location = geoResponse.data.results[0]

  const latitude = location.latitude
  const longitude = location.longitude

  // STEP 2: Get weather data
  const weatherResponse = await axios.get(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,is_day,wind_speed_10m`
  )

  const current = weatherResponse.data.current

  return {
    city: location.name,
    country: location.country,

    temperature: current.temperature_2m,

    humidity: current.relative_humidity_2m,

    feelsLike: current.apparent_temperature,

    precipitation: current.precipitation,

    windspeed: current.wind_speed_10m,

    weatherCode: current.weather_code,

    isDay: current.is_day
  }
}