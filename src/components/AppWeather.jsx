import React, { useState } from 'react'
import WeatherForm from './WeatherForm';
import WeatherInfo from './WeatherInfo';
import './App.css'

export default function AppWeather () {
    const[weatherData,setWeatherData]=useState(null);
    const[error,setError]=useState(null);

    const fetchWeather=async(city)=>{
        const apikey="901e8216578a6fd6612f083381295d44";
        const apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
        
        try 
        {
           const response=await fetch(apiurl);
           if(!response.ok)
            {
                throw new Error("city not found")
            }    
            const data=await response.json()
            console.log('weather data',data);
            
            setWeatherData(data);
            setError(null)
        } 
        catch (err) 
        {
          setError(err.message);
          setWeatherData(null)
        }
    }
  return (
    <>
       <WeatherForm  onFetchWeather={fetchWeather}/>
       <WeatherInfo data={weatherData} error={error}/>
    </>
  )
}
