
import React from "react";
import { Ship } from "lucide-react";

const About = () => {
 const Abouts = [
   {
     title: "Marine Services",
     icon: (
       <svg
         className="text-[#A0CA3C] dark:text-[#A0CA3C]"
         width="24"
         height="25"
         viewBox="0 0 24 24"
         xmlns="http://www.w3.org/2000/svg"
         fill="currentColor"
       >
         <path d="M16.997 20c-.899 0-1.288-.311-1.876-.781-.68-.543-1.525-1.219-3.127-1.219-1.601 0-2.446.676-3.125 1.22-.587.469-.975.78-1.874.78-.897 0-1.285-.311-1.872-.78C4.444 18.676 3.601 18 2 18v2c.898 0 1.286.311 1.873.78.679.544 1.523 1.22 3.122 1.22 1.601 0 2.445-.676 3.124-1.219.588-.47.976-.781 1.875-.781.9 0 1.311.328 1.878.781.679.543 1.524 1.219 3.125 1.219s2.446-.676 3.125-1.219C20.689 20.328 21.1 20 22 20v-2c-1.602 0-2.447.676-3.127 1.219-.588.47-.977.781-1.876.781zM6 8.5L4 9l2 8h.995c1.601 0 2.445-.676 3.124-1.219.588-.47.976-.781 1.875-.781.9 0 1.311.328 1.878.781.679.543 1.524 1.219 3.125 1.219H18l.027-.107.313-1.252L20 9l-2-.5V5.001a1 1 0 00-.804-.981L13 3.181V2h-2v1.181l-4.196.839A1 1 0 006 5.001V8.5zm2-2.681l4-.8 4 .8V8l-4-1-4 1V5.819z" />
       </svg>
     ),
     content:
       "We provide reliable and efficient marine services to ensure smooth operations for onshore and offshore projects, shipping companies, and port facilities. Our experienced team and partnerships enable us to meet the diverse needs of the maritime industry while adhering to international safety and environmental safety standards",
   },
   {
     title: "Oil and Gas Off shore services",
     icon: (
       <svg
         className="text-[#A0CA3C] dark:text-[#A0CA3C]"
         width="24"
         height="25"
         viewBox="0 0 24 24"
         xmlns="http://www.w3.org/2000/svg"
         fill="currentColor"
       >
         <path
           d="M7 21l1.634-4.74M18 21l-3.149-7.61M4 14l6.438-2.972M17 8l-3.677 1.697M8.379 17h7.966M3 21h18M4 21V10m9.323-.303L12 6.5l-1.562 4.528m2.885-1.331l-2.885 1.331M15 3.5l4 9 .436-.218a3 3 0 001.4-3.902l-1.56-3.511a3 3 0 00-4.084-1.465L15 3.5z"
           stroke="currentColor"
           strokeWidth={2}
           strokeLinecap="round"
           strokeLinejoin="round"
         />
       </svg>
     ),
     content:
       "Arc Synergy’s offshore services are designed to enhance efficiency, safety, and productivity in offshore oil and gas operations. We employ highly skilled personnel and adhere to the highest industry standards to help our clients deliver exceptional results.",
   },
   {
     title: "Oil and Gas Off shore services",
     icon: (
       <svg
         className="text-[#A0CA3C] dark:text-[#A0CA3C]"
         width="24"
         height="25"
         viewBox="0 0 24 24"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
       >
         <path
           fillRule="evenodd"
           clipRule="evenodd"
           d="M2 14.803v6.447c0 .414.336.75.75.75h1.614a.75.75 0 00.74-.627L5.5 19h13l.395 2.373a.75.75 0 00.74.627h1.615a.75.75 0 00.75-.75v-6.447a5.954 5.954 0 00-1-3.303l-.78-1.17a1.994 1.994 0 01-.178-.33h.994a.75.75 0 00.671-.415l.25-.5A.75.75 0 0021.287 8H19.6l-.31-1.546a2.5 2.5 0 00-1.885-1.944C15.943 4.17 14.141 4 12 4c-2.142 0-3.943.17-5.405.51a2.5 2.5 0 00-1.886 1.944L4.399 8H2.714a.75.75 0 00-.67 1.085l.25.5a.75.75 0 00.67.415h.995a1.999 1.999 0 01-.178.33L3 11.5c-.652.978-1 2.127-1 3.303zm15.961-4.799a4 4 0 00.34.997H5.699c.157-.315.271-.65.34-.997l.632-3.157a.5.5 0 01.377-.39C8.346 6.157 10 6 12 6s3.654.156 4.952.458a.5.5 0 01.378.389l.631 3.157zM5.5 16a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM20 14.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
           fill="currentColor"
         />
       </svg>
     ),
     content:
       "We offer customisable lease terms, comprehensive maintenance packages, and fleet management solutions to ensure maximum uptime and operational efficiency for our clients without the associated liabilities of vehicle ownership.",
   },
   {
     title: "Petroleum and Allied Procurement and Supply",
     icon: (
       <svg
         className="text-[#A0CA3C] dark:text-[#A0CA3C]"
         width="24"
         height="25"
         fill="currentColor"
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 470.389 470.388"
         xmlSpace="preserve"
       >
         <path d="M67.947 149.592H96.062V168.39600000000002H67.947z" />
         <path d="M96.062 121.181H67.947v12.675h28.115v-12.675z" />
         <path d="M252.285 263.483c26.75 0 48.438-31.855 48.438-71.15 0-39.296-21.688-71.151-48.438-71.151h-19.271v-6.9h.612a6.854 6.854 0 100-13.708H184.08a6.854 6.854 0 100 13.708h.612v6.9h-72.896v70.461a7.867 7.867 0 01-7.868 7.868 7.867 7.867 0 01-7.868-7.868v-7.51H67.947v7.51a7.868 7.868 0 11-15.736 0v-70.461h-3.774C21.687 121.182 0 153.037 0 192.333c0 39.295 21.687 71.15 48.437 71.15h203.848zm-46.294-106.082c.662-.711 1.899-.711 2.561 0 1.072 1.15 26.251 28.331 26.251 43.09 0 15.181-12.351 27.531-27.532 27.531s-27.532-12.351-27.532-27.531c0-14.759 25.18-41.94 26.252-43.09z" />
         <path d="M460.389 257.316h-3v-65a9.993 9.993 0 00-2.846-6.984l-32.219-33a9.996 9.996 0 00-7.154-3.016h-85.781c-5.523 0-10 4.479-10 10v122.516h-21l-250.941.104h-3c-5.523 0-10 4.479-10 10v21.381c0 5.522 4.477 10 10 10H69.95c0 25.683 20.818 46.498 46.498 46.498 25.68 0 46.497-20.815 46.497-46.498h.502c0 25.683 20.818 46.498 46.498 46.498 25.679 0 46.497-20.815 46.497-46.498h85.449c0 25.683 20.816 46.498 46.498 46.498 25.68 0 46.498-20.815 46.498-46.498H460.389c5.521 0 10-4.478 10-10v-46c0-5.523-4.479-10.001-10-10.001zm-343.941 82.498c-9.097 0-16.498-7.4-16.498-16.498 0-9.096 7.401-16.496 16.498-16.496 9.097 0 16.497 7.4 16.497 16.496 0 9.098-7.4 16.498-16.497 16.498zm93.497 0c-9.097 0-16.498-7.4-16.498-16.498 0-9.096 7.401-16.496 16.498-16.496s16.497 7.4 16.497 16.496c.001 9.098-7.4 16.498-16.497 16.498zm178.444 0c-9.098 0-16.498-7.4-16.498-16.498 0-9.096 7.4-16.496 16.498-16.496 9.096 0 16.498 7.4 16.498 16.496 0 9.098-7.403 16.498-16.498 16.498zm38.334-111.85a4.357 4.357 0 01-4.357 4.355H354.41a4.357 4.357 0 01-4.355-4.355v-45.361a4.355 4.355 0 014.355-4.355h49.971c1.174 0 2.297.473 3.117 1.313l17.984 18.422a4.36 4.36 0 011.238 3.043v26.938h.003z" />
       </svg>
     ),
     content:
       "Our procurement and supply services for petroleum and allied products ensure a steady and reliable supply chain for our clients. We leverage our industry network and expertise to provide cost-effective procurement solutions while ensuring product quality and timely delivery.",
   },
 ];

  return (
    <>
      {/* Icon Blocks */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <h2 className="text-sm text-[#2A2B6A] font-bold lg:text-2xl dark:text-white mb-4">
          We are Partners in Progess
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Icon Block */}
          {Abouts.map((about, index) => (
            <div key={index} className="flex flex-col h-full">
              <div className="flex items-center mb-5">
                <div className="relative flex justify-center items-center size-12 bg-white rounded-xl  dark:bg-neutral-900">
                  {about.icon}
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-[#2A2B6A] dark:text-white mb-2">
                  {about.title}
                </h3>
                <p className="text-[#2A2B6A] dark:text-neutral-400">
                  {about.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* End Icon Blocks */}
    </>
  );
};

export default About;