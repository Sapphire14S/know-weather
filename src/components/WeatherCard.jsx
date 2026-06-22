function WeatherCard({ weather }) {

  const weatherDescriptions = {
    0: "Clear Sky ☀️",
    1: "Mainly Clear 🌤️",
    2: "Partly Cloudy ⛅",
    3: "Overcast ☁️",
    45: "Fog 🌫️",
    48: "Depositing Rime Fog 🌫️",
    51: "Light Drizzle 🌦️",
    61: "Rain 🌧️",
    71: "Snow ❄️",
    95: "Thunderstorm ⛈️"
  }

  return (
    <div
      className="card mx-auto mt-4 p-4 shadow"
      style={{
        width: '24rem',
        borderRadius: '10px'
      }}
    >

      <h2 className="mb-3">
        {weather.city}, {weather.country}
      </h2>

      <h1 className="display-3">
        {weather.temperature}°C
      </h1>

      <h4 className="mb-4">
        {weatherDescriptions[weather.weatherCode] || "Weather Unknown"}
      </h4>

      <hr />

      <div className="text-start mt-4">

        <p>🌡️ Feels Like: {weather.feelsLike}°C</p>

        <p>💧 Humidity: {weather.humidity}%</p>

        <p>🌧️ Rain: {weather.precipitation} mm</p>

        <p>🌬️ Wind Speed: {weather.windspeed} km/h</p>

        <p>
          {weather.isDay ? '☀️ Day Time' : '🌙 Night Time'}
        </p>

      </div>

    </div>
  )
}

export default WeatherCard