// src/pages/Page5.jsx
import { useState } from 'react';
import CarouselComponent from '../components/Carousel';
import ImageModal from '../components/ImageModal';

const images = [
  'https://i.pravatar.cc/150?img=3',
  'https://i.pravatar.cc/150?img=4',
  'https://i.pravatar.cc/150?img=5',
  'https://i.pravatar.cc/150?img=6',
  'https://i.pravatar.cc/150?img=7',
  'https://i.pravatar.cc/150?img=8',
];

const Page5 = () => {
  const [modalImg, setModalImg] = useState(null);

  return (
    <div className="page">
      <h2>Página 5 - Carrusel</h2>
      <CarouselComponent images={images} onImageClick={setModalImg} />
      <ImageModal src={modalImg} onClose={() => setModalImg(null)} />
    </div>
  );
};

export default Page5;