// lib/actions.ts
'use server';

import  prisma  from '../lib/prisma';
import { redirect } from 'next/navigation';
import { refresh } from 'next/cache';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function createCategory(formData: FormData) {
  const name = formData.get('name') as string;
  const image = formData.get('image') as File;

  // 1. Handle File Upload (Local storage example)
  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const filename = `${Date.now()}-${image.name}`;
  const uploadPath = path.join(process.cwd(), 'public/uploads', filename);
  await writeFile(uploadPath, buffer);

  // 2. Insert into DB using Prisma 7
  await prisma.category.create({
    data: {
      name,
      imageUrl: `/uploads/${filename}`,
    },
  });

  refresh(); // Next.js 16 cache refresh
  redirect('categories/all'); // Redirect to categories list after creation
}
