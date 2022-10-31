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
  const [background, setBackground] = useState('night.svg')

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
    switch (weather.weather?.[0].icon) {
      case ('01d', '02d', '03d', '04d', '09d', '010d', '011d', '013d', '050d'):
        setBackground('sun2.svg')
        break
      default:
        setBackground('sun.svg')
        break
    }

    document.body.style = `background-image: url(./assets/${background})`
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
