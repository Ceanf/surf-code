
import React from 'react';


const Card = ({ title, imageUrl, description }) => {
  return (
    <div style={styles.card}>
      <img src={imageUrl} alt={title} style={styles.image} />
      <div style={styles.content}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.text}>{description}</p>
      </div>
    </div>
  );
};


const styles = {
  card: {
    backgroundColor: 'white',
    borderRadius: '15px', 
    boxShadow: '0 10px 25px rgba(0,0,0,0.05)', 
    overflow: 'hidden',
    width: '100%',
    maxWidth: '320px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', 
    cursor: 'pointer'
  },
  
  title: {
     margin: '0 0 10px 0',
     color: '#001d3d', 
     fontSize: '1.2rem'
  }
};

export default Card;