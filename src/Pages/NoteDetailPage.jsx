import React from 'react';
import { useParams, useNavigate, Link, useLocation } from 'react-router-dom';
import { getNote } from '../utils/local-data';
import ButtonKembali from '../components/ButtonKembali';
import PropTypes from 'prop-types';

function NoteDetailPage({ onDelete, onArchive }) {
  const { id } = useParams();
  const note = getNote(id);
  const navigate = useNavigate();
  const location = useLocation();

  if (!note) return <p>Catatan tidak ditemukan</p>;

  const handleArchive = () => {
    onArchive(id);
    if (note.archived || location.pathname.startsWith('/arsip')) {
      navigate('/arsip');
    } else {
      navigate('/');
    }
  };

  return (
    <div style={{
      background: '#232336',
      borderRadius: '16px',
      padding: '2rem',
      maxWidth: '600px',
      margin: '2rem auto',
      boxShadow: '0 2px 16px rgba(0,0,0,0.15)'
    }}>
      <h2 style={{ color: '#90e0ef' }}>{note.title}</h2>
      <p style={{ color: '#adb5bd' }}>{note.body}</p>
      <p style={{ color: '#ccc', fontSize: '0.95em' }}>
        {new Date(note.createdAt).toLocaleDateString('id-ID', {
          weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        })}
      </p>
      <div style={{
        display: 'flex',
        gap: '12px',
        marginTop: '24px',
        justifyContent: 'flex-end'
      }}>
        <button
          onClick={() => { onDelete(id); navigate('/'); }}
          style={{
            background: '#e63946',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            padding: '8px 18px',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >Hapus</button>
        <button
          onClick={handleArchive}
          style={{
            background: note.archived ? '#43aa8b' : '#00b4d8',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            padding: '8px 18px',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >{note.archived ? 'Kembalikan' : 'Arsipkan'}</button>
        <Link to={`/notes/${id}/edit`} style={{ textDecoration: 'none' }}>
          <button
            style={{
              background: '#ffd166',
              color: '#232336',
              border: 'none',
              borderRadius: '6px',
              padding: '8px 18px',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >Edit</button>
        </Link>
        <ButtonKembali />
      </div>
    </div>
  );
}

NoteDetailPage.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default NoteDetailPage;