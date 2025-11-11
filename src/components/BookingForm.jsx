import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { useToast } from '../hooks/use-toast';
import { packages } from './FeaturedPackages';
import { vehicles } from './Vehicles';
import { Send } from 'lucide-react';

const BookingForm = ({ selectedPackage = null }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleName: '',
    packageName: selectedPackage || '',
    travelDate: '',
    numberOfPeople: '',
    additionalInfo: '',
  });

  // Update package name when selectedPackage prop changes
  useEffect(() => {
    if (selectedPackage) {
      setFormData((prev) => ({
        ...prev,
        packageName: selectedPackage,
      }));
    }
  }, [selectedPackage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 const handleVehicleChange = (value) => {
  setFormData((prev) => ({
    ...prev,
    vehicleName: value,
  }));
};
  const handlePackageChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      packageName: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.phone || !formData.packageName) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }

    // Create WhatsApp message
    const message = `*New Booking Request*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Vehicle:* ${formData.vehicleName}
*Package:* ${formData.packageName}
*Travel Date:* ${formData.travelDate}
*Number of People:* ${formData.numberOfPeople}
*Additional Info:* ${formData.additionalInfo || 'N/A'}`;

    // WhatsApp API URL
    const whatsappNumber = '919449449510';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Show success message
    toast({
      title: 'Redirecting to WhatsApp',
      description: 'You will be redirected to WhatsApp to send your booking request.',
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      vehicleName: '',
      packageName: '',
      travelDate: '',
      numberOfPeople: '',
      additionalInfo: '',
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900">Personal Information</h3>

          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1"
            />
          </div>
        </div>

        {/* Travel Details */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900">Travel Details</h3>

         <div>
          <Label htmlFor="vehicleName">Vehicle Selection *</Label>
          <Select value={formData.vehicleName} onValueChange={handleVehicleChange}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select a vehicle" />
              </SelectTrigger>
              <SelectContent>
                {vehicles.map((vehicle, index) => (
                  <SelectItem key={index} value={vehicle.name}>
                    {vehicle.name} - {vehicle.capacity} 
                    {/*- ₹{vehicle.price}/km */}
                    </SelectItem>
                  ))}
                  </SelectContent>
                  </Select>
                  </div>

          <div>
            <Label htmlFor="packageName">Package Name *</Label>
            <Select value={formData.packageName} onValueChange={handlePackageChange}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select a package" />
              </SelectTrigger>
              <SelectContent>
                {packages.map((pkg) => (
                  <SelectItem key={pkg.id} value={pkg.name}>
                    {pkg.name} - {pkg.duration}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="travelDate">Preferred Travel Date</Label>
            <Input
              id="travelDate"
              name="travelDate"
              type="date"
              value={formData.travelDate}
              onChange={handleChange}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="numberOfPeople">Number of People</Label>
            <Input
              id="numberOfPeople"
              name="numberOfPeople"
              type="number"
              placeholder="Enter number of travelers"
              value={formData.numberOfPeople}
              onChange={handleChange}
              min="1"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="additionalInfo">Additional Information</Label>
            <Textarea
              id="additionalInfo"
              name="additionalInfo"
              placeholder="Any special requests or requirements..."
              value={formData.additionalInfo}
              onChange={handleChange}
              rows={4}
              className="mt-1"
            />
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-lg font-semibold rounded-lg transition-all hover:scale-105"
        >
          <Send className="mr-2 w-5 h-5" />
          Send Booking Request via WhatsApp
        </Button>

        <p className="text-sm text-gray-600 text-center">
          By submitting this form, your booking details will be sent to our WhatsApp for immediate assistance.
        </p>
      </form>
    </div>
  );
};

export default BookingForm;
