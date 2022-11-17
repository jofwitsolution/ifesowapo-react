import React from "react";
import { motion } from "framer-motion";

const SectionFive = () => {
  return (
    <section className="h-[60vh] md:h-screen bg-home-sect-5 bg-fixed bg-center bg-no-repeat bg-cover flex flex-col justify-center items-center">
      <div className="md:w-3/6 ml-4 md:ml-0">
        <motion.h2
          whileInView={{
            opacity: [0, 1],
          }}
          transition={{ duration: 2, type: "tween" }}
          className="jof-header-2-white"
        >
          People, soil, our consumers, and the environment are the foundations
          of our success.
        </motion.h2>
      </div>
    </section>
  );
};

export default SectionFive;
