export default  function Table(){
    return(
        <>
               <table class="w-full bg-white border border-gray-200 rounded-lg shadow-md">
                <thead>
                    <tr class="bg-gray-100 text-gray-600">
                        <th class="py-2 px-4 border-b">Name</th>
                        <th class="py-2 px-4 border-b">Location</th>
                        <th class="py-2 px-4 border-b">Contact</th>
                        <th class="py-2 px-4 border-b">Services</th>
                        <th class="py-2 px-4 border-b">Description</th>
                        <th class="py-2 px-4 border-b">Operating Hours</th>
                        <th class="py-2 px-4 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="hover:bg-gray-50 text-xs">
                        <td class="py-2 px-4 border-b">Example Hospital</td>
                        <td class="py-2 px-4 border-b">123 Example St, City, State</td>
                        <td class="py-2 px-4 border-b">
                            Phone: 123-456-7890<br/>
                            Email: example@hospital.com
                        </td>
                        <td class="py-2 px-4 border-b">Emergency, Surgery, Maternity</td>
                        <td class="py-2 px-4 border-b">A full-service hospital...</td>
                        <td class="py-2 px-4 border-b">
                            Monday: 8 AM - 8 PM<br/>
                            Tuesday: 8 AM - 8 PM<br/>
                            Wednesday: 8 AM - 8 PM<br/>
                            Thursday: 8 AM - 8 PM<br/>
                            Friday: 8 AM - 8 PM<br/>
                            Saturday: 8 AM - 8 PM<br/>
                            Sunday: Closed
                        </td>
                        <td class="py-2 px-4 border-b">
                            <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Edit</button>
                            <button class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-2">Delete</button>
                        </td>
                    </tr>
                </tbody>

          </table>
        </>
    )
}