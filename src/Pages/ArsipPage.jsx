import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import NoteList from '../components/NoteList';
import ButtonKembali from '../components/ButtonKembali';

function ArsipPage({ notes, onDelete, onArchive }) {
  const [keyword, setKeyword] = useState('');

  const filteredNotes = notes
    .filter(note => note.archived)
    .filter(note => note.title.toLowerCase().includes(keyword.toLowerCase()));

  return (
    <div>
      <h2>Arsipku</h2>
      <SearchBar keyword={keyword} setKeyword={setKeyword} />
      <NoteList
        notes={filteredNotes}
        onDelete={onDelete}
        onArchive={onArchive}
        isArchive={true}
      />
      <ButtonKembali />
    </div>
  );
}

export default ArsipPage;
