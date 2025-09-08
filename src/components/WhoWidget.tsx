import { Link } from "react-router-dom";
import Background from "../assets/bg/3439499_61896.svg";

const WhoWidget = () => {
  return (
    <div className="relative py-16 lg:py-24">
      <img
        src={Background}
        alt="Background"
        className="absolute inset-0 object-contain w-full h-full opacity-20"
      />
      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="mb-6 text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl sm:leading-snug"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            What is <span className="text-brand">FastPay IT Company Limited</span>?
          </h2>
          <p
            className="mb-8 text-lg text-gray-800 sm:text-xl md:text-2xl"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="600"
          >
            FastPay IT Company Limited is a forward-thinking software development
            firm that delivers scalable, innovative, and secure digital
            solutions. We specialize in custom web and mobile application
            development, cloud computing, and enterprise software solutions. Our
            mission is to help businesses streamline their operations and scale
            seamlessly through technology-driven strategies.
          </p>

          {/* CTA Button */}
          <div
            className="flex justify-center"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center h-12 px-10 text-lg font-semibold text-white bg-[#60a7e2] rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:bg-[#73b2e2] hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWidget;
