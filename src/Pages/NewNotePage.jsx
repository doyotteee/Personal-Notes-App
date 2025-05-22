import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonKembali from '../components/ButtonKembali';

function NewNotePage({ onAddNote }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    onAddNote({ title, body });
    navigate('/');
  };

  return (
    <div>
      <h2>Buat Catatan Baru</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Judul"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        /><br />
        <textarea
          className="textarea-catatan"
          placeholder="Isi catatan"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        /><br />
        <button type="submit">Simpan</button>
      </form>
      <ButtonKembali />
    </div>
  );
}

export default NewNotePage;