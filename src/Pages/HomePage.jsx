import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import NoteList from '../components/NoteList';
import FloatingButtons from '../components/FloatingButtons';

function HomePage({ notes, onDelete, onArchive, isArchive }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  const handleSearch = (value) => {
    setSearchParams({ keyword: value });
  };

  return (
    <div>
      <h2>Catatanku</h2>
      <SearchBar keyword={keyword} setKeyword={handleSearch} />
      {filteredNotes.length === 0 ? (
        <div className="notes-list-empty">
          <p>Tidak ada catatan</p>
        </div>
      ) : (
        <NoteList
          notes={filteredNotes}
          onDelete={onDelete}
          onArchive={onArchive}
          isArchive={isArchive}
        />
      )}
      <FloatingButtons />
    </div>
  );
}

HomePage.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  isArchive: PropTypes.bool.isRequired,
};

export default HomePage;