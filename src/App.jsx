import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  //to get the hour
  const date = new Date()
  const hour = date.getHours().toLocaleString()
  const minutes = date.getMinutes().toLocaleString()
  // console.log(`${hour}:${minutes}`)

  //to work with the weather api
  const [weather, setWeather] = useState({})

  const [celsius, setCelsius] = useState(true)

  // const toCelsius = () => {
  //   const celsius =
  // }

  useEffect(() => {
    const success = (pos) => {
      const coords = pos.coords
      const lat = coords.latitude
      const long = coords.longitude
      // console.log(`coords: ${coords}, lat: ${lat}, long: ${long}`)
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=f61d6c238fa7d8ed6d4ec0acf0006cc4`
        )
        .then((res) => setWeather(res.data))
    }

    navigator.geolocation.getCurrentPosition(success)
  }, [])

  console.log(weather)

  return (
    <>
      <h1>
        {weather.name}, {weather.sys?.country}
      </h1>
      <h2>
        {celsius
          ? `${Math.floor(weather.main?.temp - 273.15)} °C`
          : `${Math.floor(((weather.main?.temp - 273.15) * 9) / 5 + 32)} °F`}
        {/* {weather.main?.temp} °K {weather.weather?.[0].description} */}
      </h2>
      <h3>{`${hour}:${minutes} ${hour > 12 ? 'PM' : 'AM'}`}</h3>
      <p>
        Feels like: {weather.main?.feels_like}° Low: {weather.main?.temp_min}°
        High: {weather.main?.temp_max}
      </p>
      <p>Wind: {weather.wind?.speed} km/h</p>
      <p>Clouds: {weather.clouds?.all}%</p>
      <p>Humidity: {weather.main?.humidity}%</p>
      <button onClick={() => setCelsius(!celsius)}>
        Change to {celsius ? '°F' : '°C'}
      </button>
    </>
  )
}

export default App
