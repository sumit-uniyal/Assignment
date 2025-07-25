import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ImageCard from '../components/ImageCard';

function Home() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get('https://picsum.photos/v2/list?limit=10')
      .then((res) => setImages(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="home-container">
      <h2>Image Gallery</h2>
      {images.map((img) => (
        <ImageCard
          key={img.id}
          imageUrl={img.download_url}
          title={img.author}
          description={`Photo by ${img.author}`}
        />
      ))}
    </div>
  );
}

export default Home;
