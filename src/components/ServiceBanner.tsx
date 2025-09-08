import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { Link } from "react-router-dom";
import Lottie from 'lottie-react';
import animationData from '../assets/lottie/growth.json';

const ServiceBanner = () => {
	useEffect(() => {
		AOS.init({
			duration: 400,
			easing: "ease-in-out",
		});
	}, []);

	return (
		<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
			<div className="grid gap-5 row-gap-8 lg:grid-cols-2">
				<div className="flex flex-col justify-center">
					<div className="mb-6">
						<h2
							className="mb-6 font-semibold sm:text-5xl text-4xl text-gray-900"
							data-aos="fade-right"
							data-aos-easing="linear"
							data-aos-duration="600"
						>
							Empowering Businesses with{" "}
							<span className="text-brand">Nexorabyte</span>
						</h2>


						<div
							className="text-xl font-bold mb-4"
							data-aos="fade-right"
							data-aos-easing="linear"
							data-aos-duration="700"
						>
							Innovative | Scalable | Reliable
						</div>
						<p
							className="text-base text-gray-700 md:text-lg"
							data-aos="fade-right"
							data-aos-easing="linear"
							data-aos-duration="800"
						>
							FastPay IT Company Limited delivers innovative software solutions that accelerate business growth, streamline workflows, and maximize operational efficiency.
						</p>
					</div>
					<Link
						to="/contact"
						className="text-white font-md py-2 px-4 w-40 rounded shadow-md bg-[#23B7F6] hover:bg-[#50a1e4] transition-colors duration-500"
						data-aos="fade-right"
						data-aos-easing="linear"
						data-aos-duration="900"
					>
						Get Started Now
					</Link>
				</div>
				<div
					className="relative"
					data-aos="fade-left"
					data-aos-easing="linear"
					data-aos-duration="1000"
				>
					<div className="flex items-center justify-center lg:justify-start">
						<Lottie
							animationData={animationData}
							loop
							className="md:w-[500px] md:h-[500px] opacity-80 scale-x-[-1]"
						/>
					</div>
				</div>

			</div>
		</div>
	);
};

export default ServiceBanner;
