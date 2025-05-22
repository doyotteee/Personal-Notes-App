import React from 'react';
import PropTypes from 'prop-types';

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

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  setKeyword: PropTypes.func.isRequired,
};

export default SearchBar;