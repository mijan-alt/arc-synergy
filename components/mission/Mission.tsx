import React from "react";
import Image from "next/image";

const Mission = () => {
  return (
    <>
      {/* Icon Blocks */}
      <div
        id="mission"
        className="px-4 py-10 bg-gray-100 sm:px-6 lg:px-8 lg:py-14 mx-auto relative"
      >
        <div className="absolute sm:top-0 right-0 bottom-0 ">
          <img src={"/assets/pattern.png"} alt="pattern" />
        </div>
        <div className="max-w-[912px] mx-auto relative z-10">
          {/* Grid */}
          <div className="grid gap-12 ">
            <div>
              <h2 className="text-[1rem] text-[#2A2B6A] font-bold  text-center ">
                Our Mission
              </h2>
              <p className="mt-3 text-[#2A2B6A] text-center font-bold text-2xl md:text-[2.5rem] md:leading-tight">
                To deliver superior services and products for our partners
                across our diverse business portfolio, driving economic growth
                and development while maintaining the highest standards of
                quality, safety, and environmental responsibility.
              </p>
            </div>
          </div>
          {/* End Grid */}
        </div>
      </div>
      {/* End Icon Blocks */}
    </>
  );
};

export default Mission;
