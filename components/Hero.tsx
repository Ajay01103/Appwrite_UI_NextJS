import Image from "next/image"

export const Hero = () => {
  return (
    <>
      <div
        className="absolute top-[100px] left-[8%] z-10"
        style={{
          transform: "translateX(-50%)",
          pointerEvents: "none",
        }}
      >
        <Image
          style={{
            //   width: "1466px",
            //   height: "804px",
            transform: "rotate(150.348deg)",
            opacity: 0.65,
            filter: "blur(127.5px)",
            maxBlockSize: "unset",
            maxInlineSize: "unset",
          }}
          src="/top-page-dark.png"
          width={1466}
          height={804}
          alt="1"
        />
      </div>
      <div
        className="hidden md:block absolute top-[5px] left-[8%]"
        style={{
          transform: "translateY(46%)",
          pointerEvents: "none",
        }}
      >
        <Image
          style={{
            //   width: "1466px",
            //   height: "804px",
            transform: "rotate(150deg)",
            opacity: 0.65,
            filter: "blur(230.5px)",
            maxBlockSize: "unset",
            maxInlineSize: "unset",
          }}
          src="/top-page-light.svg"
          width={1466}
          height={804}
          alt="2"
        />
      </div>
      <div className="relative overflow-hidden before:size-full">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          <div className="flex justify-center">
            <a
              className="inline-flex items-center gap-x-2 bg-white border border-red-300 text-sm text-gray-800 p-1 ps-3 rounded-full transition hover:border-red-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              PRO release - Join to waitlist
              <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600 dark:bg-gray-700 dark:text-gray-400">
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </a>
          </div>

          <div className="mt-16 grid gri-cols-1 md:grid-cols-2 gap-16 max-w-6xl text-center md:text-start mx-auto">
            <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
              Build Like a Team
              <span className="bg-clip-text text-[#fd356e]"> of Hundred</span>
            </h1>

            <div className="max-w-4xl mx-auto ml-8">
              <p className="text-lg text-gray-700 dark:text-gray-400">
                Appwrite's open-source platform lets you add Auth, DBs, Functions and Storage to
                your product and build any application at any scale, own your data, and use your
                preferred coding languages and tools.
              </p>
            </div>
          </div>

          <div className="mt-8 gap-4 flex justify-center">
            <a
              className="inline-flex justify-center items-center gap-x-3 text-center bg-[#fd356e] border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800"
              href="#"
            >
              Get started
              <svg
                className="flex-shrink-0 size-4"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </a>
            <button
              type="button"
              className="relative group p-2 ps-3 inline-flex items-center gap-x-2 text-sm font-mono rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              $ npm i @appwrite/core
              <span className="flex justify-center items-center bg-gray-200 rounded-md size-7 dark:bg-gray-700 dark:text-gray-400">
                <svg
                  className="flex-shrink-0 size-4 group-hover:rotate-6 transition"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    width="8"
                    height="4"
                    x="8"
                    y="2"
                    rx="1"
                    ry="1"
                  />
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                </svg>
              </span>
            </button>
          </div>

          <div className="md:pb-32 mt-8 items-center justify-center flex">
            <div className="mt-14 z-30">
              <Image
                src="https://appwrite.io/images/pages/homepage/dashboard.png"
                className="w-full shadow-lg rounded-lg"
                width={1866}
                height={1073}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
