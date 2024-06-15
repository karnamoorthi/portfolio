import React from 'react';
import Navbar from './components/navbar'
import HeroSection from './components/hero_section';
import AboutMe from './components/about';
import Projects from './components/projects';
import Skills from './components/skills';
import Experience from './components/experience';
import Contact from './components/contact';
import Footer from './components/footer';

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
};

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/Home'; // Make sure to create a Home component

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<AboutMe />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/skills" element={<Skills />} />
//         <Route path="/experience" element={<Experience />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// export default App;
