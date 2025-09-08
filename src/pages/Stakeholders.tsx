import React from "react";
// import { stakeholdersData } from "../data";
import { useQuery } from "@apollo/client";
import { GET_ALL_STAKEHOLDERS } from "../graphql/queries/stakeholder.queries";

const Stakeholders: React.FC = () => {
  const { data, loading, error } = useQuery(GET_ALL_STAKEHOLDERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const stakeholders = data?.getAllStakeholders;

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 font-inter">
      <h2 className="text-3xl font-bold text-center text-[#1E3A8A] mb-10">
        Our Stakeholders
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {stakeholders.map((person: any, index: any) => (
          <div
            key={person.id}
            className={`flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl shadow-lg transition-all duration-300 ${
              index % 2 === 0 ? "bg-[#F8FAFC]" : "bg-[#EFF6FF]"
            }`}
          >
            {/* Left: Image */}
            <div className="flex-shrink-0">
              <img
                src={person.image}
                alt={person.name}
                className="w-40 h-40 object-cover rounded-full border-4 border-[#458FCD] shadow-md"
              />
            </div>

            {/* Right: Details */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-800">
                {person.name}
              </h3>
              <p className="text-lg text-[#458FCD] font-medium">
                {person.position}
              </p>
              <p className="mt-3 text-gray-600 leading-relaxed">{person.bio}</p>

              {/* Notable Works */}
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-gray-800">
                  Notable Works & Projects
                </h4>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  {person.notableWorks.map((work: string, i: number) => (
                    <li key={i}>{work}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stakeholders;
