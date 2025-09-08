import { motion, useTransform, useViewportScroll } from "framer-motion";
import carImg from "../../public/car.png";
const ExploreWeb = () => {
  const { scrollYProgress } = useViewportScroll();

  const imageVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 0 },
  };

  const translateY = useTransform(scrollYProgress, [0, 0.9], [10, -400]);
  const translateX = useTransform(scrollYProgress, [0, 0.9], [-800, 2000]);

  return (
    <section id="explore" className="relative">
      <div className="hidden font-semibold text-center lg:block">
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          style={{
            y: translateY,
            x: translateX,
            position: "absolute",
            top: "75%",
            left: "40%",
          }}
        >
          <img src={carImg} alt="car" className="w-40 h-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default ExploreWeb;
