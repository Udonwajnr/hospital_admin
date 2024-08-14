"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";
import Container from "@/app/components/Container";

export default function DeleteHospital() {
  const router = useRouter();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hospital, setHospital] = useState(null);

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

  const handleDelete = async () => {
    try {
      await axios.delete(`https://hospitalgisapi.onrender.com/api/hospital/${id}`);
      router.push("/"); // Redirect to the hospitals list or another appropriate page
    } catch (error) {
      setError(error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Container>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">Confirm Deletion</h1>
          <p className="text-gray-700 mb-4">Are you sure you want to delete the hospital <strong>{hospital.name}</strong>?</p>
          <div className="flex justify-end space-x-4">
            <button
              onClick={() => router.back()}
              className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
