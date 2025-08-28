// src/pages/Page1.jsx
import { useState } from 'react';
import ImageModal from '../components/ImageModal';

const Page2 = () => {
  const [modalImg, setModalImg] = useState(null);

  return (
    <div className="page">
      <h2>Página 2</h2>
      <p>Texto descriptivo de la página 2.</p>
      <img
        src="https://i.pravatar.cc/300"
        alt="ejemplo"
        onClick={() => setModalImg("https://i.pravatar.cc/500")}
        style={{ cursor: 'pointer', maxWidth: '100%' }}
      />
      <ImageModal src={modalImg} onClose={() => setModalImg(null)} />
    </div>
  );
};

export default Page2;