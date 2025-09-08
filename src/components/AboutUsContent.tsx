import { content } from "../data";
import { FiArrowRight, FiCode, FiSmartphone, FiAward } from "react-icons/fi";

const icons = [
  <FiArrowRight className="w-6 h-6 text-deep-purple-accent-400" />,
  <FiCode className="w-6 h-6 text-deep-purple-accent-400" />,
  <FiSmartphone className="w-6 h-6 text-deep-purple-accent-400" />,
  <FiAward className="w-6 h-6 text-deep-purple-accent-400" />,
];

const AboutUsContent = () => {
  return (
    <div className="bg-[url('https://aamarpay.com/images/epsilon/banner-1.png')] bg-cover bg-no-repeat bg-right bg-fixed">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h2
          className="mb-8 text-4xl font-semibold text-black sm:text-5xl"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="600"
        >
          Discover Our Expertise
        </h2>
        <p
          className="mb-12 text-lg text-black md:text-xl"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="700"
        >
          At our software firm, we specialize in delivering cutting-edge
          solutions tailored to meet the dynamic needs of your business. From
          high-performance web applications to secure mobile solutions, our
          experts collaborate with you every step of the way, ensuring
          innovative, user-centric results.
        </p>
        <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
          {content?.map((item, index) => (
            <div
              key={index}
              className="relative p-px overflow-hidden transition duration-300 transform border rounded-lg shadow-lg hover:scale-105 group hover:shadow-xl"
              data-aos="fade-up-right"
            >
              <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-purple-400 group-hover:scale-x-100" />
              <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-purple-400 group-hover:scale-y-100" />
              <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-purple-400 group-hover:scale-x-100" />
              <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-purple-400 group-hover:scale-y-100" />
              <div className="relative p-5 bg-white rounded-sm">
                <div className="flex flex-col mb-4 lg:items-center lg:flex-row">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                    {icons[index] || (
                      <FiArrowRight className="w-6 h-6 text-deep-purple-accent-400" />
                    )}
                  </div>
                  <h6 className="text-2xl font-bold text-gray-900">
                    {item.title}
                  </h6>
                </div>
                <p className="mt-4 mb-2 text-lg text-gray-700">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsContent;
