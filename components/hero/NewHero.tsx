import React from 'react'

const NewHero = () => {
  return (
    <div className="hs-carousel-slide w-full">
      <div className="h-[30rem] md:h-[calc(100vh-106px)]  flex flex-col bg-[url('/assets/hero.png')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="mt-auto w-full ps-5 pb-5 md:ps-10 md:pb-10 relative z-10">
          <span className="block text-white text-xl md:text-3xl">
            Powering Progress, Delivering Excellence
          </span>
          <span className="block text-white max-w-[768px] ">
            Arc Synergy Limited is an indigenous energy services company
            incorporated to deliver excellent procurement and technical support
            services to the energy industry in Africa.
          </span>
          <div className="mt-5">
            <a
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
              href="#"
            >
              Find out more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewHero