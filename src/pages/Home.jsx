import React from "react";
import { Link } from "react-router-dom";
import fotoPerfil from "../assets/myphotos/surf2.JPG";

const Home = () => {
  return (
    <>
      {/* ---  HERO SECTION  --- */}
      <div id="inicio" style={styles.heroSection}>
        <div style={styles.heroOverlay}>
          <h1 style={styles.heroTitle}>SURF LIFE</h1>
          <p style={styles.heroSubtitle}>
            Code, Silence & Waves. Tu conexión con el océano.
          </p>
          <Link to="/playas">
            <button style={styles.heroButton}>Explorar Spots</button>
          </Link>
        </div>
      </div>

      {/* ---  SECCIÓN: CARACTERÍSTICAS  --- */}
      <div style={styles.featuresSection}>
        <div style={styles.container}>
          {/* Título con un pequeño acento de color */}
          <h2 style={styles.sectionTitle}>
            Explora <span style={{ color: "#00d4ff" }}>un poco</span>
          </h2>

          <div style={styles.featureGrid}>
            {/* Feature : Spots */}
            <Link to="/playas" style={{ textDecoration: "none" }}>
              <div className="feature-card" style={styles.featureCard}>
                {/* Ícono SVG de Ola */}
                <div style={styles.iconWrapper}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    style={styles.svgIcon}
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M12.6 10.1C11.8 8 9.2 7.3 7.6 7.9 6.2 8.4 4.1 10 3 13c4.5-1.6 7.5 1.3 9 3.4 1.3 1.8 3 3.3 4.8 3.6.8.1 1.5.1 2.2 0 .6-.1 1.2-.2 1.7-.4.9-.3 1.6-.8 2.2-1.4.2-.2.4-.4.5-.7.2-.4.4-.8.5-1.2.1-.5.2-1.1.1-1.7-.3-1.8-1.6-3.2-3.2-4-1.6-.8-4-.9-5.7-1.5-1.6-.6-2.8-1.5-3.3-2.6-1-2.1.3-4.3 2.3-5.5 1.5-.9 3.2-1.1 4.9-.8.9.2 1.8.5 2.6 1 0 0-2.2.9-3.6.6-.9-.2-1.8-.5-2.5-1.1-.7-.6-1.2-1.3-1.3-2.2-.1-.9.3-1.8.9-2.5.6-.7 1.5-1.1 2.4-1.2 1.6-.2 3.2.4 4.4 1.5.9.9 1.6 2.1 1.9 3.4.1.5.2 1 .2 1.5s-.1 1-.2 1.4c-.2.4-.5.8-.9 1.1-1.8 1.4-4.6 2.2-6.8 3.7-1.5 1-2.3 2.8-2.4 4.6z" />
                  </svg>
                </div>
                <h3 style={styles.featureTitle}>Spots Legendarios</h3>
                <p style={styles.featureText}>
                  Guía detallada de las mejores olas del Perú, desde el norte
                  hasta el sur.
                </p>
              </div>
            </Link>

            {/* Feature : Tablas */}
            <Link to="/tablas" style={{ textDecoration: "none" }}>
              <div className="feature-card" style={styles.featureCard}>
                {/* Ícono SVG de Tabla */}
                <div style={styles.iconWrapper}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    style={styles.svgIcon}
                  >
                    <path d="M14.53 12.53c.16.16.41.17.58.02l2.76-2.4c.23-.2.23-.56.02-.77l-1.91-1.91c-.2-.21-.56-.21-.77.02l-2.4 2.76c-.15.17-.14.42.02.58.16.16.41.17.58.02l1.69-1.46.94.94-1.46 1.69c-.16.17-.15.42.01.58-.02-.02-.04-.04-.06-.07zM19.6 4.4c-.56-.56-1.32-.98-2.2-1.2-.89-.22-1.84-.29-2.79-.19-1.89.19-3.71.96-5.24 2.06-.39.28-.76.57-1.12.88-1.42 1.21-2.55 2.73-3.21 4.49-.67 1.76-.77 3.68-.3 5.57.23.96.64 1.88 1.2 2.7l.03.04.04.06c.83.56 1.75.97 2.7 1.2 1.89.47 3.81.37 5.57-.3 1.76-.66 3.28-1.79 4.49-3.21.31-.36.6-.73.88-1.12 1.1-1.53 1.87-3.35 2.06-5.24.1-1.01.01-2.02-.24-2.97-.25-1.01-.84-1.91-1.67-2.56l-.16-.23zM13 19c-3.31 0-6-2.69-6-6 0-1.04.27-2.02.74-2.88L5.66 8.04C6.1 6.5 6.97 5.15 8.17 4.12l-1.2-1.2-1.42 1.42c-.78.78-.78 2.04-.01 2.82l9.8 9.8c.78.78 2.04.78 2.82.01l1.42-1.42-1.2-1.2c-1.02 1.2-2.36 2.07-3.9 2.51-.86.47-1.84.74-2.88.74z" />
                  </svg>
                </div>
                <h3 style={styles.featureTitle}>Quiver Ideal</h3>
                <p style={styles.featureText}>
                  Conoce tu equipo. Encuentra la tabla perfecta para las
                  condiciones del día.
                </p>
              </div>
            </Link>

            {/* Feature : Álbum */}
            <Link to="/album" style={{ textDecoration: "none" }}>
              <div className="feature-card" style={styles.featureCard}>
                {/* Ícono SVG de Cámara */}
                <div style={styles.iconWrapper}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    style={styles.svgIcon}
                  >
                    <path d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5.66-6.77l-1.53-1.53c-.13-.13-.28-.23-.45-.3-.17-.07-.35-.1-.53-.1H8.85c-.18 0-.36.03-.53.1-.17.07-.32.17-.45.3L6.34 6.23C6.1 6.47 6 6.77 6 7.1V17c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V7.1c0-.33-.1-.63-.34-.87zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm6.5-8c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM20 4v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1V7h1c.55 0 1-.45 1-1s-.45-1-1-1h-1V4c0-.55-.45-1-1-1s-1 .45-1 1z" />
                  </svg>
                </div>
                <h3 style={styles.featureTitle}>Diario Visual</h3>
                <p style={styles.featureText}>
                  Una colección de momentos capturados entre la sal, el código y
                  el silencio.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* ---  SECCIÓN: FILOSOFÍA  --- */}
      <div style={styles.aboutSection}>
        <div style={styles.aboutContainer}>
          <div style={styles.aboutText}>
            <h4 style={styles.smallHeader}>SOBRE EL PROYECTO</h4>
            <h2 style={styles.aboutTitle}>Code, Silence & Waves</h2>
            <p style={styles.aboutParagraph}>
              El surf no es solo un deporte, es una desconexión necesaria. En un
              mundo lleno de ruido y notificaciones, el océano ofrece el
              silencio que necesitamos para recargar energías.
            </p>
            <p style={styles.aboutParagraph}>
              Este espacio nace de la unión de dos pasiones: la lógica de la
              programación y la fluidez de las olas peruanas.
            </p>
          </div>
          <div style={styles.aboutImageContainer}>
            <img
              src={fotoPerfil}
              alt="Mi foto de perfil"
              style={styles.aboutImage}
            />
          </div>
        </div>
      </div>

      {/* --- SECCIÓN: CONTACTO --- */}
      <div style={styles.contactSection}>
        <div style={styles.contactContainer}>
      
          <h2 style={{ ...styles.sectionTitle, color: "#00d4ff" }}>
            contacto
          </h2>
          <p style={{ color: "#e0e0e0", marginBottom: "40px" }}>
            ¿Tienes alguna pregunta ?
          </p>

          <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div style={styles.inputGroup}>
              <input type="text" placeholder="Tu Nombre" style={styles.input} />
              <input type="email" placeholder="Tu Email" style={styles.input} />
            </div>
            <textarea
              placeholder="Tu Mensaje..."
              rows="5"
              style={styles.textarea}
            ></textarea>
            <button style={styles.submitButton}>Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </>
  );
};

const styles = {
  // ... HERO
  heroSection: {
    backgroundImage:
      'url("https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1920&q=80")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100%",
    marginTop: "-80px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  heroOverlay: {
    backgroundColor: "rgba(0,29,61,0.5)",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textAlign: "center",
    padding: "20px",
  },
  heroTitle: {
    fontSize: "5rem",
    margin: "0",
    textTransform: "uppercase",
    letterSpacing: "5px",
    textShadow: "2px 2px 10px rgba(0,0,0,0.5)",
    fontFamily: "'Montserrat', sans-serif",
  },
  heroSubtitle: {
    fontSize: "1.5rem",
    marginTop: "15px",
    maxWidth: "700px",
    fontWeight: "300",
  },
  heroButton: {
    padding: "15px 45px",
    fontSize: "18px",
    marginTop: "35px",
    borderRadius: "50px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#00d4ff",
    color: "#001d3d",
    fontWeight: "800",
    boxShadow: "0 4px 25px rgba(0, 212, 255, 0.6)",
    transition: "transform 0.2s",
  },

  // SECCIÓN CENTRAL ---
  featuresSection: {
    padding: "120px 20px",
    backgroundColor: "#fff",
    position: "relative",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "center",
  },
  sectionTitle: {
    color: "#001d3d",
    fontSize: "3rem",
    marginBottom: "70px",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: "800",
  },
  featureGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "40px",
  },
  // ESTILO DE LA TARJETA
  featureCard: {
    width: "320px",
    padding: "40px 30px",
    borderRadius: "25px",
    backgroundColor: "#ffffff",
    textAlign: "center",
    // Sombra suave inicial
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    border: "1px solid rgba(0,0,0,0.05)",
    position: "relative",
    overflow: "hidden",
  },
  // Contenedor del ícono para darle el círculo de color
  iconWrapper: {
    backgroundColor: "rgba(0, 212, 255, 0.1)",
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 25px auto",
  },
  // El ícono SVG en sí
  svgIcon: {
    width: "40px",
    height: "40px",
    color: "#00d4ff",
  },
  featureTitle: {
    color: "#001d3d",
    marginBottom: "15px",
    fontSize: "1.5rem",
    fontWeight: "700",
  },
  featureText: { color: "#555", lineHeight: "1.7", fontSize: "1rem" },

  // ... SECCIÓN FILOSOFÍA
  aboutSection: {
    padding: "100px 20px",
    backgroundColor: "#001d3d",
    color: "white",
  },
  aboutContainer: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "50px",
  },
  aboutText: { flex: "1 1 400px", textAlign: "left" },
  smallHeader: {
    color: "#00d4ff",
    letterSpacing: "2px",
    fontSize: "0.9rem",
    marginBottom: "10px",
  },
  aboutTitle: {
    fontSize: "3rem",
    margin: "0 0 30px 0",
    fontFamily: "'Montserrat', sans-serif",
  },
  aboutParagraph: {
    fontSize: "1.1rem",
    lineHeight: "1.8",
    color: "#e0e0e0",
    marginBottom: "20px",
  },
  aboutImageContainer: { flex: "1 1 500px" },
  aboutImage: {
    width: "100%",
    borderRadius: "20px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
  },

  // SECCIÓN CONTACTO
  contactSection: {
    padding: "100px 20px",
    backgroundColor: "#001d3d",
    textAlign: "center",
  },
  contactContainer: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  },
  inputGroup: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },
  input: {
    flex: 1,
    padding: "15px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    fontSize: "1rem",
    outline: "none",
    minWidth: "200px",
  },
  textarea: {
    padding: "15px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    fontSize: "1rem",
    outline: "none",
    fontFamily: "inherit",
  },
  submitButton: {
    padding: "15px 30px",
    backgroundColor: "#001d3d",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background 0.3s",
  },
};

// Esto hace que las tarjetas se levanten y brillen al pasar el mouse
const css = `
  .feature-card { transition: all 0.3s ease; }
  .feature-card:hover { 
    transform: translateY(-10px); /* Se levanta */
    box-shadow: 0 20px 40px rgba(0, 212, 255, 0.2); /* Resplandor Cyan */
    border-color: rgba(0, 212, 255, 0.3);
  }
`;
const styleSheet = document.createElement("style");
styleSheet.innerText = css;
document.head.appendChild(styleSheet);

export default Home;
