// src/components/Header.tsx

import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 20px 0;
  width: 100%;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
`;

const Logo = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;

  li {
    margin: 15px;
    a {
      color: goldenrod;
      font-size: 1.1rem;
      padding-bottom: 5px;
      border-bottom: 2px solid transparent;
      transition: border-bottom 0.3s ease;
    }
    a:hover {
      border-bottom: 2px solid ${({ theme }) => theme.colors.accent};
    }
  }
`;

const Header: React.FC = () => (
  <HeaderWrapper>
    <Nav className="container">
      <Logo>Alioune</Logo>
      <Menu>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </Menu>
    </Nav>
  </HeaderWrapper>
);

export default Header;
