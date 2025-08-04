# 🌦️ Weather App

A modern weather forecasting web app built with **React.js** and **Vite** that fetches real-time weather data using the **OpenWeatherMap API**. The app supports both **text** and **voice input** to search for cities and displays weather details such as temperature, weather conditions with emojis, and the **local time** of the searched city.

---

## 🚀 Features

- 🔍 Search weather by **city name**
- 🎤 **Voice recognition** input using Web Speech API
- 🌡️ Displays:
  - City Name
  - Temperature in Celsius
  - Weather description with emoji
  - Local time of the searched city
- ❌ Handles errors gracefully (e.g., city not found, voice not supported)
- ⚡ Built using **React + Vite** for fast performance
- 💅 Styled with custom CSS

---

## 📁 Project Structure

weather-app/
├── public/
│ └── vite.svg
├── src/
│ ├── assets/
│ ├── components/
│ │ ├── AppWeather.jsx
│ │ ├── WeatherForm.jsx
│ │ ├── WeatherForm.css
│ │ ├── WeatherInfo.jsx
│ │ ├── WeatherInfo.css
│ │ └── App.css
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── .gitignore
├── index.html
├── eslint.config.js
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md

## 🛠️ Installation & Setup

1. **Clone the repository:**

```bash
git clone https://github.com/RasikaHande/weather-app.git
cd weather-app

Install dependencies:
npm install

Start the development server:
npm run dev

🔑 API Key Setup
This app uses the OpenWeatherMap API.

📦 Built With
React.js
Vite
OpenWeatherMap API
Web Speech API

