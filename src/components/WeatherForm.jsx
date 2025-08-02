import React, { useState } from 'react';
import './WeatherForm.css';

export default function WeatherForm({ onFetchWeather }) {
  const [city, setCity] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setCity(e.target.value);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const cleanedCity = city.trim().replace(/[.,!?]+$/, ''); // Clean text

    if (!cleanedCity) {
      setError('Please enter a city name.');
      return;
    }

    onFetchWeather(cleanedCity);
  };

  const handleVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window)) {
      setError('Speech recognition is not supported in this browser.');
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript
        .trim()
        .replace(/[.,!?]+$/, ''); // ✅ Remove ending punctuation like dot

      setCity(spokenText);
      setError('');
      onFetchWeather(spokenText); // ✅ Send cleaned city
    };

    recognition.onerror = (event) => {
      setError(`Voice input error: ${event.error}`);
    };

    recognition.start();
  };

  return (
    <div className="weather-form">
      <form onSubmit={handleSubmit}>
  <div className="input-voice-wrapper">
    <input
      type="text"
      placeholder="Enter city name"
      value={city}
      onChange={handleInputChange}
    />
    <button type="button" onClick={handleVoiceInput} className="voice-btn">🎤</button>
  </div>

  <button type="submit" className="get-weather-btn">Get Weather</button>
</form>

      {error && <p className="error">{error}</p>}
    </div>
  );
}
