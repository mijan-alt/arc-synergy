"use client"
import React from "react";
import { Ship } from "lucide-react";
import Link from "next/link";

const About = () => {
 const Abouts = [
   {
     title: "Marine Services",
     icon: (
       <svg
         width="48"
         height="48"
         viewBox="0 0 48 48"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
       >
         <g clip-path="url(#clip0_160_62)">
           <path
             fill-rule="evenodd"
             clip-rule="evenodd"
             d="M28.4219 35.552C29.4617 35.0322 30.6022 34.7452 31.7641 34.711C32.926 34.6768 34.0815 34.8962 35.1499 35.354L35.5779 35.554L40.8939 38.21C41.3506 38.438 41.7028 38.8319 41.8784 39.3112C42.054 39.7904 42.0398 40.3186 41.8386 40.7877C41.6374 41.2568 41.2645 41.6312 40.7963 41.8342C40.328 42.0373 39.7999 42.0537 39.3199 41.88L39.1059 41.788L33.7879 39.13C33.2892 38.8807 32.7439 38.7384 32.187 38.7122C31.6301 38.686 31.0738 38.7766 30.5539 38.978L30.2099 39.13L27.5779 40.448C26.5378 40.9678 25.3969 41.2546 24.2346 41.2885C23.0723 41.3223 21.9166 41.1024 20.8479 40.644L20.4219 40.448L17.7879 39.13C17.2893 38.8807 16.7439 38.7384 16.187 38.7122C15.6301 38.686 15.0738 38.7766 14.5539 38.978L14.2099 39.13L8.89394 41.79C8.43725 42.021 7.9094 42.068 7.41903 41.9216C6.92867 41.7751 6.5131 41.4463 6.25787 41.0027C6.00264 40.5591 5.92716 40.0346 6.04697 39.537C6.16678 39.0395 6.47277 38.6068 6.90194 38.328L7.10594 38.21L12.4219 35.552C13.4617 35.0322 14.6022 34.7452 15.7641 34.711C16.926 34.6768 18.0815 34.8962 19.1499 35.354L19.5779 35.554L22.2099 36.87C22.7089 37.1196 23.2546 37.2621 23.8119 37.2883C24.3692 37.3144 24.9258 37.2237 25.4459 37.022L25.7879 36.87L28.4219 35.552ZM25.9999 4C26.5304 4 27.0391 4.21071 27.4142 4.58579C27.7892 4.96086 27.9999 5.46957 27.9999 6V8.64L34.6579 9.748C35.5916 9.90419 36.4395 10.3864 37.0511 11.1089C37.6626 11.8314 37.9981 12.7474 37.9979 13.694V20.558L42.1179 21.93C42.4461 22.0395 42.7479 22.2158 43.0044 22.4479C43.2608 22.6801 43.4664 22.9629 43.6079 23.2785C43.7495 23.5941 43.824 23.9357 43.8267 24.2816C43.8295 24.6275 43.7604 24.9702 43.6239 25.288L39.2859 35.408L35.5779 33.552C34.467 32.9965 33.242 32.7073 31.9999 32.7073C30.7579 32.7073 29.5329 32.9965 28.4219 33.552L25.7879 34.87C25.2325 35.1478 24.62 35.2924 23.9989 35.2924C23.3779 35.2924 22.7654 35.1478 22.2099 34.87L19.5779 33.552C18.467 32.9965 17.242 32.7073 15.9999 32.7073C14.7579 32.7073 13.5329 32.9965 12.4219 33.552L9.88194 34.824L4.56594 25.522C4.38244 25.2009 4.27248 24.843 4.244 24.4742C4.21551 24.1055 4.26921 23.735 4.40121 23.3894C4.53322 23.0439 4.74025 22.732 5.00737 22.4762C5.27449 22.2203 5.59506 22.027 5.94594 21.91L9.99994 20.558V13.694C9.99975 12.7474 10.3353 11.8314 10.9468 11.1089C11.5584 10.3864 12.4063 9.90419 13.3399 9.748L19.9999 8.64V6C19.9999 5.46957 20.2107 4.96086 20.5857 4.58579C20.9608 4.21071 21.4695 4 21.9999 4H25.9999ZM23.9999 12.028L13.9999 13.694V19.226L22.7339 16.314C23.5551 16.0403 24.4428 16.0403 25.2639 16.314L33.9999 19.226V13.694L23.9999 12.028Z"
             fill="#A0CA3C"
           />
         </g>
         <defs>
           <clipPath id="clip0_160_62">
             <rect width="48" height="48" fill="white" />
           </clipPath>
         </defs>
       </svg>
     ),
     content:
       "We provide reliable and efficient marine services to ensure smooth operations for onshore and offshore projects, shipping companies, and port facilities. Our experienced team and partnerships enable us to meet the diverse needs of the maritime industry while adhering to international safety and environmental safety standards",
   },
   {
     title: "Oil and Gas Off shore services",
     icon: (
       <svg
         width="43"
         height="39"
         viewBox="0 0 43 39"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
       >
         <path
           d="M39.361 4.6042C38.5116 1.42283 35.2409 -0.462141 32.0595 0.387216L30.9121 0.692686C29.6381 1.03541 28.8856 2.3467 29.2283 3.61328L31.0537 10.423L22.9848 12.5166L22.5154 11.1681C22.1801 10.2144 21.2786 9.57368 20.2654 9.57368C19.2521 9.57368 18.3506 10.2144 18.0153 11.1681L17.002 14.0738L7.15248 16.6219V13.746C7.15248 12.755 6.35528 11.9578 5.36436 11.9578C4.37344 11.9578 3.57624 12.755 3.57624 13.746V33.4153H2.38416C1.06542 33.4153 0 34.4807 0 35.7994C0 37.1182 1.06542 38.1836 2.38416 38.1836H40.5307C41.8495 38.1836 42.9149 37.1182 42.9149 35.7994C42.9149 34.4807 41.8495 33.4153 40.5307 33.4153H30.3012L25.3317 19.2221L20.6975 20.4216L22.7464 26.2628H17.7843L19.7438 20.6749L14.1858 22.1129L10.2295 33.4153H7.15248V21.5541L32.2905 15.0349L34.168 22.0384C34.5107 23.3124 35.8145 24.0649 37.0886 23.7222L38.2434 23.4167C41.4248 22.5673 43.3098 19.2966 42.4604 16.1152L39.361 4.6042ZM15.281 33.4153L16.1154 31.0311H24.4153L25.2497 33.4153H15.281Z"
           fill="#A0CA3C"
         />
       </svg>
     ),
     content:
       "Arc Synergy’s offshore services are designed to enhance efficiency, safety, and productivity in offshore oil and gas operations. We employ highly skilled personnel and adhere to the highest industry standards to help our clients deliver exceptional results.",
   },
   {
     title: "Vehicle leasing",
     icon: (
       <svg
         width="48"
         height="48"
         viewBox="0 0 48 48"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
       >
         <g clip-path="url(#clip0_182_76)">
           <path
             fill-rule="evenodd"
             clip-rule="evenodd"
             d="M31.528 8C32.6421 8.00004 33.7342 8.31027 34.6819 8.89594C35.6297 9.48161 36.3956 10.3196 36.894 11.316L39.666 16.858C40.154 16.658 40.634 16.442 41.106 16.21C41.5807 15.9729 42.1302 15.9341 42.6336 16.1021C43.1369 16.2702 43.5529 16.6313 43.79 17.106C44.0271 17.5807 44.0659 18.1302 43.8979 18.6336C43.7298 19.1369 43.3687 19.5529 42.894 19.79C42.4132 20.004 41.9299 20.212 41.444 20.414L43.366 24.26C43.7832 25.0939 44.0002 26.0136 44 26.946V32C44 32.8442 43.8218 33.6788 43.4772 34.4494C43.1326 35.22 42.6292 35.9092 42 36.472V39C42 39.7956 41.6839 40.5587 41.1213 41.1213C40.5587 41.6839 39.7957 42 39 42C38.2043 42 37.4413 41.6839 36.8787 41.1213C36.3161 40.5587 36 39.7956 36 39V38H12V39C12 39.7956 11.6839 40.5587 11.1213 41.1213C10.5587 41.6839 9.79565 42 9 42C8.20435 42 7.44129 41.6839 6.87868 41.1213C6.31607 40.5587 6 39.7956 6 39V36.472C4.772 35.372 4 33.776 4 32V26.944C4.00037 26.0129 4.21743 25.0947 4.634 24.262L6.54 20.446C6.05733 20.2433 5.58067 20.0253 5.11 19.792C4.63766 19.5518 4.27862 19.1356 4.11027 18.6332C3.94191 18.1308 3.97773 17.5823 4.21 17.106C4.32732 16.8709 4.48982 16.6611 4.68823 16.4888C4.88664 16.3165 5.11706 16.185 5.36632 16.1018C5.61558 16.0186 5.8788 15.9853 6.14093 16.0039C6.40306 16.0224 6.65896 16.0925 6.894 16.21C7.36733 16.4433 7.84733 16.6593 8.334 16.858L11.106 11.318C11.6041 10.3212 12.3699 9.48282 13.3177 8.89679C14.2655 8.31075 15.3577 8.00022 16.472 8H31.528ZM15 26C14.2044 26 13.4413 26.3161 12.8787 26.8787C12.3161 27.4413 12 28.2044 12 29C12 29.7956 12.3161 30.5587 12.8787 31.1213C13.4413 31.6839 14.2044 32 15 32C15.7956 32 16.5587 31.6839 17.1213 31.1213C17.6839 30.5587 18 29.7956 18 29C18 28.2044 17.6839 27.4413 17.1213 26.8787C16.5587 26.3161 15.7956 26 15 26ZM33 26C32.2044 26 31.4413 26.3161 30.8787 26.8787C30.3161 27.4413 30 28.2044 30 29C30 29.7956 30.3161 30.5587 30.8787 31.1213C31.4413 31.6839 32.2044 32 33 32C33.7956 32 34.5587 31.6839 35.1213 31.1213C35.6839 30.5587 36 29.7956 36 29C36 28.2044 35.6839 27.4413 35.1213 26.8787C34.5587 26.3161 33.7956 26 33 26ZM31.528 12H16.472C16.1428 12 15.8187 12.0812 15.5284 12.2364C15.2382 12.3917 14.9907 12.6162 14.808 12.89L14.684 13.106L12.144 18.182C15.24 19.11 19.412 20 24 20C28.284 20 32.202 19.224 35.22 18.366L35.854 18.182L33.316 13.106C33.1688 12.8116 32.9512 12.5581 32.6826 12.368C32.414 12.1779 32.1026 12.0569 31.776 12.016L31.53 12H31.528Z"
             fill="#A0CA3C"
           />
         </g>
         <defs>
           <clipPath id="clip0_182_76">
             <rect width="48" height="48" fill="white" />
           </clipPath>
         </defs>
       </svg>
     ),
     content:
       "We offer customisable lease terms, comprehensive maintenance packages, and fleet management solutions to ensure maximum uptime and operational efficiency for our clients without the associated liabilities of vehicle ownership.",
   },
   {
     title: "Petroleum and Allied Procurement and Supply",
     icon: (
       <svg
         width="44"
         height="32"
         viewBox="0 0 44 32"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
       >
         <path
           d="M38 8H28V20H2V26H4C4 29.4 6.6 32 10 32C13.4 32 16 29.4 16 26H28C28 29.4 30.6 32 34 32C37.4 32 40 29.4 40 26H44V16L38 8ZM10 29C8.4 29 7 27.6 7 26C7 24.4 8.4 23 10 23C11.6 23 13 24.4 13 26C13 27.6 11.6 29 10 29ZM34 29C32.4 29 31 27.6 31 26C31 24.4 32.4 23 34 23C35.6 23 37 24.4 37 26C37 27.6 35.6 29 34 29ZM32 16V11H37L41 16H32ZM26 11C26 14.8 22.8 18 19 18H7C3.2 18 0 14.8 0 11C0 7.2 3.2 4 7 4H8V2H6V0H14V2H12V4H19C22.8 4 26 7.2 26 11Z"
           fill="#A0CA3C"
         />
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
        <h2 className=" text-[#2A2B6A] font-bold text-[2rem] md:text-5xl mb-4">
          We are Partners in Progess
        </h2>
        <p className="text-color mt-[1.25rem] md:text-[1.25rem]">
          <span className="md:block">
            Our commitment to excellence, innovation, and sustainable
          </span>
          <span className="md:block">
            practices positions us as a preferred partner for players in each of
          </span>
          <span className="md:block">the sectors that we operate in.</span>
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mt-8">
          {/* Icon Block */}
          {Abouts.map((about, index) => (
            <div key={index} className="flex flex-col h-full mb-8">
              <div className="flex items-center mb-5">
                <div className="relative flex justify-center items-center size-12 bg-white rounded-xl ">
                  {about.icon}
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-lg md:text-2xl font-bold text-[#2A2B6A]  mb-2">
                  {about.title}
                </h3>
                <p className="text-[#2A2B6A] ">{about.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <Link href={"/about"}>
            <button
              type="button"
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium border border-gray-200 text-black  shadow-sm hover:bg-gray-50 focus:outline-none disabled:opacity-50 disabled:pointer-events-none "
            >
              About us
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
      {/* End Icon Blocks */}
    </>
  );
};

export default About;