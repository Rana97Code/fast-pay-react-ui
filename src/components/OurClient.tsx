import { useQuery } from "@apollo/client";
import { GET_ALL_CLIENT_VALUES } from "../graphql/queries/about.queries";

const OurClients = () => {
  // Fetch data using Apollo Client's useQuery hook
  const { data, loading, error } = useQuery(GET_ALL_CLIENT_VALUES);

  // Loading state
  if (loading) return <p>Loading...</p>;

  // Error state
  if (error) return <p>Error loading data: {error.message}</p>;

  return (
    <section className="w-full bg-gradient-to-r from-[#e0f2fe] via-[#c7d2fe] to-[#e0e7ff]">
      <div className="max-w-screen-xl px-4 py-16 mx-auto md:py-20 lg:px-24">
        {/* Heading */}
        <div
          className="max-w-2xl mx-auto mb-12 text-center"
          data-aos="fade-down"
          data-aos-easing="linear"
        >
          <h2 className="text-4xl font-semibold text-gray-900 sm:text-5xl">
            Why do our <span className="text-[#3689ce]">clients</span> value us?
          </h2>
          <p
            className="mt-6 text-lg text-gray-700"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            When asked about the key benefits of working with us, our clients
            highlighted the following advantages. See below to find out how we
            can meet your needs!
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Dynamically render the fetched data */}
          {data?.getAllClientValues?.map((item: any, index: number) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out group p-8 flex items-start gap-6 hover:bg-gradient-to-r hover:from-[#3689ce] hover:to-[#84c6fb] hover:text-white transform hover:scale-105"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              {item.type === "text" ? (
                <div>
                  <h4 className="mb-4 text-2xl font-semibold text-gray-900 group-hover:text-white">
                    {item.title}
                  </h4>
                  <p className="text-base leading-relaxed text-gray-600 group-hover:text-gray-100">
                    {item.description}
                  </p>
                </div>
              ) : (
                <div className="w-full">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="object-contain w-full h-auto transition-all duration-300 ease-in-out transform rounded-lg shadow-md hover:scale-105"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
