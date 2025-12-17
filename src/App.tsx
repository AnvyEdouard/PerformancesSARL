import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './composants/acceuil';
import FormationsPage from './composants/formations';
import AssistanceConseilsPage from './composants/assistances-conseils';
import EtudesAuditsPage from './composants/etudes-audits';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Accueil */}
        <Route path="/" element={<HomePage />} />
        {/* Formations*/}
        <Route path="/formations" element={<FormationsPage />} />
        {/* Assistances-conseils*/}
        <Route path="/assisyances-conseils" element={<AssistanceConseilsPage />} />
        {/* etudes-audits*/}
        <Route path="/etudes-audits" element={<EtudesAuditsPage />} />
      </Routes>
    </Router>
  );
}

export default App;


        