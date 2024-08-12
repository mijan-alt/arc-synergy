import React from "react";
import { MoveRight } from "lucide-react";

const Hero = () => {
  return (
    <div>
      {/* Slider */}
      <div className="w-full">
        <div className="relative z-10">
          <div className=" ">
            <div className="">
              {/* Item */}
              <div className="w-full">
                <div className="h-[30rem] md:h-[calc(100vh-106px)]  flex flex-col bg-[url('/assets/hero.png')] bg-cover bg-center bg-no-repeat">
                  <div className="absolute inset-0 bg-black opacity-65"></div>
                  <div className="mt-auto  max-w-[85rem] w-full l ps-5 pb-5 md:ps-10 md:pb-10 relative z-10 mx-auto">
                    <h2 className="block text-white text-[2.5rem] md:text-[3.5rem] font-bold mb-6 leading-tight">
                      <span className="block">Powering Progress,</span>
                      <span className="block">Delivering Excellence</span>
                    </h2>

                    <span className="block text-white max-w-[768px] md:text-[1.5rem] ">
                      Arc Synergy Limited is an indigenous energy services
                      company incorporated to deliver excellent procurement and
                      technical support services to the energy industry in
                      Africa.
                    </span>
                    <div className="mt-6">
                      <button
                        type="button"
                        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium border border-[#A0CA3C] bg-[#A0CA3C] text-white  shadow-sm  focus:outline-none disabled:opacity-50 disabled:pointer-events-none "
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
};

export default Hero;
