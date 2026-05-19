'use server'
import 'dotenv/config'
import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { NextResponse } from 'next/server';
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";



import bcrypt from 'bcryptjs'


const connectionString = process.env.DATABASE_URL;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

// Example query to create a user based on the example schema

export async function createUser(prevState: any,formData: FormData) {

  try{
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const requestedRole = formData.get('role') as string; 

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await prisma.registerUser.create({
    data: { name, email,role: requestedRole === 'MANAGER' ? 'MANAGER' : 'USER',password: hashedPassword },

  })
      revalidatePath("/login"); 
      
  console.log(user)
  }catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error creating user' }, { status: 500 });
  }
  redirect('/login');
}