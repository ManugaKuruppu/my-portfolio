import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage'; 
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/my-portfolio" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/my-portfolio/about" element={<AboutPage />} />
        <Route path="/my-portfolio/contact" element={<ContactPage />} />
        <Route path="/about/projects" element={<ProjectsPage />} />

      </Routes>
    </Router>
  );
};

export default App;
