import { useQuery } from "@apollo/client";
import { GET_CHAIRMAN } from "../graphql/queries/chairmen.queries";

const ChairmanPortfolio = () => {
  const { data, loading, error } = useQuery(GET_CHAIRMAN);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const chairman = data?.getChairmen?.[0]; // pick the first chairman

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 font-inter">
      {/* Top Section: Image + About */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center lg:justify-start">
          <img
            src={chairman?.profileImage || "/placeholder.jpg"}
            alt={chairman?.name || "Chairman"}
            className="rounded-2xl shadow-lg w-80 h-auto object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#111E40] mb-4">
            {chairman?.name}
          </h2>
          <h3 className="text-xl font-semibold text-[#458FCD] mb-4">
            {chairman?.designation}
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            {chairman?.bio || "No biography available."}
          </p>
        </div>
      </div>

      {/* Academic Qualifications */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-2xl font-bold text-[#111E40] mb-6">
            Academic Qualifications
          </h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed">
            {chairman?.qualifications?.map((q: string, idx: number) => (
              <li key={idx}>{q}</li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={chairman?.qualificationImage || "/placeholder.jpg"}
            alt="Chairman's Academic Journey"
            className="rounded-2xl shadow-lg w-96 h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};


export default ChairmanPortfolio;
