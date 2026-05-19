// app/dashboard/page.tsx
 import prisma from "@/app/lib/prisma";
// import { deleteUser } from "./actions";
import Link from "next/link";
import { useSession } from "next-auth/react";



export default async function Dashboard() {
  // const { data: session } = useSession(); 
  const users = await prisma.user.findMany();

  return (
    
    
    <div className="p-6 bg-gray-100 min-h-screen">
       
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-2xl shadow">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Employee Dashboard </h2>

          <Link
            href="/dashboard/add"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            + Add Employee
          </Link>
        </div>

        <table className="w-full border rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>

                <td className="p-3 text-center space-x-2">
                  {/* <Link
                    href={`/dashboard/edit/${user.id}`}
                    className="bg-yellow-400 px-3 py-1 rounded"
                  > */}
                   <Link href='/dashboard/edit/1' className="bg-yellow-400 px-3 py-1 rounded"                  >
                    Edit
                  </Link>

                  {/* <form action={deleteUser} className="inline"> */}
                  <form className="inline">
                    {/* <input type="hidden" name="id" value={user.id} /> */}
                    <button className="bg-red-500 text-white px-3 py-1 rounded">
                      Delete
                    </button>
                  </form>
                </td>
              </tr>
                      ))}
       </tbody>
        </table>

      </div>
    </div>
  );
}