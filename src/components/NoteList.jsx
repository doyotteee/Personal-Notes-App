import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete, onArchive, isArchive }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
      {notes.map(note => (
        <NoteItem
          key={note.id}
          {...note}
          onDelete={onDelete}
          onArchive={onArchive}
          isArchive={isArchive}
        />
      ))}
    </div>
  );
}

export default NoteList;