import React from "react";
import { motion } from "framer-motion";

const SectionSix = () => {
  return (
    <section className="bg-white flex flex-col gap-5 justify-center items-center py-[8%]">
      <div className="md:w-3/6 ml-4 md:ml-0 text-center">
        <motion.h2
          whileInView={{
            opacity: [0, 1],
          }}
          transition={{ duration: 0.8, type: "tween" }}
          className="jof-special-header"
        >
          A LOOK INTO
        </motion.h2>
        <motion.h2
          whileInView={{
            opacity: [0, 1],
          }}
          transition={{ delay: 0.8, duration: 0.8, type: "tween" }}
          className="jof-special-header"
        >
          IFESOWAPO
        </motion.h2>
        <motion.h2
          whileInView={{
            opacity: [0, 1],
          }}
          transition={{ delay: 1.6, duration: 0.8, type: "tween" }}
          className="jof-special-header"
        >
          CICS
        </motion.h2>
      </div>
      <div className="md:w-3/6 ml-4 md:ml-0 mt-10">
        <motion.p
          whileInView={{
            opacity: [0, 1],
          }}
          transition={{ delay: 2.4, duration: 0.8, type: "tween" }}
          className="mb-[1rem] text-[1.2rem] text-lightBlack"
        >
          We value our employees and their families and understand their
          importance to our farm and its success. We focus on the health of our
          soil and pride ourselves on being good stewards for all our resources.
          At Ifesowapo CICS, conservation and preservation are of the utmost
          importance to us.
        </motion.p>
      </div>
    </section>
  );
};

export default SectionSix;
