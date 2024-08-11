import React from "react";

const VisionMission = () => {
  return (
    <div className="overflow-hidden">
      {/* Icon Blocks */}
      <div className="py-10 lg:py-14 px-4 sm:px-6 lg:px-8">
        {" "}
        {/* Added padding here */}
        <div className="grid sm:grid-cols-2 items-center -mx-4 sm:-mx-6 lg:-mx-8">
          {" "}
          {/* Negative margin here */}
          {/* Icon Block */}
          <div className="bg-[#ECF4D8] px-4 sm:px-6 lg:px-8">
            {" "}
            {/* Padding for content */}
            <div className="py-4 sm:py-6 lg:py-8 max-w-[36rem]">
              <h3 className="text-[1.125rem] font-medium text-start text-color ">Our Vision</h3>
              <p className="mt-1 font-bold text-color md:text-2xl">
                To deliver superior services and products for our partners
                across our diverse business portfolio, driving economic growth
                and development while maintaining the highest standards of
                quality, safety, and environmental responsibility.
              </p>
            </div>
          </div>
          <div className="bg-[#DFEDBE] px-4 sm:px-6 lg:px-8">
            {" "}
            {/* Padding for content */}
            <div className="py-4 sm:py-6 lg:py-8 max-w-[36rem]">
              <h3 className="text-[1.125rem] font-medium text-start text-color ">Our mission</h3>
              <p className="mt-1 font-bold text-color md:text-2xl ">
                To become the preferred partner in our operational sectors,
                recognised for our expertise, reliability, and innovative
                solutions that contribute to the progress of industries and
                communities.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
        </div>
      </div>
      {/* End Icon Blocks */}
    </div>
  );
};

export default VisionMission;
