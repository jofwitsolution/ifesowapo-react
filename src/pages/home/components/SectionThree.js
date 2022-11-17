import React from "react";
import { motion } from "framer-motion";

import pic10 from "../../../assets/images/pic-10.jpeg";

const SectionThree = () => {
  return (
    <section className="md:px-[8%]">
      <div className="w-[100%] border-b-2 border-white"></div>
      <div className="w-[90%] md:w-[50%] border-b-[6px] border-primary mx-auto md:mx-0"></div>
      <div className="flex px-4 py-[8%] flex-col md:flex-row gap-5 justify-center items-center">
        <motion.div
          whileInView={{
            opacity: [0, 1],
          }}
          transition={{ duration: 0.7, type: "tween" }}
          className="self-baseline"
        >
          <h3 className="text-primary font-semibold mb-[1rem] text-[1.3rem]">
            Who we are
          </h3>
          <h1 className="jof-header-3-primary mb-[2rem]">
            Ifesowapo Farming Group
          </h1>
          <p className="mb-[1rem] text-[1.2rem]">
            Ifesowapo farming group is a credit investment and cooperate society
            located in Akinyele local government, Ibadan Oyo state.
          </p>
          <p className="mb-[1rem] text-[1.2rem]">
            We produce primarily annual crops with a focus on tomatoes
            (processing and fresh), melons, Extra Long Staple cotton, alfalfa
            and much more.
          </p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1], y: [50, 0] }}
          transition={{ delay: 0.7, duration: 1, type: "tween" }}
          className=""
        >
          <img src={pic10} alt="pic-10" className="md:w-[90%]" />
        </motion.div>
      </div>
    </section>
  );
};

export default SectionThree;
