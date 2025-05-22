import React from 'react';
import { Link } from 'react-router-dom';

function NoteItem({ id, title, createdAt, body, onDelete, onArchive, isArchive }) {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('id-ID', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
  };

  return (
    <div className="note-item">
      <Link
        to={`/notes/${id}`}
        style={{ textDecoration: 'none', color: 'inherit', flex: 1 }}
      >
        <div>
          <h3 className="note-item__title">{title}</h3>
          <p className="note-item__date">{formatDate(createdAt)}</p>
          <p className="note-item__body">{body.length > 120 ? body.slice(0, 120) + '...' : body}</p>
        </div>
      </Link>
      <div className="note-item__actions" onClick={e => e.stopPropagation()}>
        <button
          className="note-btn note-btn--delete"
          onClick={() => onDelete(id)}
        >Hapus</button>
        <button
          className={`note-btn ${isArchive ? 'note-btn--unarchive' : 'note-btn--archive'}`}
          onClick={() => onArchive(id)}
        >{isArchive ? 'Unarsipkan' : 'Arsipkan'}</button>
        <Link to={`/notes/${id}/edit`} style={{ textDecoration: 'none' }}>
          <button
            className="note-btn note-btn--edit"
            onClick={e => e.stopPropagation()}
          >Edit</button>
        </Link>
      </div>
    </div>
  );
}

export default NoteItem;


