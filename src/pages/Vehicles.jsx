import React from 'react';
import Navbar from '../components/Navbar';
import FeaturedPackages from '../components/Vehicles';
import Footer from '../components/Footer';

const Vehicles = () => {
  return (
    <div className="vehicles-page">
      <Navbar />
      <div className="py-20">
        <FeaturedPackages showAll={true} />
      </div>
      <Footer />
    </div>
  );
};

export default Vehicles;