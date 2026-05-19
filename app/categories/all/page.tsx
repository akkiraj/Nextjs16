// app/dashboard/categories/page.tsx
import Image from 'next/image';
//import { prisma } from '@/lib/prisma';
import  prisma  from '../../lib/prisma';

export default async function CategoryDashboard() {
  const categories = await prisma.category.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-extrabold text-slate-900">Categories</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div key={cat.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
            <div className="aspect-square relative overflow-hidden">
              <Image 
                src={cat.imageUrl || '/placeholder.png'} 
                alt={cat.name} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold text-slate-800">{cat.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
