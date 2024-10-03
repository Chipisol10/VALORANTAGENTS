import React from 'react';

const SearchBar = ({ searchText, setSearchText }) => {
  return (
    <input
      type="text"
      placeholder="Buscar agente..."
      className="w-full p-2 mb-4 border rounded bg-blue-200 text-red-700 placeholder-red-400 focus:outline-none focus:ring-2 focus:ring-red-300"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />
  );
};

export default SearchBar;
