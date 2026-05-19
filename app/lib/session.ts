// lib/session.ts
import { cookies } from "next/headers";

export async function createSession(userId: number) {
  (await cookies()).set("session", String(userId), {
    httpOnly: true,
    path: "/",
  });
}

export async function getSession() {
  return (await cookies()).get("session")?.value;
}

export async function deleteSession() {
  (await cookies()).delete("session");
}