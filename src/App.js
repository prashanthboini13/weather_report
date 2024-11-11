import React, { useState } from 'react';
import WeatherInput from './components/WeatherInput';
import WeatherCard from './components/WeatherCard';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (city) => {
    try{
      const response = await fetch(https://geocoding-api.open-meteo.com/v1/search?name=${city});
      const locationData = await response.json();

      if (locationData.results && locationData.results.length > 0) {
        const { latitude, longitude } = locationData.results[0];
        
        const weatherResponse = await fetch(
          https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true
        );
        const data = await weatherResponse.json();
        setWeatherData(data.current_weather);
      } else {
        alert('City not found. Please try another city.');
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      alert('Failed to fetch weather data. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-blue-50">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Weather Now</h1>
        <WeatherInput onSearch={fetchWeather} />
        {weatherData && <WeatherCard weather={weatherData} />}
      </div>
    </div>
  );
};

export default App;