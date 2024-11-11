import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city) {
      onSearch(city);
      setCity(''); 
    }
  };

  return (
    <div className="flex justify-center mt-6">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="border rounded-l-md p-2 w-64 focus:outline-none"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white rounded-r-md p-2 hover:bg-blue-600"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;