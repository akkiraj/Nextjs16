"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation"; // 1. Import useRouter
import { useEffect } from "react";            


import Image from "next/image";
import Dashboard from "./dashboard/page";
//import LoginPage from "./login/page";


export default function Home() {
  
    const { data: session, status } = useSession();
  const router = useRouter();

  // 3. Effect to handle redirection
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/register"); // Redirect to the /dashboard route
    }
  }, [status, router]);

 // While checking session or redirecting, show a loading state
  if (status === "loading" || status === "authenticated") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg">Redirecting to dashboard...</p>
      </div>
    );
  }

  if (session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        {/* <h2 className="text-2xl font-bold">Welcome {session.user?.name}</h2> */}
        <button 
          onClick={() => signOut()}
          className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors"
        >
          Logout
        </button>

      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h2 className="text-2xl font-semibold text-gray-700">Not signed in</h2>
      <button 
        onClick={() => signIn("google")}
        className="px-6 py-2 font-medium text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700 transition-all"
      >
        Sign in with Google
      </button>
    </div>
  );
}




