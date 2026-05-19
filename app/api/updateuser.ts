// "use server";

// import 'dotenv/config'
// import { PrismaClient } from "../generated/prisma/client";
// import { PrismaPg } from "@prisma/adapter-pg";
// import { NextResponse } from 'next/server';
// import { redirect } from "next/navigation";
// import { revalidatePath } from "next/cache";



// import bcrypt from 'bcryptjs'


// const connectionString = process.env.DATABASE_URL;

// const adapter = new PrismaPg({ connectionString });
// const prisma = new PrismaClient({ adapter });

// export async function updateUser( prevState: any,formData: FormData) {
//   await prisma.user.update({
//     where: { id: Number(formData.get("id")) },
//     data: {
//       name: formData.get("name") as string,
//       email: formData.get("email") as string,
//     },
//   });

//   redirect("/dashboard");
// }