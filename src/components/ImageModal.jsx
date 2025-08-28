import './ImageModal.css';

const ImageModal = ({ src, onClose }) => {
  if (!src) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <img src={src} style={{ width: '500px', height: '500px' }} alt="ampliada" />
      </div>
    </div>
  );
};

export default ImageModal;