import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './composants/acceuil';
import FormationsPage from './composants/formations';
import AssistanceConseilsPage from './composants/assistances-conseils';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Accueil */}
        <Route path="/acceuil" element={<HomePage />} />
        {/* Formations*/}
        <Route path="/formations" element={<FormationsPage />} />
        {/* Assistances-conseils*/}
        <Route path="/" element={<AssistanceConseilsPage />} />
      </Routes>
    </Router>
  );
}

export default App;


        