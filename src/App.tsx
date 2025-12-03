import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './composants/acceuil';
import FormationsPage from './composants/formations';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Accueil */}
        <Route path="/" element={<HomePage />} />
        {/* Formations*/}
        <Route path="/formation" element={<FormationsPage />} />
      </Routes>
    </Router>
  );
}

export default App;


        