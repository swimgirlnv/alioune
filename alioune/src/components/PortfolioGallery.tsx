// src/components/PortfolioGallery.tsx

import React from 'react';
import styled from 'styled-components';
import WaveBackground from '../assets/wave-gradient.svg';

const GalleryWrapper = styled.section`
  padding: 100px 20px;
  background: url(${WaveBackground}) no-repeat center center;
  background-size: cover;
  text-align: center;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const GalleryItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
    font-family: ${({ theme }) => theme.fonts.heading};
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 1;
    }
  }
`;

const PortfolioGallery: React.FC = () => (
  <GalleryWrapper>
    <h2>Portfolio</h2>
    <GalleryGrid>
      <GalleryItem>
        <img src="https://i.imgur.com/sROnFEI.jpeg" alt="Model in Red sweatshirt and Blue jeans" />
        <div className="overlay">Red Sweatshirt & Blue Jeans</div>
      </GalleryItem>
      <GalleryItem>
        <img src="https://i.imgur.com/jA9uwuF.png" alt="Model in all white outfit" />
        <div className="overlay">All White Outfit</div>
      </GalleryItem>
      {/* Add more GalleryItem components as needed */}
    </GalleryGrid>
  </GalleryWrapper>
);

export default PortfolioGallery;
