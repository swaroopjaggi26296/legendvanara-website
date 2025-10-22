import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, Shield, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <div className="hero-section relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Discover the Magic of{' '}
            <span className="text-orange-500">Incredible India</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Embark on unforgettable journeys across India's most breathtaking destinations with our expertly crafted travel packages.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <Link to="/packages">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg font-medium rounded-lg transition-all hover:scale-105">
                Explore Packages
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/book-now">
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg font-medium rounded-lg transition-all">
                Book Now
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap gap-6 text-sm md:text-base">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span>4.9 Rating (500+ Reviews)</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-blue-400" />
              <span>Best Price Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;