import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import IndustrialExperience from './pages/IndustrialExperience';
import Certifications from './pages/Certifications';
import Education from './pages/Education';
import Contacts from './pages/Contacts';
import Hobbies from './pages/Hobbies';
import './index.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/industrial-experience" element={<IndustrialExperience />} />
      <Route path="/certifications" element={<Certifications />} />
      <Route path="/education" element={<Education />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/hobbies" element={<Hobbies />} />
      {/* Fallback: redirect any unknown path back to the homepage */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);

export default App;
