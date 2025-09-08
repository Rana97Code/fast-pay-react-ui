import { useQuery } from "@apollo/client";
import { FaLinkedin, FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";
import { Employee } from "../interface/landing.interface";
import { GET_ALL_TEAM } from "../graphql/queries/team.queries";

const OurTeam = () => {
  const { data, loading, error } = useQuery<{ getEmployees: Employee[] }>(
    GET_ALL_TEAM
  );

  if (loading) return <p className="text-center">Loading...</p>;
  if (error)
    return (
      <p className="text-center text-red-500">Error loading team members!</p>
    );

  const teamMembers = data?.getEmployees || [];

  return (
    <section className="px-4 py-20 mx-auto max-w-7xl md:px-8 lg:py-28">
      <div className="max-w-3xl mx-auto mb-16 text-center">
        <p className="inline-block px-4 py-1 mb-4 text-sm font-semibold tracking-wide text-white uppercase rounded-full bg-[#458FCD]">
          Core Team
        </p>
        <h2 className="text-4xl font-semibold text-gray-900 sm:text-5xl">
          Meet Our Talented Professionals
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Empowering innovation through collaboration — our team is the heart of
          our software solutions.
        </p>
      </div>

      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers?.map((member) => (
          <div key={member.id} data-aos="zoom-in">
            <div className="relative overflow-hidden transition-transform duration-300 transform shadow-md rounded-2xl hover:-translate-y-2 hover:shadow-xl">
              <img
                className="object-cover w-full h-72 rounded-t-2xl"
                src={member.imageUrl}
                alt={member.name}
              />
              <div className="absolute inset-0 flex flex-col justify-center px-6 py-6 text-center transition-opacity duration-300 bg-black opacity-0 bg-opacity-80 hover:opacity-100">
                <h3 className="mb-1 text-xl font-bold text-white">
                  {member.name}
                </h3>
                <p className="mb-3 text-sm font-medium tracking-wide text-gray-300 uppercase">
                  {member.role}
                </p>
                <p className="mb-4 text-sm text-gray-400">{member.bio}</p>
                <div className="flex items-center justify-center space-x-4">
                  {member?.twitter && (
                    <a
                      href={member?.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#1DA1F2]"
                    >
                      <FaTwitter />
                    </a>
                  )}
                  {member?.linkedin && (
                    <a
                      href={member?.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#0077B5]"
                    >
                      <FaLinkedin />
                    </a>
                  )}
                  {member?.facebook && (
                    <a
                      href={member?.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#4267B2]"
                    >
                      <FaFacebook />
                    </a>
                  )}
                  {member?.github && (
                    <a
                      href={member?.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-300"
                    >
                      <FaGithub />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
