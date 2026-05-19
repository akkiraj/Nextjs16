import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">

      

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-8">
        <div className="flex gap-6 p-4 bg-black text-white">
      <a href="/dashboard">Dashboard</a>
      <Link href="/dashboard/products">Products</Link>
      
      <a href="/dashboard/categories">Categories</a>
      <a href="/dashboard/customers">Customers</a>
      <a href="/dashboard/cart">Cart</a>
      <a href="/dashboard/orders">Orders</a>
      <a href="/dashboard/inventory">Inventory</a>
    </div>
        {children}
      </main>

    </div>
  );
}