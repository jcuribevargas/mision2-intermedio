// src/pages/Page1.jsx
import { useState } from 'react';
import ImageModal from '../components/ImageModal';

const Page4 = () => {
  const [modalImg, setModalImg] = useState(null);

  return (
    <div className="page">
      <h2>Página 4</h2>
      <p>Texto descriptivo de la página 4.</p>
      <img
        src="https://via.placeholder.com/300"
        alt="ejemplo"
        onClick={() => setModalImg('https://via.placeholder.com/600')}
        style={{ cursor: 'pointer', maxWidth: '100%' }}
      />
      <ImageModal src={modalImg} onClose={() => setModalImg(null)} />
    </div>
  );
};

export default Page4;