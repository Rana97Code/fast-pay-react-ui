import { useQuery } from "@apollo/client";
import { GET_ALL_COMPANIES } from "../graphql/queries/companies.queries";

type Company = {
  id: string;
  title: string;
  href: string;
  logo?: string;
  description?: string;
  email?: string;
  phoneNumber?: string;
  address?: string;
};

const ShowcaseCompanies = () => {
  const { data, loading, error } = useQuery(GET_ALL_COMPANIES);

  if (loading) return <div className="py-24 text-center">Loading...</div>;
  if (error)
    return (
      <div className="py-24 text-center text-red-500">
        Error loading companies
      </div>
    );

  const companies: Company[] = data?.getAllCompanies || [];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-screen-xl px-4 mx-auto">
        <h2 className="mb-16 text-4xl font-semibold text-center text-gray-900 sm:text-5xl">
          Our <span className="text-blue-700">Trusted Companies</span>
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {companies.map((company, index) => (
            <div
              key={company.id || index}
              className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 overflow-hidden"
            >
              {company.logo && (
                <div className="h-56 overflow-hidden flex items-center justify-center bg-gray-100 sm:h-64 md:h-72">
                  <img
                    src={company.logo}
                    alt={company.title}
                    className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">
                  {company.title}
                </h3>

                {company.description && (
                  <p className="text-sm text-gray-600">{company.description}</p>
                )}

                <div className="flex flex-col gap-2 text-sm text-gray-500">
                  {company.address && <span>Address: {company.address}</span>}
                  {company.phoneNumber && (
                    <span>Phone: {company.phoneNumber}</span>
                  )}
                  {company.email && <span>Email: {company.email}</span>}
                </div>

                <a
                    href={company.href.startsWith("http") ? company.href : `https://${company.href}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 mt-4 text-sm font-medium text-white transition bg-blue-600 rounded-md hover:bg-blue-700"
                    >
                    Visit Website
             </a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseCompanies;
