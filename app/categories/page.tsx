// app/dashboard/categories/add/page.tsx
'use client';

import Form from 'next/form';
//import { createCategory } from '@/lib/actions';
import  {createCategory}  from '../api/createcategory';

export default function AddCategoryPage() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md border border-slate-200">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Create New Category</h1>
      
      <Form action={createCategory} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Category Name</label>
          <input 
            name="name" 
            type="text" 
            required 
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
            placeholder="e.g., Diamond Rings"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Category Image</label>
          <input 
            name="image" 
            type="file" 
            accept="image/*" 
            required 
            className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200">
          Save Category
        </button>
      </Form>
    </div>
  );
}
