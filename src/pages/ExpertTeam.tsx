import React from "react";
// import { expertTeamData } from "../data";
import { useQuery } from "@apollo/client";
import { GET_ALL_STAKEHOLDERS } from "../graphql/queries/stakeholder.queries";

const ExpertTeam: React.FC = () => {
  const { data, loading, error } = useQuery(GET_ALL_STAKEHOLDERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const stakeholders = data?.getAllStakeholders;

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 font-inter">
      <h2 className="text-3xl font-bold text-center text-[#1E3A8A] mb-6">
        Meet Our Expert Team
      </h2>
      <div className="w-full h-72 md:h-96 mb-10 overflow-hidden rounded-2xl shadow-lg">
        <img
          src="/team.jpg"
          alt="Expert Team Cover"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {stakeholders?.map((member: any) => (
          <div
            key={member.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 mx-auto object-cover rounded-full border-4 border-[#1E3A8A] shadow-md"
            />
            <h3 className="mt-4 text-xl font-bold text-gray-800">
              {member.name}
            </h3>
            <p className="text-[#458FCD] font-medium">{member.role}</p>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              {member.bio}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertTeam;
