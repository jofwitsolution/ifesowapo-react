import React from "react";
import { motion } from "framer-motion";

import pic9 from "../../../assets/images/pic-9.jpeg";

const SectionOne = () => {
  return (
    <section className="px-4 md:w-[50%] md:mx-auto pt-[3rem] md:pt-[5rem]">
      <h5 className="text-primary font-bold mb-3">See</h5>
      <motion.h2
        className="jof-header-3-primary"
        whileInView={{
          opacity: [0, 1],
          y: [30, 0],
        }}
        transition={{ duration: 1, type: "tween" }}
      >
        What's new at Ifesowapo CICS
      </motion.h2>
    </section>
  );
};

export default SectionOne;
