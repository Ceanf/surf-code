
import React from 'react';
import foto1 from '../assets/myphotos/surf1.JPG';
import foto2 from '../assets/myphotos/surf2.JPG';
import foto3 from '../assets/myphotos/surf3.JPG';
import foto4 from '../assets/myphotos/surf4.JPG';
import foto5 from '../assets/myphotos/surf5.png';
import foto6 from '../assets/myphotos/surf6.png';


const MyAlbum = () => {
  
  const photos = [
    { id: 1, url: foto1, caption: 'Mi primera ola' },
    { id: 2, url: foto2, caption: 'segunda ola' },
    { id: 3, url: foto3, caption: 'tercera ola' },
    { id: 4, url: foto4, caption: 'cuarta ola' },
    { id: 5, url: foto5, caption: 'descando' },
    { id: 6, url: foto6, caption: 'atardecer' },
  ];

  return (
    <div style={{ padding: '100px 20px 50px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', color: '#001d3d', marginBottom: '10px' }}>📸 Mi Bitácora</h1>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '50px' }}>
        Momentos capturados entre la sal y el sol.
      </p>

      <div style={styles.grid}>
        {photos.map((photo) => (
          <div key={photo.id} style={styles.photoContainer}>
            <img src={photo.url} alt={photo.caption} style={styles.img} />
            <div style={styles.captionOverlay}>
              <span>{photo.caption}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  },
  photoContainer: {
    position: 'relative',
    borderRadius: '15px',
    overflow: 'hidden',
    height: '300px',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  captionOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: 'rgba(27, 99, 176, 0.7)', 
    color: 'white',
    padding: '10px',
    textAlign: 'center',
    opacity: 0, 
    transition: 'opacity 0.3s ease',
  }
};


const css = `
  div:hover > img { transform: scale(1.1); }
  div:hover > div { opacity: 1; }
`;
const styleSheet = document.createElement("style");
styleSheet.innerText = css;
document.head.appendChild(styleSheet);

export default MyAlbum;