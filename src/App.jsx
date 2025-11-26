
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Playas from './pages/Playas';    
import Tablas from './pages/Tablas';   
import MyAlbum from './pages/MyAlbum';
import BeachDetail from './pages/BeachDetail';

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playas" element={<Playas />} />
        <Route path="/tablas" element={<Tablas />} />
        <Route path="/album" element={<MyAlbum />} />
        <Route path="/playa/:id" element={<BeachDetail />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;