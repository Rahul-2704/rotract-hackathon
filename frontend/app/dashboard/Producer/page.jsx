import React from 'react'

function Producre() {
  return (
    <div>
        <section>
  <div class="grid grid-cols-1 lg:grid-cols-2">
    <div class="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div class="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
        <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl">
          Dashboard Production
        </h2>
        
        <form action="/signin"  class="mt-8">
          <div class="space-y-5">
            <div>
              <label htmlFor="batchId" class="text-base font-medium text-gray-900">
                {" "}
                Batch Id{" "}
              </label>
              <div class="mt-2">
                <input
                  class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="number"
                  placeholder="Batch Id"
                  id="batchId"
                />
              </div>
            </div>
            <div>
              <label htmlFor="med_name" class="text-base font-medium text-gray-900">
                {" "}
                Medicine Name{" "}
              </label>
              <div class="mt-2">
                <input
                  class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Medicine Name"
                  id="med_name"
                />
              </div>
            </div>
            <div>
              <div class="flex items-center justify-between">
                <label
                  htmlFor="count"
                  class="text-base font-medium text-gray-900"
                >
                  {" "}
                  Quantity{" "}
                </label>
              </div>
              <div class="mt-2">
                <input
                  class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="number"
                  placeholder="Quantity"
                  id="count"
                />
              </div>
            </div>
            <div>
              <div class="flex items-center justify-between">
                <label
                  htmlFor="count"
                  class="text-base font-medium text-gray-900"
                >
                  {" "}
                  Quantity{" "}
                </label>
              </div>
              <div class="mt-2">
                <input
                  class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="number"
                  placeholder="Quantity"
                  id="count"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                class="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
              >
                Create Batch{" "}
              </button>
            </div>
          </div>
        </form>
        </div>
        </div>
        </div>
</section>

    </div>
  )
}

export default Producre