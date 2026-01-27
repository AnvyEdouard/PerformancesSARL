import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './composants/acceuil';
import FormationsPage from './composants/formations';
import AssistanceConseilsPage from './composants/assistances-conseils';
import EtudesAuditsPage from './composants/etudes-audits';
import RecruitmentPage from './composants/recrutements';
import AboutPage from './composants/a-propos';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <Router>
      {/* Recharge les pages au tout début*/}
      <ScrollToTop />

      <Routes>
        {/* Accueil */}
        <Route path="/" element={<HomePage />} />
        {/* Formations*/}
        <Route path="/formations" element={<FormationsPage />} />
        {/* Assistances-conseils*/}
        <Route path="/assistances-conseils" element={<AssistanceConseilsPage />} />
        {/* etudes-audits*/}
        <Route path="/etudes-audits" element={<EtudesAuditsPage />} />
        {/* recrutements*/}
        <Route path="/recrutements" element={<RecruitmentPage />} />
        {/* a-propos*/}
        <Route path="/a-propos" element={<AboutPage/>} />
      </Routes>
    </Router>
  );
}

export default App;


        