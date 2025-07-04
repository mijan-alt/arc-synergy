import React from 'react'
import Image from 'next/image';
const About2 = () => {
  return (
    <>
      {/* Features */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-16 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
          <div className="mb-9 sm:mt-10 lg:mt-0">
            <div className="">
              {/* Title */}
              <div className="">
                <h3 className="text-color font-semibold text-[1rem]">
                  About us
                </h3>
                <h2 className="font-extrabold text-4xl md:text-5xl text-color mt-9 ">
                  Arc Synergy Limited
                </h2>
                <p className="text-black md:text-[1.125rem] mt-9">
                  <span className="block ">
                    Arc Synergy Limited is an indigenous energy services company
                    incorporated to deliver excellent procurement and technical
                    support services to the energy industry in Africa
                  </span>

                  <span className='block mt-4'>
                    Our commitment to excellence, innovation, and sustainable
                    practices positions us as a preferred partner for players in
                    each of the sectors that we operate in.
                  </span>
            
                  <span className='block mt-4'>
                    We are committed to delivering high-quality, innovative
                    solutions across our range of marine and oil & gas services.
                    Our integrated approach allows us to offer comprehensive
                    support for complex projects, backed by our expertise,
                    advanced technology, and dedication to safety and
                    environmental responsibility.
                  </span>
                </p>
              </div>
              {/* End Title */}
              {/* List */}

              {/* End List */}
            </div>
          </div>
          <div>
            <Image
              className=""
              src={"/assets/audit.jpg"}
              alt="Features Image"
              width={500}
              height={500}
            />
          </div>
          {/* End Col */}

          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Features */}
    </>
  );
}

export default About2