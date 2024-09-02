import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './index';  // Adjusted path
import Home from './Home';
import AboutUs from './AboutUs';
import BlogPage from './Blog';
import OurTeam from './OurTeam';
import Testimonial from './Testimonial';
import GetInTouch from './GetInTouch';
import Navbar from './Navbar';
import Services from './Service';
import Projects from './Projects';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/service" element={<Services />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/contact" element={<GetInTouch />} />
      </Routes>
    </Router>
  );
};

export default App;
