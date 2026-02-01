import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './components/shared/Feedback.css'; // Adicionando o CSS do feedback
import Footer from './components/shared/Footer';
import Header from './components/shared/Header';
import Home from './pages/Home';
import SobrePage from './pages/SobrePage';
import ServicosPage from './pages/ServicosPage';
import EquipePage from './pages/EquipePage';
import ContatosPage from './pages/ContatosPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/servicos" element={<ServicosPage />} />
          <Route path="/equipe" element={<EquipePage />} />
          <Route path="/contatos" element={<ContatosPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
