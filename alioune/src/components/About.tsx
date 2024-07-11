// src/components/About.tsx

import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.section`
  padding: 100px 20px;
  color: white;
  text-align: center;
`;

const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  backdrop-filter: blur(10px);
  padding: 40px;
  border-radius: 10px;
  color: black;
`;

const About: React.FC = () => (
  <AboutWrapper>
    <AboutContent>
      <h2>About Alioune</h2>
      <p>
        Alioune is a French model with a passion for fashion and elegance. With years of experience in the industry, Alioune has worked with top designers and photographers, bringing a unique blend of grace and style to every shoot.
      </p>
    </AboutContent>
  </AboutWrapper>
);

export default About;
