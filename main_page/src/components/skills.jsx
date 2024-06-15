import React from 'react';
import styled from 'styled-components';
import { Grid, Paper } from '@material-ui/core';

const SkillsContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f9f9f9;
`;

const SkillItem = styled(Paper)`
  padding: 1rem;
  text-align: center;
  color: #fff;
  background-color: #3a7bd5;
`;

const Skills = () => {
  const skills = ['React.js', 'JavaScript', 'HTML', 'CSS', 'Node.js'];

  return (
    <SkillsContainer>
      <h2>Skills</h2>
      <Grid container spacing={3}>
        {skills.map((skill, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <SkillItem>{skill}</SkillItem>
          </Grid>
        ))}
      </Grid>
    </SkillsContainer>
  );
};

export default Skills;
