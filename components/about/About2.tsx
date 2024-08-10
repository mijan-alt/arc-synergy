import React from 'react'

const About2 = () => {
  return (
    <>
      {/* Features */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              {/* Title */}
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-4xl text-color dark:text-neutral-200">
                  Arc Synergy Limited
                </h2>
                <p className="text-color dark:text-neutral-500">
                  About us Arc Synergy Limited Arc Synergy Limited is an
                  indigenous energy services company incorporated to deliver
                  excellent procurement and technical support services to the
                  energy industry in Africa. Our commitment to excellence,
                  innovation, and sustainable practices positions us as a
                  preferred partner for players in each of the sectors that we
                  operate in. We are committed to delivering high-quality,
                  innovative solutions across our range of marine and oil & gas
                  services. Our integrated approach allows us to offer
                  comprehensive support for complex projects, backed by our
                  expertise, advanced technology, and dedication to safety and
                  environmental responsibility. Button Button
                </p>
              </div>
              {/* End Title */}
              {/* List */}

              {/* End List */}
            </div>
          </div>
          <div>
            <img
              className=""
              src="https://images.unsplash.com/photo-1648737963503-1a26da876aca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=900&q=80"
              alt="Features Image"
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