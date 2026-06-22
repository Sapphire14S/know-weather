import { useState } from 'react'
import SearchBar from '../components/SearchBar'
import WeatherCard from '../components/WeatherCard'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'

import { getWeather } from '../services/weatherApi'

function Home() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSearch = async (city) => {
    try {
      setLoading(true)
      setError('')

      const data = await getWeather(city)

      setWeather(data)
    } catch {
      setError('City not found')
      setWeather(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">🌦️ KnowWeather</h1>

      <SearchBar onSearch={handleSearch} />

      {loading && <Loader />}

      {error && <ErrorMessage message={error} />}

      {weather && <WeatherCard weather={weather} />}
    </div>
  )
}

export default Home