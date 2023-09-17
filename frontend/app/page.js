
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
     <div>
      <section class="mx-auto max-w-7xl bg-gray-50 px-2 py-10 md:px-0">
    <div>
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
          Blockchain's Role in Pharmaceutical Supply Chain
        </h2>
        <p class="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
        This initiative offers educational materials to highlight the advantages of blockchain technology and managing pharmaceutical supply chains.
        </p>
      </div>
      <div class="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
        <div class="cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200">
          <button
            type="button"
            class="flex w-full items-center justify-between px-4 py-5 sm:p-6"
          >
            <Link href='https://www.emerald.com/insight/content/doi/10.1108/MSCRA-10-2022-0023/full/html'>
            <span class="flex text-lg font-semibold text-black">
              How do I get started?
            </span>
            </Link>
          </button>
          <div class="px-4 pb-5 sm:px-6 sm:pb-6">
            <p class="text-gray-500">
            To get started, explore our blockchain educational resources for pharmaceutical supply chain benefits.
            You can access these valuable resources on our website to kickstart your journey into blockchain in pharmaceutical supply chain management.
            </p>
          </div>
        </div>
        <div class="cursor-pointer rounded-md border border-gray-400 transition-all duration-200">
          <button
            type="button"
            class="flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center"
          >

            <Link href='https://youtu.be/qP37WNQo_hE?si=wHH5UM5vxXerx8i5'>
            <span class="flex text-start text-lg font-semibold text-black">
              Access our Blockchain Webinar Series
            </span>
            </Link>
            
          </button>
        </div>
        <div class="cursor-pointer rounded-md border border-gray-400 transition-all duration-200">
          <button
            type="button"
            class="flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center"
          >
            <Link href='https://www.blockchain-council.org/blockchain/an-ultimate-guide-to-basic-blockchain-technology/'>
            <span class="flex text-start text-lg font-semibold text-black">
              Step-by-Step Beginners Guide
            </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  </section>
     </div>
  )
}
