import React from "react";

const Mission = () => {
  return (
    <>
      {/* Icon Blocks */}
      <div className="px-4 py-10 bg-gray-100 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-[912px] mx-auto">
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
