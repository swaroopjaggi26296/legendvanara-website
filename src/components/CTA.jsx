import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Book your dream vacation today and create memories that last a lifetime
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/book-now">
            <Button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-lg transition-all hover:scale-105">
              Book Your Trip Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <a href="tel:+919620238565">
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-6 text-lg font-semibold rounded-lg transition-all">
              <Phone className="mr-2 w-5 h-5" />
              Call Us Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
