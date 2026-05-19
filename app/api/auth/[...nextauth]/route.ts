// export const runtime = "nodejs"; 

// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import prisma from "@/app/lib/prisma"; // Ensure this exports a real PrismaClient instance

// export const { handlers, auth, signIn, signOut } = NextAuth({
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],
//   session: {
//     strategy: "database", // This requires the Prisma models to be 100% correct
//   },
//   // Adding a secret is mandatory in many Next.js versions
//   secret: process.env.NEXTAUTH_SECRET, 
// });

// // If you are using the App Router, your route.ts should look like this:
// // export { handlers as GET, handlers as POST }


// 1. Force the Node.js runtime (critical for Prisma)
export const runtime = "nodejs";

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/app/lib/prisma";

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      allowDangerousEmailAccountLinking: true, 
    }),
  ],
  session: {
    strategy: "database",
  },
});

// 2. Explicitly export the HTTP methods
export { handler as GET, handler as POST };
