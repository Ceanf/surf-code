
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BeachDetail = () => {
  const { id } = useParams(); // Esto captura el número de la URL (ej: /playa/1)

  // Unos datos falsos para simular que cargamos info de esa plaYA, mas adelante le agrego una api  real
  const beachInfo = {
    1: { name: 'Chicama', clima: 'Soleado 24°C', ola: '1.5m Suroeste' },
    2: { name: 'Máncora', clima: 'Caluroso 29°C', ola: '0.5m Noroeste' },
    3: { name: 'Punta Rocas', clima: 'Nublado 19°C', ola: '2.0m Sur' },
  };

  const info = beachInfo[id] || { name: 'Spot Desconocido', clima: '-', ola: '-' };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🌊 {info.name}</h1>
      
      <div style={styles.card}>
        <h3>Reporte Actual</h3>
        <p>🌡️ <b>Clima:</b> {info.clima}</p>
        <p>🏄‍♂️ <b>Oleaje:</b> {info.ola}</p>
        <p>📍 <b>ID del Spot:</b> {id}</p>
      </div>

      <Link to="/playas">
        <button style={styles.button}>Volver a la lista</button>
      </Link>
    </div>
  );
};

const styles = {
  container: {
    padding: '120px 20px', 
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
    minHeight: '60vh'
  },
  title: {
    color: '#001d3d',
    fontSize: '2.5rem',
    marginBottom: '30px'
  },
  card: {
    background: 'white',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    marginBottom: '30px',
    color: '#333'
  },
  button: {
    padding: '10px 20px',
    background: '#001d3d',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default BeachDetail;