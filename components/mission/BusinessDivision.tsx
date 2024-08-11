import React from "react";
import Link from "next/link";

const businessDivisions = [
  {
    title: "Marine Services",
    content:
      "We provide reliable and efficient marine services to ensure smooth operations for onshore and offshore projects, shipping companies, and port facilities. Our experienced team and partnerships enable us to meet the diverse needs of the maritime industry while adhering to international safety and environmental standards.",
    image: "/assets/marine-services.jpg",
  },
  {
    title: "Oil and Gas Offshore Services",
    content:
      "Arc Synergy's offshore services are designed to enhance efficiency, safety, and productivity in offshore oil and gas operations. We employ highly skilled personnel and adhere to the highest industry standards to help our clients deliver exceptional results.",
    backgroundColor: "#2A2B6A", // Deep blue color
  },
  {
    title: "Vehicle Leasing",
    content:
      "We offer customisable lease terms, comprehensive maintenance packages, and fleet management solutions to ensure maximum uptime and operational efficiency for our clients without the associated liabilities of vehicle ownership.",
    image: "/assets/mybenz.jpeg",
  },
  {
    title: "Petroleum and Allied Procurement and Supply",
    content:
      "Arc Synergy Limited's procurement and supply services for petroleum and allied products ensure a steady and reliable supply chain for our clients. We leverage our industry network and expertise to provide cost-effective procurement solutions while ensuring product quality and timely delivery.",
    backgroundColor: "#ECF4D8", // Amber color
  },
];

const BusinessDivision = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Title */}
      <div className="max-w-2xl mb-10">
        <h2 className="text-4xl mb-3 font-bold text-color md:text-5xl md:leading-tight ">
          Partners for Progress
        </h2>
        <p className="mt-1 text-black  md:text-[1.125rem]">
          Our four business divisions come together to ensure that the partners
          we work for deliver products that power the nation and deliver
          prosperity to the
        </p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {businessDivisions.map((division, index) => (
          <div
            key={index}
            className="aspect-square relative group overflow-hidden"
          >
            {division.image ? (
              <>
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  src={division.image}
                  alt={division.title}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:bg-opacity-75"></div>
              </>
            ) : (
              <div
                className="absolute inset-0 w-full h-full transition-opacity duration-300 group-hover:opacity-80"
                style={{ backgroundColor: division.backgroundColor }}
              ></div>
            )}
            <div
              className={`absolute inset-0 flex flex-col justify-center items-center p-4  ${
                division.title === "Petroleum and Allied Procurement and Supply"
                  ? "text-black"
                  : "text-white"
              }`}
            >
              <h2 className="text-xl font-bold mb-2 text-center">
                {division.title}
              </h2>
              <p className="text-sm overflow-y-auto max-h-[calc(100%-2rem)] text-center">
                {division.content}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-row items-center justify-between md:space-x-2">
        <Link href={'/contact'}>
          <button
            type="button"
            className="py-3 px-4 inline-flex items-center gap-x-2  border border-black bg-white shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
          >
            Contact us
          </button>
        </Link>

        <span className="md:self-start">Download our profile</span>
      </div>
    </div>
  );
};

export default BusinessDivision;
