
import React from 'react';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const Playas = () => {
  const playas = [
    { id: 1, name: 'Chicama (Malabrigo)', img: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=500&q=60', desc: 'La izquierda más larga del mundo. Piernas de acero requeridas.' },
    { id: 2, name: 'Máncora', img: 'https://images.unsplash.com/photo-1520443240718-fce21901db79?auto=format&fit=crop&w=500&q=60', desc: 'Agua caliente, tubos rápidos y vida nocturna.' },
    { id: 3, name: 'Punta Rocas', img: 'https://images.unsplash.com/photo-1415931633537-351070d20b81?auto=format&fit=crop&w=500&q=60', desc: 'La arena de los campeonatos. Olas potentes todo el año.' },
  ];

  return (
    <div style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', color: '#001d3d', fontSize: '2.5rem' }}>🌊 Mejores Spots</h1>
      <p style={{ textAlign: 'center', marginBottom: '40px' }}>Descubre las olas legendarias de nuestra costa.</p>
      
      <div style={styles.grid}>
        {playas.map((playa) => (
           
          <Link to={`/playa/${playa.id}`} key={playa.id} style={{ textDecoration: 'none' }}>
            <Card title={playa.name} imageUrl={playa.img} description={playa.desc} />
          </Link>
        ))}
      </div>
    </div>
  );
};

const styles = {
  grid: { display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }
};

export default Playas;