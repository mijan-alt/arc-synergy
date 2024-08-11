import React from "react";
import { MoveRight } from "lucide-react";

const AboutHero = () => {
  return (
    <div>
      {/* Slider */}
      <div className="w-full">
        <div
          data-hs-carousel='{
"loadingClasses": "opacity-0"
    }'
          className="relative"
        >
          <div className="hs-carousel relative overflow-hidden w-full h-[30rem] md:h-[calc(100vh-106px)]  bg-gray-100  ">
            <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
              {/* Item */}
              <div className="hs-carousel-slide w-full">
                <div className="h-[30rem] md:h-[calc(100vh-106px)]  flex flex-col bg-[url('/assets/hero.png')] bg-cover bg-center bg-no-repeat">
                  <div className="absolute inset-0 bg-black opacity-65"></div>
                  <div className="mt-auto w-full ps-5 pb-5 md:ps-10 md:pb-10 relative z-10">
                    <span className="block text-white  text-[2.5rem]  md:text-[3.5rem] font-bold mb-6">
                      Delivering Excellence
                    </span>
                    <span className="block text-white max-w-[768px] md:text-[1.5rem] ">
                      Our commitment to excellence, innovation, and sustainable
                      practices positions us as a preferred partner for players
                      in each of the sectors that we operate in.
                    </span>
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

export default AboutHero;
