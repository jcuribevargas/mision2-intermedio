// src/components/Carousel.jsx
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = ({ images, onImageClick }) => (
  <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay centerMode centerSlidePercentage={33.33}>
    {images.map((src, index) => (
      <div key={index} onClick={() => onImageClick(src)}>
        <img src={src} alt={`img-${index}`} />
      </div>
    ))}
  </Carousel>
);

export default CarouselComponent;
