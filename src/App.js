import React from 'react';

import "aos/dist/aos.css";
import "aos/dist/aos";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './css/custom-style.css';
import './js/custom-js'

import Header from "./section/Header"
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Portfolio from './pages/Portfolio';
import Career from './pages/Career';
import Footer from "./section/Footer";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/career" element={<Career />} />
          </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
