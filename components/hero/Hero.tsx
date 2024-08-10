import React from 'react'
import { MoveRight } from 'lucide-react';

const Hero = () => {
  return (
    <div>
      {/* Slider */}
      <div className="w-full">
        <div
          data-hs-carousel='{
"loadingClasses": "opacity-0"
    }'
          className="relative"
        >
          <div className="hs-carousel relative overflow-hidden w-full h-[30rem] md:h-[calc(100vh-106px)]  bg-gray-100   dark:bg-neutral-800">
            <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
              {/* Item */}
              <div className="hs-carousel-slide w-full">
                <div className="h-[30rem] md:h-[calc(100vh-106px)]  flex flex-col bg-[url('/assets/hero.png')] bg-cover bg-center bg-no-repeat">
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                  <div className="mt-auto w-full ps-5 pb-5 md:ps-10 md:pb-10 relative z-10">
                    <span className="block text-white text-xl md:text-3xl">
                      Powering Progress, Delivering Excellence
                    </span>
                    <span className="block text-white max-w-[768px] ">
                      Arc Synergy Limited is an indigenous energy services
                      company incorporated to deliver excellent procurement and
                      technical support services to the energy industry in
                      Africa.
                    </span>
                    <div className="mt-5">
                      <button
                        type="button"
                        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium border border-[#A0CA3C] bg-[#A0CA3C] text-white  shadow-sm  focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                      >
                        Find out more
                        <svg
                          className="shrink-0 size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Item */}
              {/* Item */}

              {/* End Item */}
            </div>
          </div>
          {/* Arrows */}

          {/* End Arrows */}
        </div>
      </div>
      {/* End Slider */}
    </div>
  );
}

export default Hero