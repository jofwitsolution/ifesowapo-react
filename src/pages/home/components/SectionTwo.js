import React from "react";
import { motion } from "framer-motion";
import { HiArrowSmRight } from "react-icons/hi";

import Leaf from "../../../components/svg/Leaf";

const SectionTwo = () => {
  return (
    <section className="flex ml-4 py-[10%] flex-col md:flex-row justify-center items-center">
      <div className="md:w-3/6">
        <motion.h1
          whileInView={{
            opacity: [0, 1],

            x: [-100, 0],
          }}
          transition={{ duration: 2, type: "tween" }}
          className="jof-header-1-primary"
        >
          Changing people's orientation to an agricultural value chain
        </motion.h1>
        <div className="mt-5 w-max border-b-4 border-primary cursor-pointer hover:border-b-8 transition-all duration-500 ease-in-out">
          <a
            href="/about"
            className="group flex justify-start items-center hover:scale-104 transition-all duration-500 ease-in-out"
          >
            Discover more{" "}
            <HiArrowSmRight className="group-hover:ml-3 transition-all duration-500 ease-in-out" />{" "}
          </a>
        </div>
      </div>
      <motion.div
        whileInView={{ opacity: [0, 1], scale: [0.3, 1] }}
        transition={{ delay: 2, duration: 1, type: "tween" }}
        whileHover={{ scale: 1.1 }}
        className="mt-20 md:mt-0"
      >
        <Leaf />
      </motion.div>
    </section>
  );
};

export default SectionTwo;
