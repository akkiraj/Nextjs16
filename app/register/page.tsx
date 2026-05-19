"use client";

import { useActionState } from "react";
import { createUser } from "../api/createuser";

export default function RegisterPage() {
       // state will contain whatever your action returns
  const [state, formAction] = useActionState(createUser, null);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      
      {/* <form action={registerUser} className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"> */}
      <form action={formAction} className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Create Account
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Name</label>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block mb-1 text-sm font-medium">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter password"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2">
  <label htmlFor="role" className="block text-sm font-medium text-slate-700 mb-1.5">
    Account Role
  </label>
  <select 
    id="role"
    name="role" 
    className="block w-full px-4 py-2.5 bottom-2 bg-white border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all cursor-pointer hover:border-slate-400"
  >
    <option value="USER">Employee</option>
    <option value="MANAGER">Manager</option>
  </select>
</div>


        {/* Button */}
        <button
          type="submit"
          className="w-full mt-5 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Register
        </button>

        {/* Login Link */}
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login here
          </a>
        </p>
      </form>
    </div>
  );
}