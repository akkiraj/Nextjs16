export default function ShopPage()
 {
  return (
    <div>
      <aside className="w-64 bg-emerald-900 text-white shrink-0">
    <div className="p-6 text-2xl font-serif font-bold border-b border-emerald-800 italic">Luxe Jewels</div>
    <nav className="mt-6">
      <a href="#" className="flex items-center py-3 px-6 bg-emerald-800 border-r-4 border-gold-500">
        <span className="mx-3">Dashboard</span>
      </a>
      <a href="#" className="flex items-center py-3 px-6 text-emerald-100 hover:bg-emerald-800 transition">
        <span className="mx-3">Inventory</span>
      </a>
      <a href="#" className="flex items-center py-3 px-6 text-emerald-100 hover:bg-emerald-800 transition">
        <span className="mx-3">Custom Orders</span>
      </a>
      <a href="#" className="flex items-center py-3 px-6 text-emerald-100 hover:bg-emerald-800 transition">
        <span className="mx-3">Analytics</span>
      </a>
    </nav>
  </aside>
  <header className="flex justify-between items-center mb-8">
      <h1 className="text-2xl font-semibold text-slate-800">Store Overview</h1>
      <div className="flex items-center gap-4">
        <button className="bg-amber-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-amber-600">Add New Piece</button>
        <div className="w-10 h-10 rounded-full bg-slate-300 border-2 border-amber-500"></div>
      </div>
    </header>

    {/* Stats Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <p className="text-sm text-slate-500 mb-1">Total Revenue</p>
        <p className="text-3xl font-bold text-slate-800">$124,500.00</p>
        <span className="text-emerald-500 text-sm font-medium">↑ 12% vs last month</span>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <p className="text-sm text-slate-500 mb-1">Active Repairs</p>
        <p className="text-3xl font-bold text-slate-800">18 Items</p>
        <span className="text-amber-600 text-sm font-medium">5 Urgent deliveries</span>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <p className="text-sm text-slate-500 mb-1">Stock Value</p>
        <p className="text-3xl font-bold text-slate-800">$1.2M</p>
        <span className="text-slate-400 text-sm font-medium">Diamonds: 45%</span>
      </div>
    </div>

    {/* Recent Sales Table */}
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-6 border-b border-slate-100">
        <h2 className="font-bold text-slate-800">Recent Jewelry Sales</h2>
      </div>
      <table className="w-full text-left">
        <thead className="bg-slate-50 text-slate-500 uppercase text-xs">
          <tr>
            <th className="px-6 py-4">Item</th>
            <th className="px-6 py-4">Category</th>
            <th className="px-6 py-4">Customer</th>
            <th className="px-6 py-4">Price</th>
            <th className="px-6 py-4">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          <tr>
            <td className="px-6 py-4 flex items-center gap-3 font-medium text-slate-700">
              <div className="w-8 h-8 bg-slate-200 rounded"></div> Diamond Studs
            </td>
            <td className="px-6 py-4 text-slate-600">Earrings</td>
            <td className="px-6 py-4 text-slate-600">Sarah Jenkins</td>
            <td className="px-6 py-4 font-semibold text-slate-800">$4,200</td>
            <td className="px-6 py-4"><span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full">Shipped</span></td>
          </tr>
          {/* Repeat rows as needed */}
        </tbody>
      </table>
    </div>
    </div>
    
    
  );
}



