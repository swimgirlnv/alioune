// src/components/Card.tsx

import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  background-color: #f8f9fa;
  border: 1px solid #e63946;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const CardContent = styled.div`
  padding: 20px;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-family: 'Georgia', serif;
  color: #e63946;
`;

const CardDescription = styled.p`
  color: #1d3557;
`;

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => (
  <CardWrapper>
    <CardImage src={imageUrl} alt={title} />
    <CardContent>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </CardWrapper>
);

export default Card;
