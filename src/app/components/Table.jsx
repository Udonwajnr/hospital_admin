export default  function Table(){
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
                    <tr className="hover:bg-gray-50 text-xs">
                        <td className="py-2 px-4 border-b">Example Hospital</td>
                        <td className="py-2 px-4 border-b">123 Example St, City, State</td>
                        <td className="py-2 px-4 border-b">
                            Phone: 123-456-7890<br/>
                            Email: example@hospital.com
                        </td>
                        <td className="py-2 px-4 border-b">Emergency, Surgery, Maternity</td>
                        <td className="py-2 px-4 border-b">A full-service hospital...</td>
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
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Edit</button>
                            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-2">Delete</button>
                        </td>
                    </tr>
                </tbody>

          </table>
        </>
    )
}