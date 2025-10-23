import React from 'react';
import { MapPin, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Link } from 'react-router-dom';
import mysur from "../components/images/mysurpalace.jpg";
import ooty from "../components/images/ooty.jpg";
import madikeri from "../components/images/madikeri.jpg";
import wayanad from "../components/images/wayanad.jpg";
import temple from "../components/images/temple.jpg";
import custom from "../components/images/custom.jpg";
const packages = [
  {
    id: 1,
    name: 'Royal Mysore Getaway',
    location: 'Mysuru',
    rating: 5,
    reviews: 200,
    duration: '1N/2D',
    price: 12999,
    image: mysur,
    highlights: ['Palace', 'Zoo', 'KRS Dam', 'etc'],
  },
  {
    id: 2,
    name: 'Ooty Magic - The Queen of Hills Awaits',
    location: 'Ooty',
    rating: 4.9,
    reviews: 203,
    duration: '3N/2D',
    price: 19999,
    image: ooty,
    highlights: ['Doddabetta Peak', 'Pykara Lake & Waterfalls', 'Nilgiri Mountain Toy Trains'],
  },
  {
    id: 3,
    name: 'Coorg Royal Escape',
    location: 'Coorg/Madikeri',
    rating: 4.9,
    reviews: 200,
    duration: '2N/3D',
    price: 18999,
    image: madikeri,
    highlights: ['Abbey Falls', 'Dubare Elephant Camp', 'Nisargadhama'],
  },
  {
    id: 4,
    name: 'Wayanad Wilderness Retreat',
    location: 'Wayanad Kerala',
    rating: 4.9,
    reviews: 220,
    duration: '2N/3D',
    price: 21999,
    image: wayanad,
    highlights: ['Banasura Sagar Dam', 'Edakkal Caves', 'Wayanad Wildlife Sanctuary'],
  },
  {
    id: 5,
    name: 'Sacred Temples of the South',
    location: '',
    rating: 5,
    reviews: 245,
    duration: '3N/4D',
    price: 'Contact Us',
    image: temple,
    highlights: ['Tirupati', 'Dharmashatala', 'Srikalahasti','Tiruvannamalai'],
  },
  {
    id: 6,
    name: 'Custom - Your Trip, Your Way',
    location: 'Anywhere you like to plan',
    rating: 4.9,
    reviews: 198,
    duration: 'Depend on trip',
    price: 'Contact Us',
    image: custom,
    highlights: ['Hampi', 'Shivamogga,', 'Goa', 'anywhere you like to plan'],
  },
];

const FeaturedPackages = ({ showAll = false }) => {
  const displayPackages = showAll ? packages : packages.slice(0, 3);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Featured Packages</h2>
          <p className="text-xl text-gray-600">Handpicked destinations for your next adventure</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-orange-500 text-white px-3 py-1 text-sm font-semibold">
                    {pkg.duration}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-orange-500 transition-colors">
                  {pkg.name}
                </h3>

                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{pkg.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{pkg.rating}</span>
                    <span>({pkg.reviews})</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {pkg.highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className="text-xs bg-orange-50 text-orange-600 px-3 py-1 rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-3xl font-bold text-gray-900">₹{pkg.price.toLocaleString()}</span>
                  </div>
                  <Link to="/book-now">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-all hover:scale-105">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-12">
            <Link to="/packages">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg rounded-lg transition-all hover:scale-105">
                View All Packages
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedPackages;
export { packages };
