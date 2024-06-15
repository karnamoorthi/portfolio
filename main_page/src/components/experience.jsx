import React from 'react';
import styled from 'styled-components';

const ExperienceContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #fff;
`;

const ExperienceItem = styled.div`
  margin-bottom: 2rem;
`;

const ExperienceTitle = styled.h3`
  color: #3a7bd5;
`;

const ExperienceDescription = styled.p`
  color: #333;
`;

const Experience = () => {
  const experiences = [
    { title: 'Software Developer at XYZ', description: 'Developed and maintained web applications using React.js and Node.js.' },
    { title: 'Frontend Developer at ABC', description: 'Built responsive and interactive user interfaces with React.js and Redux.' }
  ];

  return (
    <ExperienceContainer>
      <h2>Experience</h2>
      {experiences.map((experience, index) => (
        <ExperienceItem key={index}>
          <ExperienceTitle>{experience.title}</ExperienceTitle>
          <ExperienceDescription>{experience.description}</ExperienceDescription>
        </ExperienceItem>
      ))}
    </ExperienceContainer>
  );
};

export default Experience;
