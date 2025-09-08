import { useEffect } from "react";
import Benefits from "../components/Benefits";
import CareerBanner from "../components/CareerBanner";
import JobOpenings from "../components/Openings";
import Statistic from "../components/Statistics";
import AOS from "aos";
import DynamicPageTitle from "../utils/DynamicPageTitle";

const Career = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <>
      <DynamicPageTitle
        pageTitle="Career"
        pageContent="Nexorabyte IT Solution"
        pageURL="https://www.nexorabyte.com/career"
      />
      <CareerBanner />
      <Statistic />
      <JobOpenings />
      <Benefits />
    </>
  );
};

export default Career;
