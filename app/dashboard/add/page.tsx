// app/dashboard/create/page.tsx
//import { createUser } from "../actions";

export default function CreatePage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* <form action={createUser} className="bg-white p-6 rounded-xl shadow w-96"> */}
      <form className="bg-white p-6 rounded-xl shadow w-96">
        <h2 className="text-xl font-bold mb-4">Add Employee</h2>

        <input
          name="name"
          placeholder="Name"
          className="w-full mb-3 p-2 border rounded"
        />

        <input
          name="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
        />

        <button className="w-full bg-blue-600 text-white p-2 rounded">
          Save
        </button>
      </form>
    </div>
  );
}