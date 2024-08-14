"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Table() {
  const [hospital, setHospital] = useState([]);

  useEffect(() => {
    axios
      .get("https://hospitalgisapi.onrender.com/api/hospital")
      .then((response) => {
        setHospital(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="p-6">
      <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-100 text-gray-600">
            <th className="py-3 px-4 border-b text-left">Name</th>
            <th className="py-3 px-4 border-b text-left">Location</th>
            <th className="py-3 px-4 border-b text-left">Contact</th>
            <th className="py-3 px-4 border-b text-left">Services</th>
            <th className="py-3 px-4 border-b text-left">Description</th>
            <th className="py-3 px-4 border-b text-left">Operating Hours</th>
            <th className="py-3 px-4 border-b text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {hospital.map((item) => (
            <tr key={item._id} className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b text-sm">{item.name}</td>
              <td className="py-3 px-4 border-b text-sm">{item?.contact?.address?.street}</td>
              <td className="py-3 px-4 border-b text-sm">
                {item?.contact?.phone}<br />
                {item?.contact?.email}
              </td>
              <td className="py-3 px-4 border-b text-sm">
                {item.services.join(', ')}
              </td>
              <td className="py-3 px-4 border-b text-sm">{item.description}</td>
              <td className="py-3 px-4 border-b text-sm">
                {Object.entries(item.operatingHours).map(([day, hours]) => (
                  <div key={day}>
                    {day.charAt(0).toUpperCase() + day.slice(1)}: {hours.open} - {hours.close}
                  </div>
                ))}
              </td>
              <td className="py-3 px-4 border-b text-sm space-x-2">
                <Link href={`/hospitalform/${item._id}`} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Edit
                </Link>
                <Link href={`/hospitalform/${item._id}/delete`} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
