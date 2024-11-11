import React from 'react';

const WeatherCard = ({ weather }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <h2 className="text-2xl font-semibold mb-2">Current Weather</h2>
      <p className="text-gray-600 mb-4">Temperature: {weather.temperature}°C</p>
      <p className="text-gray-600 mb-4">Wind Speed: {weather.windspeed} km/h</p>
      <p className="text-gray-600">Wind Direction: {weather.winddirection}°</p>
    </div>
  );
};

export default WeatherCard;