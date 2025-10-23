import React from 'react';
import { Car } from 'lucide-react';
import sedanImg from "../components/images/Sedan.jpg";
import innoImg from "../components/images/Toyota-Innova.jpg";
import cryImg from "../components/images/innova-crysta.jpg";
import ttImg from "../components/images/TT_AC.jpg";
import ttacImg from "../components/images/TT_non_AC.jpg";
import urbImg from "../components/images/Urbania.jpeg";
import minibusImg from "../components/images/miniBus.jpg";
import busImg from "../components/images/Bus.jpg";

const vehicles = [
  {
    name: 'Sedan',
    price: '12',
    capacity: '4 seater',
    image: sedanImg,
  },
  {
    name: 'SUV Innova',
    price: '16',
    capacity: '6+1 seater',
    image: innoImg,
  },
  {
    name: 'SUV Crysta',
    price: '18',
    capacity: '6+1 seater',
    image: cryImg,
  },
  {
    name: 'Tempo Traveller (Non AC)',
    price: '18',
    capacity: '12+1 seater',
    image: ttImg,
  },
  {
    name: 'Tempo Traveller (AC)',
    price: '20',
    capacity: '12+1 seater',
    image: ttacImg,
  },
  {
    name: 'Urbania ',
    price:'40',
    capacity: '16+1 seater',
    image: urbImg,
  },
  {
    name: 'Mini Bus',
    price:'contact us',
    capacity: '20-35 seater',
    image: minibusImg,
  },
  {
    name: 'Bus',
    price:'contact us',
    capacity: '35-55 seater',
    image: busImg,
  },
];

const Vehicles = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Vehicle Fleet</h2>
          <p className="text-xl text-gray-600">Comfortable and well-maintained vehicles for your journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {vehicles.map((vehicle, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{vehicle.name}</h3>
                  <Car className="w-5 h-5 text-orange-500" />
                </div>
                <p className="text-gray-600 mb-4">{vehicle.capacity}</p>
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-3xl font-bold text-orange-500">₹{vehicle.price}</span>
                    <span className="text-gray-600">/km</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Additional Information</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• All vehicles come with experienced and professional drivers</li>
            <li>• Prices are per kilometer and exclude tolls, parking, and driver allowance</li>
            <li>• Minimum booking of 300 km per day applies for outstation trips</li>
            <li>• All vehicles are regularly maintained and sanitized</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Vehicles;
export { vehicles };
