import React from 'react'

const Values = () => {

    const values = [
      {
        title: "Excellent Service",
        content:
          "Excellent service is the cornerstone of our operations. For every partner we support, we strive to exceed expectations in every project, delivering high-quality results that stand the test of time. Our commitment to excellence permeates every level of our organisation, from leadership to frontline workers.  Our excellent service is not just about meeting standards; it's about setting new benchmarks in the industry and consistently surpassing them.",
      },
      {
        title: "Innovation and Adaptability",
        content:
          "We embrace change and continuously seek new ways to improve our processes, services, and products. Our culture encourages creative thinking and problem-solving at all levels.  Our adaptability allows us to quickly respond to market changes and client needs, ensuring we remain competitive and relevant.By continuously evolving and adapting, we not only meet current industry demands but anticipate and shape future trends.",
      },
      {
        title: "Integrity and Transparency",
        content:
          "We conduct all our operations with honesty, fairness, and respect for all stakeholders. Transparency is evident in our clear communication, both internally and with clients, partners, and the public. We believe in building trust through consistent ethical behaviour and open dialogue. By upholding these values, we create lasting relationships with our clients, employees, and communities, ensuring sustainable long-term success for our company.",
      },
      {
        title: "Environmental Stewardship",
        content:
          "We recognise our responsibility to protect and preserve the environment for future generations. This commitment drives us to continuously seek eco-friendly solutions and technologies in our projects. We implement rigorous environmental management systems, minimising our carbon footprint and reducing waste. By prioritising environmental stewardship, we not only comply with regulations but strive to set new standards for environmental responsibility in our industries and in support of partner efforts.",
      },
      {
        title: "Safety Leadership",
        content:
          "We believe that every employee, contractor, and visitor has the right to a safe working environment. Our commitment to safety goes beyond mere compliance with regulations; we strive to create a culture where safety is everyone's responsibility. We continuously monitor and improve our safety performance, learning from incidents and near-misses and by prioritising safety leadership, we protect our most valuable asset – our people – while ensuring operational excellence.",
      },
      {
        title: "Customer Satisfaction",
        content:
          "Ultimately we are in business to provide customer satisfaction. We are dedicated to understanding and meeting the unique needs of each client, actively listening, communicating clearly, and providing tailored solutions. We strive to build long-term relationships based on trust and mutual success with a team that is empowered to go above and beyond to ensure client expectations are not just met, but exceeded. We are open to feedback and continuously them improve our service delivery.",
      },
    ];
  return (
    <>
      {/* Icon Blocks */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mb-10">
          <h2 className="text-2xl font-bold text-color md:text-5xl md:leading-tight ">
             Our Values
          </h2>
         
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-12">
          {/* Icon Block */}

          {values.map((value, index) => (
            <div key={index}>
              <div className="mt-5">
                <h3 className="text-lg md:text-2xl font-bold text-color ">
                  {value.title}
                </h3>
                <p className="mt-1 ">{value.content}</p>
              </div>
            </div>
          ))}

          {/* End Icon Block */}
        </div>
      </div>
      {/* End Icon Blocks */}
    </>
  );
}

export default Values