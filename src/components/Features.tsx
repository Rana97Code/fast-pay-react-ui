import {
  FaRocket,
  FaLaptopCode,
  FaShieldAlt,
  FaTools,
} from 'react-icons/fa';
import Lottie from 'lottie-react';
import animationData from '../assets/lottie/service-lottie.json';

// Feature data with React icons
const featuresData = [
  {
    icon: <FaRocket className="text-3xl text-[#3689ce]" />,
    title: 'Accelerated Growth',
    description:
      'Leverage cutting-edge technology and strategic insights to significantly boost your business expansion and market presence.',
  },
  {
    icon: <FaLaptopCode className="text-3xl text-[#3689ce]" />,
    title: 'Enhanced Efficiency',
    description:
      'Streamline your operations with our robust software solutions, reducing manual effort and optimizing resource utilization.',
  },
  {
    icon: <FaShieldAlt className="text-3xl text-[#3689ce]" />,
    title: 'Robust Security',
    description:
      'Protect your valuable data and systems with our advanced cybersecurity measures, ensuring integrity and compliance.',
  },
  {
    icon: <FaTools className="text-3xl text-[#3689ce]" />,
    title: 'Dedicated Support',
    description:
      'Receive unparalleled support from our expert team, always ready to assist you in maximizing the potential of our solutions.',
  },
];

const Features = () => {
  return (
    <div className="bg-white py-16 lg:py-24 font-inter">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Left Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 leading-tight mb-6">
              How can{' '}
              <span className="text-[#3689ce]">FastPay IT Company Limited</span>{' '}
              help your business <span className="text-[#3689ce]">grow</span>?
            </h2>
            <p className="text-lg text-gray-700 max-w-xl lg:max-w-none mx-auto mb-3 leading-relaxed">
              Discover how FastPay IT Company Limited innovative software
              solutions can accelerate your business growth, enhance efficiency,
              and provide a competitive edge in today's dynamic market.
            </p>
            <div className="flex items-center justify-center lg:justify-start">
              <div className="flex items-center justify-center lg:justify-start">
                <Lottie
                  animationData={animationData}
                  loop
                  className="md:w-[500px] md:h-[500px] opacity-80"
                />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 grid gap-8 sm:grid-cols-2">
            {featuresData.map((feature) => (
              <div
                key={feature.title}
                className="bg-[#f8faff] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-[#e0f2fe] text-[#3689ce] text-3xl">
                  {feature.icon}
                </div>
                <h3 className="mb-3 font-extrabold leading-tight text-xl text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
