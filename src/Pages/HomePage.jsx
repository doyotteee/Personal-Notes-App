import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import NoteList from '../components/NoteList';
import FloatingButtons from '../components/FloatingButtons';

function HomePage({ notes, onDelete, onArchive, isArchive }) {
  const [keyword, setKeyword] = useState('');
  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div>
      <h2>Catatanku</h2>
      <SearchBar keyword={keyword} setKeyword={setKeyword} />
      <NoteList notes={filteredNotes} onDelete={onDelete} onArchive={onArchive} isArchive={isArchive} />
      <FloatingButtons />
    </div>
  );
}

export default HomePage;