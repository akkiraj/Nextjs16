"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;

  return (
    <nav style={{ padding: "10px", float: "left", borderBottom: "1px solid #ccc" }}>
      {session ? (
        <>
          <span>Welcome, {session.user?.name}</span>
          <button  className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors"
            onClick={() => signOut({ callbackUrl: "/" })}
            style={{ marginLeft: "10px" }}
          >
            Logout
          </button>
        </>
      ) : (
        <button onClick={() => signIn("google")}>
          Login with Google
        </button>
      )}
    </nav>
  );
}