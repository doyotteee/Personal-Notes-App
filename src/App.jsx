import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getActiveNotes, getArchivedNotes, addNote, deleteNote, archiveNote, unarchiveNote } from './utils/local-data';
import HomePage from './Pages/HomePage';
import NewNotePage from './Pages/NewNotePage';
import NoteDetailPage from './Pages/NoteDetailPage';
import EditNotePage from './Pages/EditNotePage';
import Header from './components/Header';
import ArsipPage from './Pages/ArsipPage';
import './styles/style.css';

function App() {
  const [notes, setNotes] = useState(getActiveNotes());
  const [archivedNotes, setArchivedNotes] = useState(getArchivedNotes());

  // Tambah catatan
  const onAddNote = ({ title, body }) => {
    addNote({ title, body });
    setNotes(getActiveNotes());
  };

  // Hapus catatan
  const onDeleteNote = (id) => {
    deleteNote(id);
    setNotes(getActiveNotes());
    setArchivedNotes(getArchivedNotes());
  };

  // Arsipkan catatan
  const onArchiveNote = (id) => {
    archiveNote(id);
    setNotes(getActiveNotes());
    setArchivedNotes(getArchivedNotes());
  };

  // Unarsip catatan
  const onUnarchiveNote = (id) => {
    unarchiveNote(id);
    setNotes(getActiveNotes());
    setArchivedNotes(getArchivedNotes());
  };

  // Edit catatan
  const onEditNote = ({ id, title, body }) => {
    // editNote sudah ada di local-data.js
    import('./utils/local-data').then(({ editNote }) => {
      editNote({ id, title, body });
      setNotes(getActiveNotes());
      setArchivedNotes(getArchivedNotes());
    });
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              notes={notes}
              onDelete={onDeleteNote}
              onArchive={onArchiveNote}
              isArchive={false}
            />
          }
        />
        <Route
          path="/arsip"
          element={
            <ArsipPage
              notes={archivedNotes}
              onDelete={onDeleteNote}
              onArchive={onUnarchiveNote}
            />
          }
        />
        <Route path="/notes/new" element={<NewNotePage onAddNote={onAddNote} />} />
        <Route path="/notes/:id" element={<NoteDetailPage onDelete={onDeleteNote} onArchive={onArchiveNote} />} />
        <Route path="/notes/:id/edit" element={<EditNotePage onEditNote={onEditNote} />} />
      </Routes>
    </Router>
  );
}

export default App;

