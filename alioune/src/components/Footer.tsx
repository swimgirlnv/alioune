// src/components/Footer.tsx

import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: goldenrod;
  padding: 20px 0;
  text-align: center;
  font-size: 0.9rem;
`;

const Footer: React.FC = () => (
  <FooterWrapper>
    <p>&copy; {new Date().getFullYear()} Alioune. All rights reserved.</p>
  </FooterWrapper>
);

export default Footer;
