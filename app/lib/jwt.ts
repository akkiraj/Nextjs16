export const runtime = 'nodejs';

import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET!;

// export function signToken(payload: object) {
//   return jwt.sign(payload, SECRET, { expiresIn: "7d" });
// }

export function verifyToken(token: string) {
  return jwt.verify(token, SECRET);
}

export function signToken(payload: any) {
  return jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: "7d",
  });
}