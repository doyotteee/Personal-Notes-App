import React from 'react';

function SearchBar({ keyword, setKeyword }) {
  return (
    <input
      type="text"
      placeholder="Cari berdasarkan judul ..."
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
      style={{ width: '100%', marginBottom: '2rem', padding: '0.5rem' }}
    />
  );
}

export default SearchBar;