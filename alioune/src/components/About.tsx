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
      I’m Senegalese. 
      I was raised and started working as a model in France 
      I worked for Mirage Paris as Egerie of their brand and 
      now I’m living in San Francisco . 
      </p>
    </AboutContent>
  </AboutWrapper>
);

export default About;
