import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'
import Location from './components/Location'
import Secondary from './components/Secondary'
import ChangeDegrees from './components/ChangeDegrees'
import Hour from './components/Hour'
import Card from './components/Card'
import Weather from './components/Weather'
import Degrees from './components/Degrees'

function App() {
  //to work with the weather api
  const [weather, setWeather] = useState({})
  const [celsius, setCelsius] = useState(true)
  const [background, setBackground] = useState()

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

  useEffect(() => {
    const set = (icon) => {
      if (
        icon === '01d' ||
        icon === '03d' ||
        icon === '09d' ||
        icon === '10d' ||
        icon === '13d'
      ) {
        return 'sun.svg'
      } else if (
        icon === '02d' ||
        icon === '04d' ||
        icon === '11d' ||
        icon === '50d'
      ) {
        return 'sun2.svg'
      } else if (
        icon === '01d' ||
        icon === '03n' ||
        icon === '09n' ||
        icon === '10n' ||
        icon === '13n'
      ) {
        return 'night.svg'
      } else if (
        icon === '02n' ||
        icon === '04n' ||
        icon === '11n' ||
        icon === '50n'
      ) {
        return 'night2.svg'
      }
    }

    setBackground(set(weather.weather?.[0].icon))
    console.log(background)
    document.body.style = `background-image: url(./src/assets/${background})`
  }, [weather])

  // console.log(weather.weather?.[0])

  return (
    <div className='app'>
      <Hour />
      <div className='glass'>
        <Card>
          <div className='main'>
            <Location weather={weather} celsius={celsius} />
            <Weather weather={weather} />
            <Degrees weather={weather} celsius={celsius} />
            <ChangeDegrees setCelsius={setCelsius} celsius={celsius} />
          </div>
          <div className='secondary'>
            <Secondary weather={weather} />
          </div>
        </Card>
      </div>
      <div className='moon'></div>
    </div>
  )
}

export default App
