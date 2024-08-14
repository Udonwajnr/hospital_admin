"use client"
import axios from "axios"
import { useEffect,useState } from "react"
import Link from "next/link"
export default  function Table(){
    const [hospital,setHospital] = useState([])
    useEffect(()=>{
        axios.get("https://hospitalgisapi.onrender.com/api/hospital")
        .then((data)=>{
            console.log(data)
            setHospital(data.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
        console.log(hospital)
    return(
        <>
               <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
                <thead>
                    <tr className="bg-gray-100 text-gray-600">
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Location</th>
                        <th className="py-2 px-4 border-b">Contact</th>
                        <th className="py-2 px-4 border-b">Services</th>
                        <th className="py-2 px-4 border-b">Description</th>
                        <th className="py-2 px-4 border-b">Operating Hours</th>
                        <th className="py-2 px-4 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        hospital.map((hospital)=>{
                            return(
                                    <tr className="hover:bg-gray-50 text-xs">
                                        <td className="py-2 px-4 border-b">{hospital.name}</td>
                                        <td className="py-2 px-4 border-b">{hospital?.contact?.address?.street}</td>
                                        <td className="py-2 px-4 border-b">
                                            {hospital?.contact?.phone}<br/>
                                            {hospital?.contact?.email}
                                        </td>
                                        <td className="py-2 px-4 border-b">{hospital.services.map((service,index)=><>{service}{index < hospital.services.length - 1 && ', '}</>)}</td>
                                        <td className="py-2 px-4 border-b">{hospital.description}</td>
                                        <td className="py-2 px-4 border-b">
                                            Monday: 8 AM - 8 PM<br/>
                                            Tuesday: 8 AM - 8 PM<br/>
                                            Wednesday: 8 AM - 8 PM<br/>
                                            Thursday: 8 AM - 8 PM<br/>
                                            Friday: 8 AM - 8 PM<br/>
                                            Saturday: 8 AM - 8 PM<br/>
                                            Sunday: Closed
                                        </td>
                                        <td className="py-2 px-4 border-b">
                                            <Link href={`/hospitalform/${hospital._id}`} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Edit</Link>
                                            <Link href={`/hospitalform/${hospital._id}/delete`} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-2">Delete</Link>
                                        </td>
                                    </tr>
                            )
                        })
                    }
                </tbody>

          </table>
        </>
    )
}