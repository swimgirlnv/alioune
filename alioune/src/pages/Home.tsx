// src/pages/Home.tsx

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import About from '../components/About';
import PortfolioGallery from '../components/PortfolioGallery';
import Contact from '../components/Contact';


const Home: React.FC = () => (
  <div>
    <Header />
    <Hero />
    <main>
      <About />
      <PortfolioGallery />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Home;
