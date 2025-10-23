import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">LV</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">LegendVanara</h1>
              <p className="text-xs text-orange-500">Travels & Holidays</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                isActive('/') ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
              }`}
            >
              Home
            </Link>
            <Link
              to="/vehicles"
              className={`font-medium transition-colors ${
                isActive('/vehicles') ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
              }`}
            >
              Vehicle
            </Link>
            <Link
              to="/packages"
              className={`font-medium transition-colors ${
                isActive('/packages') ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
              }`}
            >
              Packages
            </Link>
            <Link
              to="/book-now"
              className={`font-medium transition-colors ${
                isActive('/book-now') ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
              }`}
            >
              Book Now
            </Link>
          </div>

          {/* Phone Number */}
          <div className="hidden md:flex items-center space-x-2 text-gray-700">
            <Phone className="w-4 h-4" />
            <a href="tel:+919620238565" className="font-medium hover:text-orange-500 transition-colors">
              +91 9620238565
            </a>
            <Phone className="w-4 h-4" />
            <a href="tel:+919663753251" className="font-medium hover:text-orange-500 transition-colors">
              +91 9663753251 
            </a>
          </div>
          

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`font-medium ${
                  isActive('/') ? 'text-orange-500' : 'text-gray-700'
                }`}
              >
                Home
              </Link>
              <Link
              to="/vehicles"
              onClick={() => setIsOpen(false)}
                className={`font-medium ${
                isActive('/vehicles') ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
              }`}
            >
              Vehicle
            </Link>
              <Link
                to="/packages"
                onClick={() => setIsOpen(false)}
                className={`font-medium ${
                  isActive('/packages') ? 'text-orange-500' : 'text-gray-700'
                }`}
              >
                Packages
              </Link>
              <Link
                to="/book-now"
                onClick={() => setIsOpen(false)}
                className={`font-medium ${
                  isActive('/book-now') ? 'text-orange-500' : 'text-gray-700'
                }`}
              >
                Book Now
              </Link>
              <a
                href="tel:+919449449510"
                className="flex items-center space-x-2 font-medium text-gray-700"
              >
                <Phone className="w-4 h-4" />
                <span>+91 9449449510</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;