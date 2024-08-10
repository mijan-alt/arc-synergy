import React from 'react'

const VisionMission = () => {
     const values = [
       {
         color: "",
         title: "Our Vision",
         content:
           "To deliver superior services and products for our partners across our diverse business portfolio, driving economic growth and development while maintaining the highest standards of quality, safety, and environmental responsibility.",
       },
       {
         color: "#A0CA3C",
         title: "Our mission",
         content:
           "To become the preferred partner in our operational sectors, recognised for our expertise, reliability, and innovative solutions that contribute to the progress of industries and communities.",
       },
     ];
  return (
    <>
      {/* Icon Blocks */}
      <div className="py-10 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 items-center  ">
          {/* Icon Block */}

          <div className={`bg-[#c8e38a]`}>
            <div className="mt-5">
              <h3 className="text-sm text-start  text-color dark:text-white">
                Our Vision
              </h3>
              <p className="mt-1 font-bold text-color dark:text-neutral-400">
                To deliver superior services and products for our partners
                across our diverse business portfolio, driving economic growth
                and development while maintaining the highest standards of
                quality, safety, and environmental responsibility.
              </p>
            </div>
          </div>

          <div className={`bg-[#d0f47b]`}>
            <div className="mt-5">
              <h3 className="text-sm text-start  text-color dark:text-white">
                Our mission
              </h3>
              <p className="mt-1 font-bold text-color dark:text-neutral-400">
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
    </>
  );
}

export default VisionMission