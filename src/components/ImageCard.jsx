import React from 'react';

function ImageCard({ imageUrl, title, description }) {
  return (
    <div className="image-card">
      <img src={imageUrl} alt={title} className="image" />
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
    </div>
  );
}

export default ImageCard;