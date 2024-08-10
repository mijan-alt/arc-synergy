import React from "react";

const businessDivisions = [
  {
    title: "Marine Services",
    content:
      "We provide reliable and efficient marine services to ensure smooth operations for onshore and offshore projects, shipping companies, and port facilities. Our experienced team and partnerships enable us to meet the diverse needs of the maritime industry while adhering to international safety and environmental standards.",
    image:
      "https://images.unsplash.com/photo-1574950578143-858c6fc58922?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
  },
  {
    title: "Oil and Gas Offshore Services",
    content:
      "Arc Synergy’s offshore services are designed to enhance efficiency, safety, and productivity in offshore oil and gas operations. We employ highly skilled personnel and adhere to the highest industry standards to help our clients deliver exceptional results.",
    image:
      "https://images.unsplash.com/photo-1574950578143-858c6fc58922?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
  },
  {
    title: "Vehicle Leasing",
    content:
      "We offer customisable lease terms, comprehensive maintenance packages, and fleet management solutions to ensure maximum uptime and operational efficiency for our clients without the associated liabilities of vehicle ownership.",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Petroleum and Allied Procurement and Supply",
    content:
      "Arc Synergy Limited’s procurement and supply services for petroleum and allied products ensure a steady and reliable supply chain for our clients.We leverage our industry network and expertise to provide cost-effective procurement solutions while ensuring product quality and timely delivery.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
];

const BusinessDivision = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Title */}
      <div className="max-w-2xl mb-10">
        <h2 className="text-2xl font-bold text-color md:text-4xl md:leading-tight dark:text-white">
          Partners for Progress
        </h2>
        <p className="mt-1 text-color dark:text-neutral-400">
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
            <img
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              src={division.image}
              alt={division.title}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:bg-opacity-75"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-white">
              <h2 className="text-xl font-bold mb-2">{division.title}</h2>
              <p className="text-sm overflow-y-auto max-h-[calc(100%-2rem)] text-center">
                {division.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessDivision;
