import React from 'react';

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) {
    return <p className="text-center mt-4">No weather data available.</p>;
  }

  const { temperature, wind_speed, weather_description } = weatherData;

  return (
    <div className="mt-8 p-6 bg-white shadow-md rounded-md max-w-md mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">{weatherData.city}</h2>
      <p className="text-lg">Temperature: {temperature}°C</p>
      <p className="text-lg">Wind Speed: {wind_speed} m/s</p>
      <p className="text-lg">Condition: {weather_description}</p>
    </div>
  );
};

export default WeatherDisplay;