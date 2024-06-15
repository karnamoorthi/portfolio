import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 1rem 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 My Portfolio. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
