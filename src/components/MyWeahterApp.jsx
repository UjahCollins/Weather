import React from 'react'
import "./MyWeatherApp.css"
import { useState, useEffect } from 'react'

const MyWeahterApp = () => {
  const [location, setLocation] = useState()
  const [apiResponse, setApiResponse] = useState({})
  const apiKey = "f9f8d5bc211f69c8d3683d8de9038e97"
  const handleLocationChnage = (e)=>{
    setLocation(JSON.parse(e.target.value));
  }
  
  const submit=()=>{
    if (location !== undefined){
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}`)
            .then(res=>res.json())
            .then(json=> setApiResponse(json))
    }
    console.log(submit)
  }
  useEffect(()=> {
    submit()

}, [location])

const today = new Date ();
const updatedDate = today.toDateString();
  return (
    <div className='main'>
      <div className='mainWrapper'>
        <div className='details'>
          <h3>{updatedDate}</h3>
          
          <h1>{
                        apiResponse?.main?.temp ? (
                            <span>
                                {parseFloat((apiResponse?.main?.temp - 273.15).toFixed(12))}
                                &deg;C
                            </span>
                        ) : (
                            "No temp info"
                        )
                    }</h1>
          <p>{apiResponse?.weather ? apiResponse?.weather[0].description : "No weather info"}</p>
        </div>
        <div className='selector'>
                <select onChange={handleLocationChnage}>
                    <option value="">Select State</option>
                    <option value='{"lat": "9.00", "lon":"15.00"}'>Benue</option>
                    <option value='{"lat": "6.58", "lon":"3.33"}'>Lagos</option>
                    <option value='{"lat": "7.00", "lon":"4.75"}'>Rivers</option>
                    <option value='{"lat": "7.50", "lon":"6.50"}'>Enugu</option>
                    <option value='{"lat": "7.38", "lon":"3.90"}'>Oyo</option>
                    <option value='{"lat": "9.00", "lon":"10.00"}'>Abuja</option>
                    <option value='{"lat": "5.05", "lon":"7.93"}'>Akwa-Ibom</option>
                    <option value='{"lat": "5.48", "lon":"7.02"}'>Imo</option>
                    <option value='{"lat": "8.50", "lon":"4.55"}'>Kwara</option>
                    
                </select>
        </div>
      </div>
    </div>
  )
}

export default MyWeahterApp
