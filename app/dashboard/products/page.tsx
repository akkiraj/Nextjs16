export default function ProductsPage () {
  return (
    <div className="bg-white">
  <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
      
      <div className="flex flex-col-reverse">
        <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
          <div className="grid grid-cols-4 gap-6">
            <button className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4">
              <span className="sr-only">View Image 1</span>
              <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=200" alt="" className="h-full w-full object-cover object-center rounded-md"></img>
            </button>
            </div>
        </div>

        <div className="aspect-h-1 aspect-w-1 w-full">
          <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000" alt="Product Main Image" className="h-full w-full object-cover object-center sm:rounded-lg shadow-sm"></img>
        </div>
      </div>

      <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Premium Smart Watch</h1>

        <div className="mt-3">
          <h2 className="sr-only">Product information</h2>
          <p className="text-3xl tracking-tight text-gray-900">$299.00</p>
        </div>

        <div className="mt-3">
          <div className="flex items-center">
            <div className="flex items-center text-yellow-400">
              <svg className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <p className="ml-3 text-sm text-gray-500">120 reviews</p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="sr-only">Description</h3>
          <p className="text-base text-gray-700">The latest generation of smart wearables, combining high-performance health tracking with a sleek, minimalist aesthetic.</p>
        </div>

        <form className="mt-6">
          <div>
            <h3 className="text-sm font-medium text-gray-600">Color</h3>
            <div className="mt-2 flex items-center space-x-3">
              <button type="button" className="h-8 w-8 rounded-full border border-black border-opacity-10 bg-gray-900 focus:outline-none ring-2 ring-indigo-500 ring-offset-1"></button>
              <button type="button" className="h-8 w-8 rounded-full border border-black border-opacity-10 bg-white focus:outline-none"></button>
            </div>
          </div>

          <div className="mt-10 flex">
            <button type="submit" className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-full">Add to bag</button>
            <button type="button" className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
              {/* <svg className="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg> */}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
  );
};
