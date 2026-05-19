// // app/dashboard/edit/[id]/page.tsx
// import { useActionState } from "react";
// import { updateuser } from "../api/updateuser";

// export default async function EditPage({ params }: any) {
//   const user = await prisma.user.findUnique({
//     where: { id: Number(params.id) },
//   });

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <form action={updateUser} className="bg-white p-6 rounded-xl shadow w-96">
//         <h2 className="text-xl font-bold mb-4">Edit Employee</h2>

//         <input type="hidden" name="id" value={user?.id} />

//         <input
//           name="name"
//           defaultValue={user?.name}
//           className="w-full mb-3 p-2 border rounded"
//         />

//         <input
//           name="email"
//           defaultValue={user?.email}
//           className="w-full mb-3 p-2 border rounded"
//         />

//         <button className="w-full bg-green-600 text-white p-2 rounded">
//           Update
//         </button>
//       </form>
//     </div>
//   );
// }