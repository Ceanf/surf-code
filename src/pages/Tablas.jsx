
import React from 'react';
import Card from '../components/Card';
import tabla1 from '../assets/myphotos/tabla1.png';
import tabla2 from '../assets/myphotos/tabla2.png';
import tabla3 from '../assets/myphotos/tabla3.png';



const Tablas = () => {
  const tablas = [
    { id: 1, name: 'Shortboard', img:tabla1, desc: 'Maniobrabilidad y velocidad para olas huecas.' },
    { id: 2, name: 'Longboard', img: tabla2, desc: 'Estilo clásico. Perfecta para días pequeños y relajados.' },
    { id: 3, name: 'Funboard', img: tabla3, desc: 'El punto medio. Estabilidad y diversión asegurada.' },
  ];

  return (
    <div style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', color: '#001d3d', fontSize: '2.5rem' }}>🏄 Tu Quiver Ideal</h1>
      <p style={{ textAlign: 'center', marginBottom: '70px' }}>Elige tu arma según las condiciones del mar.</p>
      
      <div style={styles.grid}>
        {tablas.map((tabla) => (
          <Card key={tabla.id} title={tabla.name} imageUrl={tabla.img} description={tabla.desc} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  grid: { display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }
};

export default Tablas;