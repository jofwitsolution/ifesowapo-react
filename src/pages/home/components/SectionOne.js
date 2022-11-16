import React from "react";
import { motion } from "framer-motion";

const SectionOne = () => {
  return (
    <section className="h-[40vh] md:h-screen bg-hero-home bg-center bg-no-repeat bg-cover flex flex-col justify-center items-center">
      <div className="md:w-3/6 ml-4 md:ml-0">
        <h1 className="jof-header-1-white mb-2">Ifesowapo</h1>
        <motion.h1
          whileInView={{
            opacity: [0, 1],
            visibility: "visible",
          }}
          transition={{ duration: 2, type: "tween" }}
          className="jof-header-2-white"
        >
          Credit Investment and Cooperate Society (CICS)
        </motion.h1>
      </div>
    </section>
  );
};

export default SectionOne;
