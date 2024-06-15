import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  text-align: center;
`;

const AboutText = styled.p`
  font-size: 1.5rem;
  color: #333;
`;

const AboutMe = () => {
  return (
    <AboutContainer>
      <h2>About Me</h2>
      <AboutText>
        I am a passionate React.js developer with experience in building dynamic and responsive web applications. I love coding, learning new technologies, and solving challenging problems.
      </AboutText>
    </AboutContainer>
  );
};

export default AboutMe;
