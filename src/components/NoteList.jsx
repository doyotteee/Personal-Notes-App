import React from 'react';
import PropTypes from 'prop-types';
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

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  isArchive: PropTypes.bool.isRequired,
};

export default NoteList;