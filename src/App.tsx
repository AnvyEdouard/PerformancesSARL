import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './composants/acceuil';
import FormationsPage from './composants/formations';
import AssistanceConseilsPage from './composants/assistances-conseils';
import EtudesAuditsPage from './composants/etudes-audits';
import RecruitmentPage from './composants/recrutements';
import AboutPage from './composants/a-propos';
import CataloguePage from './composants/catalogue-formations';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './ScrollToTop';
import RouteLoader from './RouteLoader';

function App() {
  return (
    <Router>
      {/* Recharge les pages au tout début*/}
      <ScrollToTop />

      {/* Wrapper avec loader - durée par défaut 1700ms (1.7s) */}
      <RouteLoader duration={1700}>
        <Routes>
          {/* Accueil */}
          <Route path="/" element={<HomePage />} />
          {/* Formations*/}
          <Route path="/formations" element={<FormationsPage />} />
          {/* Catalogue de formations */}
          <Route path="/catalogue-de-formations" element={<CataloguePage />} />
          {/* Assistances-conseils*/}
          <Route path="/assistances-conseils" element={<AssistanceConseilsPage />} />
          {/* etudes-audits*/}
          <Route path="/etudes-audits" element={<EtudesAuditsPage />} />
          {/* recrutements*/}
          <Route path="/recrutements" element={<RecruitmentPage />} />
          {/* a-propos*/}
          <Route path="/a-propos" element={<AboutPage/>} />
        </Routes>
      </RouteLoader>
    </Router>
  );
}

export default App;