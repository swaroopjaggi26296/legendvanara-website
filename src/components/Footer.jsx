import React from 'react';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">LV</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">LegendVanara</h3>
                <p className="text-sm text-orange-500">Travels & Holidays</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner for memorable travel experiences across India. Creating unforgettable journeys since 2020.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Home
                </Link>
                </li>
              <li>
                <Link to="/vehicles" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Vehicle
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link to="/book-now" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <a href="tel:+919620238565" className="text-gray-400 hover:text-orange-500 transition-colors">
                  +91 9620238565
                </a>
                </li>
                <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <a href="tel:+919663753251" className="text-gray-400 hover:text-orange-500 transition-colors">
                  +91 9663753251 
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <a href="mailto:legendvanaraholidays@gmail.com" className="text-gray-400 hover:text-orange-500 transition-colors">
                  legendvanaraholidays@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Naidu Layout, Rajiv Gandhi Road, Jaraganahalli, JP Nagar, Bangalore - 560078</span>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <p className="text-gray-400 mb-4">Stay connected for exclusive deals and travel inspiration.</p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 LegendVanara Travels & Holidays. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
