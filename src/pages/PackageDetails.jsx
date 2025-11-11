import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { MapPin, Clock, Car } from 'lucide-react';

// Import vehicle images
import sedanImg from "../components/images/Sedan.jpg";
import innoImg from "../components/images/Toyota-Innova.jpg";
import cryImg from "../components/images/innova-crysta.jpg";
import ttImg from "../components/images/TT_AC.jpg";
import minibusImg from "../components/images/miniBus.jpg"
import busImg from "../components/images/Bus.jpg"
import urbImg from "../components/images/Urbania.jpeg";

// Package data with detailed information
const packageDetails = {
  1: {
    id: 1,
    name: 'Royal Mysore Getaway',
    location: 'Mysuru',
    duration: '1 Day',
    estimatedKm: 600,
    limit: 396,
    image: require('../components/images/mysurpalace.jpg'),
    places: [
      'Mysore Palace',
      'Chamundi Hills',
      'Brindavan Gardens',
      'KRS Dam (Krishna Raja Sagara)',
      'Mysore Zoo (Sri Chamarajendra Zoological Gardens)',
      'St. Philomena\'s Cathedral Church',
      'Jaganmohan Palace Art Gallery',
      'Railway Museum',
    ],
  },
  2: {
    id: 2,
    name: 'Ooty Magic - The Queen of Hills Awaits',
    location: 'Ooty',
    duration: '2N/3D',
    estimatedKm: 900,
    limit: 900,
    image: require('../components/images/ooty.jpg'),
    places: [
      'Doddabetta Peak',
      'Ooty Lake & Boating',
      'Botanical Gardens',
      'Pykara Lake & Waterfalls',
      'Nilgiri Mountain Railway (Toy Train)',
      'Tea Gardens & Tea Factory',
      'Rose Garden',
      'Thread Garden',
      'Avalanche Lake',
      'Emerald Lake',
    ],
  },
  3: {
    id: 3,
    name: 'Coorg Royal Escape',
    location: 'Coorg/Madikeri',
    duration: '2N/3D',
    estimatedKm: 850,
    limit: 900,
    image: require('../components/images/madikeri.jpg'),
    places: [
      'Golden Temple (Tibetan Monastery)',
      'Kaveri Nisargadhama Forest Park',
      'Dubare Elephant Camp',
      'Raja\'s Seat',
      'Omkareshwara Temple',
      'Abbey Waterfalls',
      'Mandalpatti Viewpoint Trekking',
      'Bhagamandala (Triveni Sangama)',
      'Talakaveri',
    ],
  },
  4: {
    id: 4,
    name: 'Wayanad Wilderness Retreat',
    location: 'Wayanad Kerala',
    duration: '2N/3D',
    estimatedKm: 950,
    limit: 900,
    image: require('../components/images/wayanad.jpg'),
    places: [
      'Banasura Sagar Dam',
      'Edakkal Caves',
      'Wayanad Wildlife Sanctuary',
      'Pookode Lake',
      'Chembra Peak',
      'Soochipara Waterfalls',
      'Meenmutty Waterfalls',
      'Thirunelli Temple',
      'Kuruva Island',
      'Neelimala Viewpoint',
    ],
  },
  5: {
    id: 5,
    name: 'Sacred Temples of the South',
    location: 'Multi-city Temple Tour',
    duration: '3N/4D',
    estimatedKm: 1200,
    limit: 1200,
    image: require('../components/images/temple.jpg'),
    places: [
      'Tirupati Balaji Temple',
      'Sri Kalahasti Temple',
      'Dharmasthala Manjunatha Temple',
      'Kukke Subramanya Temple',
      'Tiruvannamalai Arunachaleswarar Temple',
      'Kanipakam Vinayaka Temple',
      'Srisailam Mallikarjuna Temple',
    ],
  },
  6: {
    id: 6,
    name: 'Custom - Your Trip, Your Way',
    location: 'Anywhere you like to plan',
    duration: 'Flexible',
    estimatedKm: 'Custom',
    image: require('../components/images/custom.jpg'),
    places: [
      'Hampi - UNESCO World Heritage Site',
      'Shivamogga - Jog Falls & Nature',
      'Goa - Beaches & Nightlife',
      'Chikmagalur - Coffee Plantations',
      'Kabini - Wildlife Safari',
      'Badami - Cave Temples',
      'Or any destination of your choice',
    ],
  },
};

// Package-specific pricing data
const packagePricing = {
  1: { // Mysore 1 day
    kmLimit: 396,
    vehicles: {
      'Sedan (4 seater)': 5499,
      'SUV Innova (6+1)': 7499,
      'SUV Crysta (6+1)': 7999,
      'TT (12+1)': 8499,
    }
  },
  2: { // Ooty 2n/3d
    kmLimit: 900,
    vehicles: {
      'Sedan (4 seater)': 13499,
      'SUV Innova (6+1)': 18499,
      'SUV Crysta (6+1)': 20499,
      'TT (12+1)': 23499,
    }
  },
  3: { // Coorg 2n/3d
    kmLimit: 900,
    vehicles: {
      'Sedan (4 seater)': 13999,
      'SUV Innova (6+1)': 17499,
      'SUV Crysta (6+1)': 19499,
      'TT (12+1)': 20999,
    }
  },
  4: { // Wayanad 2n/3d
    kmLimit: 900,
    vehicles: {
      'Sedan (4 seater)': 14499,
      'SUV Innova (6+1)': 19999,
      'SUV Crysta (6+1)': 21999,
      'TT (12+1)': 25499,
    }
  },
};

// Vehicle data
const vehicles = [
  {
    name: 'Sedan (4 seater)',
    image: sedanImg,
  },
  {
    name: 'SUV Innova (6+1)',
    image: innoImg,
  },
  {
    name: 'SUV Crysta (6+1)',
    image: cryImg,
  },
  {
    name: 'TT (12+1)',
    image: ttImg,
  },
  {
    name: 'Urbania (16+1)',
    image: urbImg,
  },
  {
    name: 'Mini Bus (20 - 35 seater)',
    image: minibusImg,
  },
  {
    name: 'Bus (35 - 55 seater)',
    image: busImg,
  },
];

const PackageDetail = () => {
  const { id } = useParams();
  const packageData = packageDetails[id];

  if (!packageData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Package Not Found</h1>
          <Link to="/packages">
            <Button className="bg-orange-500 hover:bg-orange-600">View All Packages</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="package-detail-page">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <img
          src={packageData.image}
          alt={packageData.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center px-4">
            {packageData.name}
          </h1>
        </div>
      </div>

      {/* Package Details Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto mb-16">
          {/* Location and Duration */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2 text-gray-700">
              <MapPin className="w-6 h-6 text-orange-500" />
              <span className="text-lg font-medium">{packageData.location}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Clock className="w-6 h-6 text-orange-500" />
              <span className="text-lg font-medium">Trip Duration: {packageData.duration}</span>
            </div>
          </div>

          {/* Places List */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">Places List</h2>
            <ul className="space-y-3">
              {packageData.places.map((place, index) => (
                <li key={index} className="flex items-start space-x-3 text-gray-700">
                  <span className="text-orange-500 font-bold mt-1">•</span>
                  <span className="text-lg">{place}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pricing Overview Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-blue-600">Pricing</span>{' '}
              <span className="text-gray-900">Overview</span>
            </h2>
            <p className="text-lg text-gray-600">
              Enjoy Best Price Guarantee, professional services, timely pick-up & drop-off and more!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => {
              // Get package-specific pricing
              const pricing = packagePricing[id];
              const vehiclePrice = pricing?.vehicles[vehicle.name];
              const kmLimit = pricing?.kmLimit;

              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{vehicle.name}</h3>
                    
                    <div className="space-y-3 mb-4">
                      {vehiclePrice ? (
                        <>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Total Limit Kms:</span>
                            <span className="text-lg font-bold text-gray-900">{kmLimit} km</span>
                          </div>
                          
                          <div className="flex justify-between items-center pt-2 border-t">
                            <span className="text-sm text-gray-600">Total Price for Package:</span>
                            <span className="text-xl font-bold text-orange-500">₹ {vehiclePrice.toLocaleString()}</span>
                          </div>
                        </>
                      ) : (
                        <div className="text-center pt-2">
                          <span className="text-lg font-bold text-orange-500">Contact Us for Pricing</span>
                        </div>
                      )}
                    </div>

                    <Link to="/book-now">
                      <Button className="w-full bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 font-semibold">
                        More Details
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Link to="/book-now" state={{ selectedPackage: packageData.name }}>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 text-lg rounded-lg transition-all hover:scale-105">
              Book This Package Now
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PackageDetail;
