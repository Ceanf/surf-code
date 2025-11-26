// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav} className="nav-responsive">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div style={styles.logo}>🏄‍♂️ VIDA SURF</div>
      </Link>

      <ul style={styles.menu} className="menu-responsive">
        {/* Enlaces directos a las páginas nuevas */}
        <li><Link to="/" style={styles.link}>INICIO</Link></li>
        <li><Link to="/playas" style={styles.link}>PLAYAS</Link></li>
        <li><Link to="/tablas" style={styles.link}>TABLAS</Link></li>
        <li><Link to="/album" style={styles.link}>MI ALBUM</Link></li>
      </ul>
    </nav>
  );
};

// Los estilos son los mismos de siempre
const styles = {
  nav: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '20px 40px',
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)', 
    position: 'absolute', width: '100%', top: 0, left: 0, zIndex: 10, boxSizing: 'border-box'
  },
  logo: {
    color: '#fff', fontSize: '1.8rem', fontWeight: '800', cursor: 'pointer',
    fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase', letterSpacing: '2px'
  },
  menu: { display: 'flex', listStyle: 'none', gap: '30px', margin: 0, padding: 0 },
  link: {
    color: '#fff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600',
    textTransform: 'uppercase', letterSpacing: '1px', transition: 'opacity 0.3s', opacity: 0.9
  }
};
//  NAVBAR RESPONSIVE 
const responsiveNavCss = `
  @media (max-width: 768px) {
    /* En celular, cambiamos la dirección de fila a columna */
    .nav-responsive {
      flex-direction: column !important;
      padding: 15px !important;
      background: rgba(0,29,61,0.95) !important; /* Fondo más oscuro para que se lea bien */
    }
    .menu-responsive {
      margin-top: 15px !important; /* Espacio entre logo y menú */
      gap: 15px !important; /* Menos espacio entre enlaces */
      flex-wrap: wrap;
      justify-content: center;
    }
    /* Hacemos los enlaces un pelín más pequeños */
    .menu-responsive a, .menu-responsive button {
        font-size: 0.8rem !important;
    }
  }
`;
const navStyleSheet = document.createElement("style");
navStyleSheet.innerText = responsiveNavCss;
document.head.appendChild(navStyleSheet);

export default Navbar;