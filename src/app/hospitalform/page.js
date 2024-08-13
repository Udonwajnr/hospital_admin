import React from 'react';
import Container from '../components/Container';

const HospitalForm = () => {
  return (
    <Container>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">Add Hospital Information</h1>
          <form className="space-y-6">
            <div className="flex flex-col space-y-2">
              <label className="text-gray-700 font-medium">Name of Hospital</label>
              <input className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Enter hospital name" />
            </div>

            <div className="space-y-2">
              <label className="text-gray-700 font-medium">Coordinates</label>
              <div className="flex space-x-4">
                <input className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="number" placeholder="Latitude" />
                <input className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="number" placeholder="Longitude" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-gray-700 font-medium">Contacts</label>
              <div className="flex space-x-4">
                <div className="flex-1 flex flex-col space-y-1">
                  <label className="text-gray-700">Phone Number</label>
                  <input className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Enter phone number" />
                </div>
                <div className="flex-1 flex flex-col space-y-1">
                  <label className="text-gray-700">Email</label>
                  <input className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" placeholder="Enter email address" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-gray-700 font-medium">Address</label>
              <div className="flex space-x-4 flex-wrap">
                <div className="flex-1 flex flex-col space-y-1">
                  <label className="text-gray-700">Street</label>
                  <input className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Enter street address" />
                </div>
                <div className="flex-1 flex flex-col space-y-1">
                  <label className="text-gray-700">City</label>
                  <input className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Enter city" />
                </div>
                <div className="flex-1 flex flex-col space-y-1">
                  <label className="text-gray-700">State</label>
                  <input className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Enter state" />
                </div>
                <div className="flex-1 flex flex-col space-y-1">
                  <label className="text-gray-700">Postal Code</label>
                  <input className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Enter postal code" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-gray-700 font-medium">Services</label>
              <input className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Enter services offered (comma-separated)" />
            </div>

            <div className="space-y-2">
              <label className="text-gray-700 font-medium">Hospital Description</label>
              <textarea className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4" placeholder="Enter hospital description"></textarea>
            </div>

            <div className="space-y-4">
    <label className="text-gray-700 font-medium">Operating Hours</label>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
        <div key={day} className="flex flex-col space-y-1">
          <label className="text-gray-700">{day}</label>
          <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <input 
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              type="text" 
              placeholder="Opening" 
            />
            <input 
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              type="text" 
              placeholder="Closing" 
            />
          </div>
        </div>
      ))}
    </div>
  </div>


            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Submit</button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default HospitalForm;
