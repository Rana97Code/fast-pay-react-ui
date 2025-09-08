import { FaAngleRight } from "react-icons/fa";
import * as FaIcons from "react-icons/fa";
import { useQuery } from "@apollo/client";
import ExploreWeb from "./ExploreWeb";
import { Link } from "react-router-dom";
import { GET_ALL_SERVICES } from "../graphql/queries/service.queries";
import { Service } from "../interface/landing.interface";

const Services = () => {
  const { data } = useQuery(GET_ALL_SERVICES);
  const services = data?.getAllServices || [];

  const renderIcon = (iconName: string) => {
    const IconComponent = FaIcons[iconName as keyof typeof FaIcons];
    return IconComponent ? <IconComponent className="text-2xl" /> : null;
  };

  return (
    <>
      <ExploreWeb />

      <section className="py-24 bg-white">
        <div className="max-w-screen-xl px-6 mx-auto text-center lg:px-8">
          {/* Heading */}
          <div className="mb-16" data-aos="fade-down" data-aos-duration="800">
            <h2 className="mb-6 text-4xl font-semibold text-gray-900 sm:text-5xl">
              Smart Solutions for a Digital World
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 sm:text-xl">
              We build reliable, scalable, and intuitive digital products that
              help businesses thrive in a competitive landscape. Explore how our
              expertise can empower your growth.
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-10 text-left md:grid-cols-2 lg:grid-cols-3">
            {services.map((service: Service, index: number) => (
              <div
                key={service.id}
                className="p-8 bg-gradient-to-br from-[#f8fbff] to-[#eef5fc] border border-[#d8e8f8] rounded-2xl shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#dceeff] text-[#3689ce] mb-6 shadow-md">
                  {renderIcon(service.imageUrl)}
                </div>

                {/* Title */}
                <h3 className="mb-3 text-2xl font-semibold text-gray-900">
                  {service.title.trim()}
                </h3>

                {/* Description */}
                <p className="mb-6 text-base leading-relaxed text-gray-700">
                  {service.description}
                </p>

                {/* Link */}
                <Link
                  to={service.link || "#"}
                  target="_blank"
                  className="inline-flex items-center text-[#3689ce] hover:text-[#1e65aa] font-medium text-base transition-colors duration-300"
                >
                  Learn More <FaAngleRight className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
