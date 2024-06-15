import React from 'react';
import HeroSection from './hero_section';
import Projects from './projects';
import Skills from './skills';
import Experience from './experience';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Projects />
      <Skills />
      <Experience />
    </>
  );
};

export default Home;
