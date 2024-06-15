import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled.section`
  background: linear-gradient(to right, #3a7bd5, #f85032);
  color: white;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

const HeroText = styled(motion.h1)`
  font-size: 4rem;
  margin: 0;
`;

const HeroSubText = styled(motion.h2)`
  font-size: 2rem;
  margin: 0;
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroText initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Welcome to My Portfolio
      </HeroText>
      <HeroSubText initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
        I'm a Software Engineer
      </HeroSubText>
    </HeroContainer>
  );
};

export default HeroSection;