import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/ui/Navbar';
import { Footer } from './components/ui/Footer';
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            {/* Add more routes here, e.g.: */}
            {/* <Route path="/about" element={<About />} /> */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
