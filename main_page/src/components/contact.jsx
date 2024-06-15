import React from 'react';
import styled from 'styled-components';
import { TextField, Button } from '@material-ui/core';

const ContactContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  text-align: center;
`;

const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <h2>Contact</h2>
      <ContactForm>
        <TextField label="Name" variant="outlined" margin="normal" fullWidth />
        <TextField label="Email" variant="outlined" margin="normal" fullWidth />
        <TextField label="Message" variant="outlined" margin="normal" fullWidth multiline rows={4} />
        <Button variant="contained" color="primary" type="submit">Send</Button>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;
