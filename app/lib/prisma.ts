import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg"; // Ensure 'pg' is installed

// 1. Initialize the connection pool outside the singleton to prevent leakages
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);

const prismaClientSingleton = () => {
  return new PrismaClient({
    adapter,
  });
};

// 2. Use globalThis instead of 'global' for better Next.js compatibility
declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

export default prisma;

// 3. Save to globalThis in development to prevent multiple instances
if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;



// import { PrismaClient } from "../generated/prisma/client"; 
// import { PrismaPg } from "@prisma/adapter-pg"; 
// const globalForPrisma = global as unknown as {
//   prisma: PrismaClient; 
// }; 
// const adapter = new PrismaPg({
//   connectionString: process.env.DATABASE_URL, 
// }); 
// const prisma =
//   globalForPrisma.prisma ||
//   new PrismaClient({
//     adapter, 
//   }); 
// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma; 
// export default prisma; 

