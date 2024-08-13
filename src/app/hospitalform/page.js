"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '../components/Container'; // Adjust the import according to your project structure

const HospitalForm = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [hospital, setHospital] = useState({
    name: '',
    description: '',
    location: { type: 'Point', coordinates: [0, 0] }, // Default coordinates
    contact: { phone: '', email: '', address: { street: '', city: '', state: '', postalCode: '' } },
    services: [],
    operatingHours: {
      monday: { open: '', close: '' },
      tuesday: { open: '', close: '' },
      wednesday: { open: '', close: '' },
      thursday: { open: '', close: '' },
      friday: { open: '', close: '' },
      saturday: { open: '', close: '' },
      sunday: { open: '', close: '' }
    }
  });

  useEffect(() => {
    // Update location coordinates when latitude or longitude changes
    setHospital(prevState => ({
      ...prevState,
      location: {
        ...prevState.location,
        coordinates: [
          parseFloat(latitude) || 0,
          parseFloat(longitude) || 0
        ]
      }
    }));
  }, [latitude, longitude]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith('contact.address')) {
      const addressKey = name.split('.').pop();
      setHospital(prevState => ({
        ...prevState,
        contact: {
          ...prevState.contact,
          address: {
            ...prevState.contact.address,
            [addressKey]: value
          }
        }
      }));
    } else {
      setHospital(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleOperatingHoursChange = (day, field, value) => {
    setHospital(prevState => ({
      ...prevState,
      operatingHours: {
        ...prevState.operatingHours,
        [day]: {
          ...prevState.operatingHours[day],
          [field]: value
        }
      }
    }));
  };

  const addHospital = async () => {
    try {
      const response = await axios.post('https://hospitalgisapi.onrender.com/api/hospital', hospital);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">Add Hospital Information</h1>
          <form className="space-y-6">
            {/* Hospital Name */}
            <div className="flex flex-col space-y-2">
              <label className="text-gray-700 font-medium">Name of Hospital</label>
              <input
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="name"
                value={hospital.name}
                onChange={handleChange}
                type="text"
                placeholder="Enter hospital name"
              />
            </div>

            {/* Coordinates */}
            <div className="space-y-2">
              <label className="text-gray-700 font-medium">Coordinates</label>
              <div className="flex space-x-4">
                <input
                  className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="number"
                  value={latitude}
                  onChange={(e) => setLatitude(e.target.value)}
                  placeholder="Latitude"
                />
                <input
                  className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="number"
                  value={longitude}
                  onChange={(e) => setLongitude(e.target.value)}
                  placeholder="Longitude"
                />
              </div>
            </div>

            {/* Contacts */}
            <div className="space-y-2">
              <label className="text-gray-700 font-medium">Contacts</label>
              <div className="flex space-x-4">
                <div className="flex-1 flex flex-col space-y-1">
                  <label className="text-gray-700">Phone Number</label>
                  <input
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="contact.phone"
                    value={hospital.contact.phone}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter phone number"
                  />
                </div>
                <div className="flex-1 flex flex-col space-y-1">
                  <label className="text-gray-700">Email</label>
                  <input
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="contact.email"
                    type="email"
                    value={hospital.contact.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                  />
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="space-y-2">
              <label className="text-gray-700 font-medium">Address</label>
              <div className="flex space-x-4 flex-wrap">
                <div className="flex-1 flex flex-col space-y-1">
                  <label className="text-gray-700">Street</label>
                  <input
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="contact.address.street"
                    value={hospital.contact.address.street}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter street address"
                  />
                </div>
                <div className="flex-1 flex flex-col space-y-1">
                  <label className="text-gray-700">City</label>
                  <input
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="contact.address.city"
                    value={hospital.contact.address.city}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter city"
                  />
                </div>
                <div className="flex-1 flex flex-col space-y-1">
                  <label className="text-gray-700">State</label>
                  <input
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="contact.address.state"
                    value={hospital.contact.address.state}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter state"
                  />
                </div>
                <div className="flex-1 flex flex-col space-y-1">
                  <label className="text-gray-700">Postal Code</label>
                  <input
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="contact.address.postalCode"
                    value={hospital.contact.address.postalCode}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter postal code"
                  />
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-gray-700 font-medium">Services</label>
                <button type="button" className="py-1 rounded-xl text-white bg-blue-500 text-center px-3">Add More Services +</button>
              </div>
              <input
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="services"
                value={hospital.services.join(', ')}
                onChange={e => setHospital(prevState => ({
                  ...prevState,
                  services: e.target.value.split(',').map(service => service.trim())
                }))}
                type="text"
                placeholder="Enter services offered (comma-separated)"
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="text-gray-700 font-medium">Hospital Description</label>
              <textarea
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                name="description"
                value={hospital.description}
                onChange={handleChange}
                placeholder="Enter hospital description"
              />
            </div>

            {/* Operating Hours */}
            <div className="space-y-4">
              <label className="text-gray-700 font-medium">Operating Hours</label>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map(day => (
                  <div key={day} className="flex flex-col space-y-1">
                    <label className="text-gray-700 capitalize">{day}</label>
                    <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                      <input
                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        placeholder="Opening"
                        value={hospital.operatingHours[day].open}
                        onChange={(e) => handleOperatingHoursChange(day, 'open', e.target.value)}
                      />
                      <input
                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        placeholder="Closing"
                        value={hospital.operatingHours[day].close}
                        onChange={(e) => handleOperatingHoursChange(day, 'close', e.target.value)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={addHospital}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default HospitalForm;
