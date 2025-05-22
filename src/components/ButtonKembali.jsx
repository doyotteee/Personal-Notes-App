import React from 'react';
import { useNavigate } from 'react-router-dom';

function ButtonKembali() {
  const navigate = useNavigate();
  return (
    <button
      className="button-kembali"
      onClick={() => navigate('/')}
      title="Kembali ke Beranda"
    >
      &#8592;
    </button>
  );
}

export default ButtonKembali;
