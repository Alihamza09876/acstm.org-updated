import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css';

import Program from './pages/Program';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program" element={<Program />} />
        {/* Placeholder for other routes like /register */}
        <Route path="/program2" element={<div className="container mt-5 pt-5"><h1>Program Room 2 (Coming Soon)</h1></div>} />
        <Route path="/program3" element={<div className="container mt-5 pt-5"><h1>Program Room 3 (Coming Soon)</h1></div>} />
        <Route path="/register" element={<div className="container mt-5 pt-5"><h1>Register Page (Coming Soon)</h1></div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
