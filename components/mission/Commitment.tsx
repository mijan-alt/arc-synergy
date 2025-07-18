import React from "react";

const Commitment = () => {
  return (
    <>
      {/* Icon Blocks */}
      <div className="relative px-4 py-10 bg-gray-100  bg-[url('/assets/rig.jpeg')] bg-cover bg-center bg-no-repeat sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="absolute inset-0 bg-[#2A2B6A] opacity-90"></div>
        <div className="max-w-3xl mx-auto">
          {/* Grid */}
          <div className="grid gap-12">
            <div className="relative z-10">
              <h2 className="text-white font-bold text-[2.5rem] md:text-5xl text-center ">
                We are committed to Excellence
              </h2>
              <p className="mt-3 text-white text-center md:text-[1.125rem] ">
                We are committed to delivering high-quality, innovative
                solutions across our range of marine and oil & gas services. Our
                integrated approach allows us to offer comprehensive support for
                complex projects, backed by our expertise, advanced technology,
                and dedication to safety and environmental responsibility.
              </p>
            </div>
            <button className="px-6 py-2 bg-[#A0CA3C] rounded-md relative z-10 w-fit m-auto text-white font-bold">
              Download our profile
            </button>
          </div>
          {/* End Grid */}
        </div>
      </div>
      {/* End Icon Blocks */}
    </>
  );
};

export default Commitment;
