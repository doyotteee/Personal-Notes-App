import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getNote } from '../utils/local-data';
import ButtonKembali from '../components/ButtonKembali';

function EditNotePage({ onEditNote }) {
  const { id } = useParams();
  const note = getNote(id);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setBody(note.body);
    }
  }, [note]);

  if (!note) return <p>Catatan tidak ditemukan</p>;

  const onSubmit = (e) => {
    e.preventDefault();
    onEditNote({ id, title, body });
    navigate(`/notes/${id}`);
  };

  return (
    <div>
      <h2>Edit Catatan</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Judul"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />
        <textarea
          className="textarea-catatan"
          placeholder="Isi catatan"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        /><br />
        <button type="submit">Simpan Perubahan</button>
      </form>
      <ButtonKembali />
    </div>
  );
}

EditNotePage.propTypes = {
  onEditNote: PropTypes.func.isRequired,
};

export default EditNotePage;