import React from 'react';
import Navbar from '../components/Navbar';
import FeaturedPackages from '../components/FeaturedPackages';
import Footer from '../components/Footer';

const Packages = () => {
  return (
    <div className="packages-page">
      <Navbar />
      <div className="py-20">
        <FeaturedPackages showAll={true} />
      </div>
      <Footer />
    </div>
  );
};

export default Packages;