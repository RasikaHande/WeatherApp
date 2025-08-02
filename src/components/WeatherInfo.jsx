import React from 'react';
import './WeatherInfo.css';

const WeatherInfo = ({ data, error }) => {
  if (error) {
    return <p className="error-text">❌ Failed to fetch weather. Please try again.</p>;
  }

  if (!data) {
    return null;
  }

  const getTimeForCity = (timezone) => {
    const nowUTC = new Date().getTime() + new Date().getTimezoneOffset() * 60000;
    const localtime = new Date(nowUTC + timezone * 1000);
    return localtime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const getWeatherEmoji = (description) => {
    description = description.toLowerCase();
    if (description.includes("cloud")) return "☁️";
    if (description.includes("rain")) return "🌧️";
    if (description.includes("clear")) return "🌞";
    if (description.includes("storm") || description.includes("thunder")) return "⛈️";
    if (description.includes("snow")) return "❄️";
    if (description.includes("mist") || description.includes("fog")) return "🌫️";
    return "🌡️";
  };

  return (
    <div className="weather-info">
      <h2>Weather in {data.name}</h2>
      <p>Temperature: {Math.round(data.main.temp - 273.15)}℃</p>
      <p>
        Weather: {data.weather[0].description} {getWeatherEmoji(data.weather[0].description)}
      </p>
      <p>Local Time: {getTimeForCity(data.timezone)}</p>
    </div>
  );
};

export default WeatherInfo;
