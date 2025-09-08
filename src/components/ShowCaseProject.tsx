
import { useQuery } from "@apollo/client";
import { GET_ALL_PROJECTS } from "../graphql/queries/project.queries";

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  timeline: string;
  status: "Completed" | "Ongoing";
  link?: string;
};

const ShowcaseProjects = () => {
  const { data, loading, error } = useQuery(GET_ALL_PROJECTS);

  if (loading) return <div className="py-24 text-center">Loading...</div>;
  if (error)
    return (
      <div className="py-24 text-center text-red-500">
        Error loading projects
      </div>
    );

  const projects: Project[] = data?.getAllProjects || [];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-screen-xl px-4 mx-auto">
        <h2 className="mb-16 text-4xl font-semibold text-center text-gray-900 sm:text-5xl">
          Discover Our{" "}
          <span className="text-blue-700">Technology Solutions</span>
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.id || index}
              className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 overflow-hidden"
            >
              <div className="h-56 overflow-hidden sm:h-64 md:h-72">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600">{project.description}</p>

                <div className="flex flex-wrap gap-2 text-xs">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-blue-800 bg-blue-100 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between text-sm text-gray-500">
                  <span>
                    <strong>Status:</strong>{" "}
                    <span
                      className={
                        project.status === "Completed"
                          ? "text-green-600"
                          : "text-yellow-600"
                      }
                    >
                      {project.status}
                    </span>
                  </span>
                  <span>
                    <strong>Timeline:</strong> {project.timeline}
                  </span>
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 mt-4 text-sm font-medium text-white transition bg-blue-600 rounded-md hover:bg-blue-700"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseProjects;
