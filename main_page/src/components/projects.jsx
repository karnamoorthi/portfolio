import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #fff;
`;

const ProjectCard = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProjectTitle = styled.h3`
  color: #3a7bd5;
`;

const ProjectDescription = styled.p`
  color: #333;
`;

const Projects = () => {
  const projectList = [
    { title: 'Project One', description: 'Description for project one.' },
    { title: 'Project Two', description: 'Description for project two.' },
    { title: 'Project Three', description: 'Description for project three.' }
  ];

  return (
    <ProjectsContainer>
      <h2>Projects</h2>
      {projectList.map((project, index) => (
        <ProjectCard key={index}>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
};

export default Projects;
