import { CheckCircle, DatabaseZap, File } from "lucide-react"
import Image from "next/image"

export const CTA = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 mt-8">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <DatabaseZap className="size-10 my-2 text-rose-400" />
            <h1 className="max-w-xl mb-4 text-3xl font-bold tracking-tight leading-none md:text-4xl dark:text-white">
              Store, query and manage data
            </h1>
            <p className="max-w-xl mb-6 font-light text-gray-600 lg:mb-8 md:text-lg dark:text-gray-400">
              Securely store files with advanced compression, encryption and image transformations.
            </p>

            <div className="flex flex-col gap-y-1.5 justify-center md:justify-start">
              <div className="flex items-center justify-start gap-x-4">
                <CheckCircle className="h-4 w-4 text-emerald-400" />
                <p className="font-light text-gray-600">Never paused</p>
              </div>
              <div className="flex items-center justify-start gap-x-4">
                <CheckCircle className="h-4 w-4 text-emerald-400" />
                <p className="font-light text-gray-600">Fast in-memory caching</p>
              </div>
              <div className="flex items-center justify-start gap-x-4">
                <CheckCircle className="h-4 w-4 text-emerald-400" />
                <p className="font-light text-gray-600">Advanced permission models</p>
              </div>
              <div className="flex items-center justify-start gap-x-4">
                <CheckCircle className="h-4 w-4 text-emerald-400" />
                <p className="font-light text-gray-600">Custom data validation</p>
              </div>
              <div className="flex items-center justify-start gap-x-4">
                <CheckCircle className="h-4 w-4 text-emerald-400" />
                <p className="font-light text-gray-600">Relationships support</p>
              </div>
            </div>
          </div>
          <div className="mt-8 lg:mt-0 lg:col-span-5 lg:flex">
            <Image
              src="/auth-shot.png"
              width={640}
              height={578}
              alt="mockup"
            />
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 mt-8">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <File className="size-10 my-2 text-rose-400" />
            <h1 className="max-w-xl mb-4 text-3xl font-bold tracking-tight leading-none md:text-4xl dark:text-white">
              Upload and manage files
            </h1>
            <p className="max-w-xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg dark:text-gray-400">
              Scalable and robust database backed by your favorite technologies.
            </p>

            <div className="flex flex-col gap-y-1.5 justify-center md:justify-start">
              <div className="flex items-center justify-start gap-x-4">
                <CheckCircle className="h-4 w-4 text-emerald-400" />
                <p className="font-light text-gray-600">File encryption at rest and transit</p>
              </div>
              <div className="flex items-center justify-start gap-x-4">
                <CheckCircle className="h-4 w-4 text-emerald-400" />
                <p className="font-light text-gray-600">
                  Built-in image transformation capabilities
                </p>
              </div>
              <div className="flex items-center justify-start gap-x-4">
                <CheckCircle className="h-4 w-4 text-emerald-400" />
                <p className="font-light text-gray-600">
                  Advanced compression with WebP/Brotli support
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 lg:mt-0 lg:col-span-5 lg:flex">
            <Image
              src="/storage-shot.png"
              width={640}
              height={578}
              alt="mockup"
            />
          </div>
        </div>
      </section>
    </>
  )
}
