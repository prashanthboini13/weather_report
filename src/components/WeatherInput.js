import React, { useState } from 'react';

const WeatherInput = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      onSearch(city);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center mb-6">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter a city"
        className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
      />
      <button type="submit" className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Get Weather
      </button>
    </form>
  );
};

export default WeatherInput;