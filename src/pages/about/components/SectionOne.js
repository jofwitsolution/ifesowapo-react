import React from "react";
import { motion } from "framer-motion";

const SectionOne = () => {
  return (
    <section className="px-4 md:w-[50%] md:mx-auto mt-[7rem] md:mt-[10%]">
      <motion.h2
        className="jof-header-3-primary mb-10"
        whileInView={{
          opacity: [0, 1],
          y: [-30, 0],
        }}
        transition={{ duration: 1, type: "tween" }}
      >
        About us
      </motion.h2>
      <motion.div
        whileInView={{
          opacity: [0, 1],
        }}
        transition={{ duration: 2, type: "tween" }}
      >
        <p className="text-[1.25rem]">
          Ifesowapo CICS farmers cooperative is dedicated to change people's
          orientation to an agricultural value chain using both proven and
          innovative methods.
        </p>
      </motion.div>

      <motion.div
        className="mt-20"
        whileInView={{
          opacity: [0, 1],
          y: [40, 0],
        }}
        transition={{ duration: 1, type: "tween" }}
      >
        <h2 className="jof-header-4-primary mb-2">Our vision</h2>
        <p className="text-[1.2rem] md:text-[1.25rem]">
          To make our country Nigeria a better place to live, to work and
          produce raw materials and finished products for our local consumptions
          and export purposes
        </p>
      </motion.div>
      <motion.div
        className="mt-20"
        whileInView={{
          opacity: [0, 1],
          y: [40, 0],
        }}
        transition={{ duration: 1, type: "tween" }}
      >
        <h2 className="jof-header-4-primary mb-2">Our value</h2>
        <p className="text-[1.2rem] md:text-[1.25rem]">
          Ifesowapo CICS farmers cooperative are responsible, accountable,
          respectful, effective in agricultural plannings
        </p>
      </motion.div>
      <motion.div
        className="mt-20"
        whileInView={{
          opacity: [0, 1],
          y: [40, 0],
        }}
        transition={{ duration: 1, type: "tween" }}
      >
        <h2 className="jof-header-4-primary mb-2">We promote:</h2>
        <ul className="text-[1.2rem] md:text-[1.25rem] list-disc ml-10">
          <li>Integrity</li>
          <li>Honesty</li>
          <li>Encourage innovation to meet up with individual challenges</li>
        </ul>
      </motion.div>
      <div className="w-[100%] border-b-2 border-white mt-10"></div>
      <div className="w-[90%] md:w-[50%] border-b-[6px] border-primary mx-auto md:mx-0"></div>
    </section>
  );
};

export default SectionOne;
