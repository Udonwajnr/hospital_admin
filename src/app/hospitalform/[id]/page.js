"use client";
import React, { useEffect, useState } from "react";
import Container from "@/app/components/Container";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";

export default function EditForm() {
  const router = useRouter();
  const { id } = useParams(); // Use useParams to get dynamic route parameters
  const [hospital, setHospital] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://hospitalgisapi.onrender.com/api/hospital/${id}`)
        .then((response) => {
          setHospital(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`https://hospitalgisapi.onrender.com/api/hospital/${id}`, hospital);
      router.push(`/`);
    } catch (error) {
      console.error("Failed to update hospital", error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Container>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">Edit Hospital Information</h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-2">
              <label className="text-gray-700 font-medium">Name of Hospital</label>
              <input
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Enter hospital name"
                value={hospital?.name || ''}
                onChange={(e) => setHospital({ ...hospital, name: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label className="text-gray-700 font-medium">Coordinates</label>
              <div className="flex space-x-4">
                <input
                  className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="number"
                  placeholder="Latitude"
                  value={hospital?.location.coordinates[0] || ''}
                  onChange={(e) => setHospital({ ...hospital, location: { ...hospital.location, coordinates: [parseFloat(e.target.value), hospital.location.coordinates[1]] } })}
                />
                <input
                  className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="number"
                  placeholder="Longitude"
                  value={hospital?.location.coordinates[1] || ''}
                  onChange={(e) => setHospital({ ...hospital, location: { ...hospital.location, coordinates: [hospital.location.coordinates[0], parseFloat(e.target.value)] } })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-gray-700 font-medium">Contacts</label>
              <div className="flex space-x-4">
                <div className="flex-1 flex flex-col space-y-1">
                  <label className="text-gray-700">Phone Number</label>
                  <input
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    placeholder="Enter phone number"
                    value={hospital?.contact.phone || ''}
                    onChange={(e) => setHospital({ ...hospital, contact: { ...hospital.contact, phone: e.target.value } })}
                  />
                </div>
                <div className="flex-1 flex flex-col space-y-1">
                  <label className="text-gray-700">Email</label>
                  <input
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="email"
                    placeholder="Enter email address"
                    value={hospital?.contact.email || ''}
                    onChange={(e) => setHospital({ ...hospital, contact: { ...hospital.contact, email: e.target.value } })}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-gray-700 font-medium">Address</label>
              <div className="flex space-x-4 flex-wrap">
                <div className="flex-1 flex flex-col space-y-1">
                  <label className="text-gray-700">Street</label>
                  <input
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    placeholder="Enter street address"
                    value={hospital?.contact.address.street || ''}
                    onChange={(e) => setHospital({ ...hospital, contact: { ...hospital.contact, address: { ...hospital.contact.address, street: e.target.value } } })}
                  />
                </div>
                <div className="flex-1 flex flex-col space-y-1">
                  <label className="text-gray-700">City</label>
                  <input
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    placeholder="Enter city"
                    value={hospital?.contact.address.city || ''}
                    onChange={(e) => setHospital({ ...hospital, contact: { ...hospital.contact, address: { ...hospital.contact.address, city: e.target.value } } })}
                  />
                </div>
                <div className="flex-1 flex flex-col space-y-1">
                  <label className="text-gray-700">State</label>
                  <input
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    placeholder="Enter state"
                    value={hospital?.contact.address.state || ''}
                    onChange={(e) => setHospital({ ...hospital, contact: { ...hospital.contact, address: { ...hospital.contact.address, state: e.target.value } } })}
                  />
                </div>
                <div className="flex-1 flex flex-col space-y-1">
                  <label className="text-gray-700">Postal Code</label>
                  <input
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    placeholder="Enter postal code"
                    value={hospital?.contact.address.postalCode || ''}
                    onChange={(e) => setHospital({ ...hospital, contact: { ...hospital.contact, address: { ...hospital.contact.address, postalCode: e.target.value } } })}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-gray-700 font-medium">Services</label>
              <input
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Enter services offered (comma-separated)"
                value={hospital?.services.join(', ') || ''}
                onChange={(e) => setHospital({ ...hospital, services: e.target.value.split(',').map(service => service.trim()) })}
              />
            </div>

            <div className="space-y-2">
              <label className="text-gray-700 font-medium">Hospital Description</label>
              <textarea
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Enter hospital description"
                value={hospital?.description || ''}
                onChange={(e) => setHospital({ ...hospital, description: e.target.value })}
              />
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
                        value={hospital?.operatingHours[day]?.opening || ''}
                        onChange={(e) => setHospital({
                          ...hospital,
                          operatingHours: { ...hospital.operatingHours, [day]: { ...hospital.operatingHours[day], opening: e.target.value } }
                        })}
                      />
                      <input
                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        placeholder="Closing"
                        value={hospital?.operatingHours[day]?.closing || ''}
                        onChange={(e) => setHospital({
                          ...hospital,
                          operatingHours: { ...hospital.operatingHours, [day]: { ...hospital.operatingHours[day], closing: e.target.value } }
                        })}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
}
