import { useQuery } from "@apollo/client";
import { GET_MANAGING_DIRECTOR } from "../graphql/queries/mDirector.queries";

const ManagingDirectorPortfolio = () => {
  const { data, loading, error } = useQuery(GET_MANAGING_DIRECTOR);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const managingDirector = data?.getManagingDirector?.[0]; // pick the first MD

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 font-inter">
      {/* Top Section: Image + Bio */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center lg:justify-start">
          <img
            src={managingDirector?.image || "/placeholder.jpg"}
            alt={managingDirector?.name || "Managing Director"}
            className="rounded-2xl shadow-lg w-80 h-auto object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#0F3D2E] mb-4">
            {managingDirector?.name}
          </h2>
          <h3 className="text-xl font-semibold text-emerald-600 mb-4">
            {managingDirector?.designation}
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            {managingDirector?.bio || "No biography available."}
          </p>
        </div>
      </div>

      {/* Notable Works Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-[#0F3D2E] mb-6">
          Notable Works & Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {managingDirector?.achievements?.length > 0 ? (
            managingDirector.achievements.map((work: string, idx: number) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition border-t-4 border-emerald-500"
              >
                <h4 className="text-lg font-semibold text-emerald-600 mb-2">
                  {work}
                </h4>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No notable works available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ManagingDirectorPortfolio;
