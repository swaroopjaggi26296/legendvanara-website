import React from 'react';
import { MapPin, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Link } from 'react-router-dom';

const packages = [
  {
    id: 1,
    name: 'Kerala Backwaters Escape',
    location: 'Kerala',
    rating: 4.8,
    reviews: 127,
    duration: '4N/5D',
    price: 15999,
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800',
    highlights: ['Houseboat stay', 'Ayurvedic spa', 'Tea garden visit'],
  },
  {
    id: 2,
    name: 'Rajasthan Royal Heritage',
    location: 'Rajasthan',
    rating: 4.9,
    reviews: 203,
    duration: '5N/6D',
    price: 22999,
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=800',
    highlights: ['Palace tours', 'Camel safari', 'Cultural shows'],
  },
  {
    id: 3,
    name: 'Goa Beach Paradise',
    location: 'Goa',
    rating: 4.7,
    reviews: 156,
    duration: '3N/4D',
    price: 12499,
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=800',
    highlights: ['Beach activities', 'Water sports', 'Nightlife'],
  },
  {
    id: 4,
    name: 'Himachal Hill Station Tour',
    location: 'Himachal Pradesh',
    rating: 4.9,
    reviews: 189,
    duration: '6N/7D',
    price: 18999,
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=800',
    highlights: ['Mountain views', 'Adventure sports', 'Local cuisine'],
  },
  {
    id: 5,
    name: 'Golden Triangle Experience',
    location: 'Delhi-Agra-Jaipur',
    rating: 4.8,
    reviews: 245,
    duration: '5N/6D',
    price: 19999,
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=800',
    highlights: ['Taj Mahal', 'Red Fort', 'Amber Fort'],
  },
  {
    id: 6,
    name: 'Kashmir Valley Retreat',
    location: 'Kashmir',
    rating: 4.9,
    reviews: 167,
    duration: '6N/7D',
    price: 24999,
    image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&q=80&w=800',
    highlights: ['Dal Lake', 'Gulmarg', 'Pahalgam'],
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