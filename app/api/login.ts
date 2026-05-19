// app/login/actions.ts
"use server";

import prisma from "../lib/prisma";
import bcrypt from 'bcryptjs'
import { redirect } from "next/navigation";
import { createSession } from "../lib/session";
import { revalidatePath } from "next/cache";
import { signToken } from "../lib/jwt";

import { NextResponse } from "next/server";

export async function loginUser(prevState: any,formData: FormData) {
  let isSuccess = false;

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;


  const user = await prisma.registerUser.findUnique({
    where: { email },
  });

   // 2. Check if user exists
  if (!user) {
    return { message: "Invalid credentials" };
  }

  // 3. Compare the plain-text password with the hashed password in DB
  //bcrypt.compare(plain_password, hashed_password)
  const isMatch = await bcrypt.compare(password, user.password);
  console.log("Password match:", isMatch);

  if (!isMatch) {
    return { message: "Invalid credentials" };
  }
  isSuccess = true;
  if (isSuccess) {
    redirect("/dashboard"); // This must be called outside a try/catch
  }

   // Create JWT
 // const token = signToken({ userId: user.id });

  // const res = NextResponse.json({ message: "Login successful" });
  //const res = "";

  // res.cookies.set("token", token, {
  //   httpOnly: true,
  //   secure: true,
  //   path: "/",
  //   sameSite: "strict",
  // });

  // return res;
}