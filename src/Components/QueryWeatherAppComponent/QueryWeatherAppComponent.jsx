import axios from 'axios'
import React, { useMemo, useState } from 'react'
import { useQuery } from 'react-query'


const QueryWeatherAppComponents = () => {
  const[cityName,setCityname]=useState('')
  const[weatherData,setWeatherData]=useState({})
  const[latitude,setLatitude]=useState(0)
  const[longitude,setLongitude]=useState(0)

  const API_KEY='e2e85ac9741847679ca115257231309'
  const getCurrentWeather = async({queryKey})=>
  {
    navigator.geolocation.getCurrentPosition((position)=>{
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
    })
    const response=await axios.get(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${queryKey[1]},${queryKey[2]}`)
    console.log(response.data)
    return response.data.current

  }
  const{data}=useQuery(["weather",latitude,longitude],getCurrentWeather)
  useMemo(()=>{
    setWeatherData(data)
  },[data])

  const getCityWeather = async()=>
  {
    const response =await axios.get(`http://api.weatherapi.com/v1/current.json?key=e2e85ac9741847679ca115257231309&q=${API_KEY}&q=${cityName}`)
    console.log(response.data)
    setWeatherData(response.data.current)
  }
  const handleCityName=(Event) =>
  {
    setCityname(Event.target.value)
  }
    
  return (
    <React.Fragment>
      <input 
        type = 'text' 
        placeholder='search'
        value = {cityName}
        onChange={handleCityName}

        />
        <button onClick={getCityWeather}>Find</button>
        <h1>{weatherData && weatherData.temp_c} &deg;</h1>

    </React.Fragment>
  )
}

export default QueryWeatherAppComponents