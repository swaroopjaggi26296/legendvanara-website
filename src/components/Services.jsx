import React from 'react';
import { MapPin, Building2, Car, Mountain, Users, Phone } from 'lucide-react';

const services = [
  {
    icon: MapPin,
    title: 'Customized Tour Packages',
    description: 'Tailored itineraries designed around your preferences, budget, and travel style.',
  },
  {
    icon: Car,
    title: 'Transportation Services',
    description: 'Comfortable vehicle options with experienced drivers for all your travel needs.',
  },

  {
    icon: Users,
    title: 'Guided Tours',
    description: 'Expert local guides to enhance your experience with cultural insights.',
  },
 
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Premium Services</h2>
          <p className="text-xl text-gray-600">Everything you need for a perfect travel experience</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;