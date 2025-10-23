import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Vehicles from '../components/Vehicles';
import FeaturedPackages from '../components/FeaturedPackages';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Services />
      <Vehicles />
      <FeaturedPackages />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;