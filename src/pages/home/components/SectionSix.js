import React from "react";
import { motion } from "framer-motion";

import pic10 from "../../../assets/images/pic-10.jpeg";
import pic9 from "../../../assets/images/pic-9.jpeg";
import pic13 from "../../../assets/images/pic-13.jpeg";

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
      <div className="md:w-3/6 mx-4 md:ml-0 mt-2 md:mt-10">
        <motion.p
          whileInView={{
            opacity: [0, 1],
          }}
          transition={{ delay: 1, duration: 0.8, type: "tween" }}
          className="mb-[1rem] text-[1.2rem] text-lightBlack"
        >
          We value our employees and their families and understand their
          importance to our farm and its success. We focus on the health of our
          soil and pride ourselves on being good stewards for all our resources.
          At Ifesowapo CICS, conservation and preservation are of the utmost
          importance to us.
        </motion.p>
      </div>
      <h2 className="jof-special-header mx-auto mt-5 md:mt-12 mb-2">
        LATEST NEWS
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-12 px-4 md:px-[8%]">
        <motion.div
          whileInView={{ opacity: [0, 1], y: [40, 0] }}
          transition={{ duration: 1, type: "tween" }}
        >
          <a href="/announcement" className="group">
            <img
              src={pic10}
              alt="pic10"
              className="group-hover:rounded-lg hover:shadow-lg border-primary transition-all duration-300 ease-in-out"
            />
            <p className="text-[1.2rem] text-lightBlack mt-3 group-hover:text-secondary">
              Preparation of tomato bed
            </p>
          </a>
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1], y: [40, 0] }}
          transition={{ duration: 1, type: "tween" }}
        >
          <a href="/announcement" className="group">
            <img
              src={pic9}
              alt="pic9"
              className="group-hover:rounded-lg hover:shadow-lg border-primary transition-all duration-300 ease-in-out"
            />
            <p className="text-[1.2rem] text-lightBlack mt-3 group-hover:text-secondary">
              Experts taking soil sample in order to perform tomato test
            </p>
          </a>
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1], y: [40, 0] }}
          transition={{ duration: 1, type: "tween" }}
        >
          <a href="/announcement" className="group">
            <img
              src={pic13}
              alt="pic13"
              className="group-hover:rounded-lg hover:shadow-lg border-primary transition-all duration-300 ease-in-out"
            />
            <p className="text-[1.2rem] text-lightBlack mt-3 group-hover:text-secondary">
              Handling over of some farm equipments
            </p>
          </a>
        </motion.div>
      </div>
      <div className="border-b-4 border-primary w-max text-secondary mt-2 font-semibold hover:bg-primary hover:text-white px-4 py-1 cursor-pointer transition-all duration-1000 ease-in-out h-max">
        <a href="/announcement"> read more...</a>
      </div>
    </section>
  );
};

export default SectionSix;
