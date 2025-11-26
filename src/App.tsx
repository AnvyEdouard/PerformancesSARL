import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './composants/acceuil';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Accueil */}
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
