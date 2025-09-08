import { useState, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa"; // Play button icon
import { MdCancel } from "react-icons/md"; // Close button icon
import video from "../../public/video.mp4"; // Video path

const MeetExperts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Close modal when clicking outside
  const handleOutsideClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      {/* Full Width Background with Professional Gradient */}
      <div className="relative w-full bg-gradient-to-r from-blue-500 to-blue-900">
        {/* Main Section */}
        <div className="relative z-10 px-6 py-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-48">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Content Section */}
            <div className="text-center lg:text-left">
              <h2
                className="mb-6 text-4xl font-semibold text-white sm:text-5xl"
                data-aos="fade-right"
                data-aos-duration="600"
              >
                Meet Our Software Development{" "}
                <span className="text-transparent bg-gradient-to-r from-purple-200 via-indigo-500 to-[#a09191] bg-clip-text">
                  Experts
                </span>
              </h2>

              <p
                className="mb-6 text-lg text-gray-200 md:text-xl"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                Our team of experts specializes in crafting scalable,
                user-centric web and mobile applications that push boundaries
                and drive innovation. With years of technical experience, we
                bring visionary solutions to life.
              </p>
              <div
                className="flex justify-center lg:justify-start"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <Link
                  to={"/contact"}
                  className="px-8 py-3 bg-[#253b72] text-white rounded-full shadow-lg hover:bg-[#263d77] transition-all duration-300 transform hover:scale-105"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative">
              <img
                className="object-cover w-full shadow-lg h-72 rounded-xl sm:h-96"
                src="https://img.freepik.com/free-vector/software-integration-concept-illustration_114360-7237.jpg"
                alt="Expert Team"
              />
              <div
                onClick={openModal}
                className="absolute inset-0 flex items-center justify-center w-full h-full transition-all duration-300 bg-gray-900 bg-opacity-50 cursor-pointer rounded-xl group hover:bg-opacity-25"
              >
                <div className="flex items-center justify-center w-16 h-16 transition-all duration-300 transform bg-white rounded-full shadow-2xl group-hover:scale-110 animate-pulse">
                  <FaPlay className="w-8 text-gray-900" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Video */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75"
          onClick={handleOutsideClick}
        >
          <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-lg">
            {/* Close Button */}
            <div
              onClick={closeModal}
              className="absolute z-10 p-2 text-red-200 cursor-pointer top-4 right-4"
            >
              <MdCancel className="w-8 h-8" />
            </div>

            <div className="relative pb-9/16">
              <video
                src={video}
                controls
                autoPlay
                className="w-full h-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MeetExperts;
