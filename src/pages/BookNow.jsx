import React from 'react';
import Navbar from '../components/Navbar';
import BookingForm from '../components/BookingForm';
import Footer from '../components/Footer';

const BookNow = () => {
  return (
    <div className="book-now-page">
      <Navbar />
      <div className="py-20 min-h-screen bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-4">Book Your Trip</h1>
            <p className="text-center text-gray-600 mb-8">Fill out the form below and we'll get back to you via WhatsApp</p>
            <BookingForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookNow;