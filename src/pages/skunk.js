import React from 'react';
import './App.css';
import sk2 from './sk2.png'
import flower from './flower.png'

const images = [
 { src: sk2, alt: 'Image 1' },
  { src: flower, alt: 'Image 2' },
  { src: sk2, alt: 'Image 1' },
  { src: flower, alt: 'Image 2' },
  { src: sk2, alt: 'Image 1' },
  { src: flower, alt: 'Image 2' },
];

function Gallery() {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <img
          key={index}
          className="gallery__item"
          src={image.src}
          alt={image.alt}
        />
      ))}
    </div>
  );
}

export default Gallery;