import React from "react";

const Vission = () => {
  return (
    <div className="flex flex-col sm:flex-row  mb-4">
      <div className="bg-[#ECF4D8] flex flex-row-reverse basis-1/2 py-4 ">
        <div className="max-w-[42.5rem] px-4 ">
          <h3 className="text-[1.125rem] font-medium text-start text-color ">
            Our Vision
          </h3>
          <p className="mt-1 font-bold text-color md:text-2xl ">
            To deliver superior services and products for our partners across
            our diverse business portfolio, driving economic growth and
            development while maintaining the highest standards of quality,
            safety, and environmental responsibility.
          </p>
        </div>
      </div>
      <div className="bg-[#DFEDBE] basis-1/2 py-4">
        <div className=" max-w-[42.5rem] ml-4">
          <h3 className="text-[1.125rem] font-medium text-start text-color ">
            Our mission
          </h3>
          <p className="mt-1 font-bold text-color md:text-2xl">
            To become the preferred partner in our operational sectors,
            recognised for our expertise, reliability, and innovative solutions
            that contribute to the progress of industries and communities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vission
