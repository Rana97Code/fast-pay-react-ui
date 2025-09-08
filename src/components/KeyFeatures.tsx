import { FiLink, FiShield, FiUsers } from "react-icons/fi";
import { BsStack } from "react-icons/bs";

const features = [
  {
    title: "Seamless Integration",
    description:
      "Effortlessly connect our software with your existing tools, ensuring a smooth transition and enhanced workflow efficiency.",
    icon: <FiLink size={40} />,
  },
  {
    title: "Scalable Architecture",
    description:
      "Built to grow with your business, our robust architecture guarantees peak performance, no matter your operational scale.",
    icon: <BsStack size={40} />,
  },
  {
    title: "User-Centric Design",
    description:
      "Experience intuitive interfaces designed for optimal user interaction, making complex tasks simple and efficient for your entire team.",
    icon: <FiUsers size={40} />,
  },
  {
    title: "Advanced Security",
    description:
      "Your data's safety is our priority. We employ cutting-edge encryption and rigorous protocols to safeguard your valuable information.",
    icon: <FiShield size={40} />,
  },
];

const KeyFeatures = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-100 via-blue-100 to-white">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <h2 className="mb-20 text-4xl font-semibold leading-tight text-center text-gray-900 sm:text-5xl lg:text-5xl">
          Unlocking Potential with Our{" "}
          <span className="text-blue-700">Core Features</span>
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features?.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-8 bg-white bg-opacity-80 backdrop-blur-md shadow-lg rounded-3xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 group border border-gray-200"
            >
              <div className="flex items-center justify-center w-20 h-20 mb-6 text-blue-600 transition-colors duration-300 bg-blue-100 rounded-full group-hover:bg-blue-200 group-hover:text-blue-800">
                {feature.icon}
              </div>
              <h3 className="mb-4 text-xl font-semibold text-center text-gray-800 transition-colors duration-300 group-hover:text-blue-700">
                {feature.title}
              </h3>
              <p className="text-base text-center text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
