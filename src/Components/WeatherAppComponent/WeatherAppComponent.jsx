import {useState} from 'react'
import axios from 'axios'

const WeatherAppComponent = () => {
  const apiKey = "aef00290460e4bbf9ca192446231209"
  const [inputCity, setInputCity] = useState("")
  const [data, setData] = useState({})


  const getWeatherDetails = (cityName) => {
    if (!cityName) return
    const apiURL = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}`
    axios.get(apiURL).then((res) => {
      console.log("response", res.data)
      console.log(inputCity) 
      setData(res.data)
    }).catch((err) => {
      console.log("err", err)
    })
  }

  const handleChangeInput = (e) => {
    console.log("value", e.target.value)
    setInputCity(e.target.value)
  }

  const handleSearch = () => {
    getWeatherDetails(inputCity)
    console.log(inputCity)
  }
  return (
   
    <div className="container">
     <div className="weather"> 

        <h1>Weather App</h1>
        <div className="city">
          <input type="text" className="control"
            value={inputCity} placeholder='Enter the City Name'
            onChange={handleChangeInput} />
          <button className="btn" type="button"
            onClick={handleSearch}
          >Get Weather</button>
        </div>
      </div>
     
      
      {Object.keys(data).length > 0 &&
        <div className="Box">
        <div className="weatherBox">
           <h1 className="Temperature">{data.current.temp_c}°C</h1>
          </div>
        </div>
      }

    </div>
  )
}

export default WeatherAppComponent