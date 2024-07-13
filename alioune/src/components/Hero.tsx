// src/components/Hero.tsx

import React from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.section`
  width: 100vw; /* Ensure it spans the full viewport width */
  background: url('/path/to/hero-image.jpg') no-repeat center center/cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  animation: fadeIn 1.5s ease-in-out;
`;

const HeroContent = styled.div`
  max-width: 700px;
  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
    animation: slideInFromLeft 1s ease-out;
  }
  p {
    font-size: 1.2rem;
    animation: slideInFromRight 1s ease-out;
    color: #1d3557;
  }
`;

const Hero: React.FC = () => (
  <HeroWrapper>
    <HeroContent>
      <h1>Alioune Badara</h1>
      <p>Model & Fashion Icon</p>
      <p>From France to San Francisco</p>
    </HeroContent>
  </HeroWrapper>
);

export default Hero;
