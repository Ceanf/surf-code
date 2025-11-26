
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={{ margin: 0 }}>
        © 2025 🏄‍♂️ <b>Surf Life</b> - Code, Silence & Waves.
      </p>
      <p style={{ fontSize: '0.8rem', marginTop: '5px', opacity: 0.7 }}>
        io cean, aun falta mejorar la pagina web xd... :
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#001d3d', 
    color: 'white',
    textAlign: 'center',
    padding: '30px 20px',
    
    marginTop: '0', 
    
    width: '100%',
    position: 'relative',
    borderTop: '1px solid rgba(255,255,255,0.1)' 
  }
};

export default Footer;