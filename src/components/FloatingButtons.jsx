import React from 'react';
import { useNavigate } from 'react-router-dom';

function FloatingButtons() {
  const navigate = useNavigate();
  return (
    <div style={{
      position: 'fixed',
      right: '2rem',
      bottom: '2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      zIndex: 100
    }}>
      <button
        onClick={() => navigate('/notes/new')}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          fontSize: '2rem',
          background: '#00b4d8',
          color: '#fff',
          border: 'none',
          boxShadow: '0 2px 12px rgba(0,180,216,0.25)',
          cursor: 'pointer'
        }}
        title="Tambah Catatan"
      >+</button>
      <button
        onClick={() => navigate('/arsip')}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          fontSize: '1rem',
          background: '#ffd166',
          color: '#232336',
          border: 'none',
          boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
          cursor: 'pointer',
          textAlign: 'left',
          padding: '0 8px',
          display: 'flex',
          alignItems: 'center',
          lineHeight: '2px',
        }}
        title="Lihat Arsip"
      >Arsip</button>
    </div>
  );
}

export default FloatingButtons;