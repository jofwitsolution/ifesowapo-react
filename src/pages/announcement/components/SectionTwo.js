import React from "react";
import { motion } from "framer-motion";

import pic10 from "../../../assets/images/pic-10.jpeg";
import pic9 from "../../../assets/images/pic-9.jpeg";
import pic13 from "../../../assets/images/pic-13.jpeg";
import pic2 from "../../../assets/images/pic-2.jpeg";

const SectionTwo = () => {
  return (
    <section className="px-4 md:w-[85%] md:mx-auto py-[5%] md:py-[2%]">
      <div className="mb-5">
        <motion.div
          whileInView={{
            opacity: [0, 1],
            y: [30, 0],
          }}
          transition={{ duration: 1, type: "tween" }}
          className="flex flex-col md:flex-row gap-2 md:gap-5 justify-start items-start"
        >
          <img
            src={pic9}
            alt={"pic-9"}
            className="md:w-[50%] basis-2/4 shadow-lg"
          />
          <div className="md:ml-5 md:mt-10 text-black md:text-2xl basis-2/4">
            Farmers taking soil sample in order to perform tomato test
          </div>
        </motion.div>
      </div>
      <div className="mb-5">
        <motion.div
          whileInView={{
            opacity: [0, 1],
            y: [30, 0],
          }}
          transition={{ duration: 1, type: "tween" }}
          className="flex flex-col md:flex-row gap-2 md:gap-5 justify-between items-start"
        >
          <div className="md:ml-5 md:mt-10 text-black md:text-2xl basis-2/4">
            Preparation of tomato bed
          </div>
          <img
            src={pic10}
            alt={"pic-10"}
            className="md:w-[50%] order-first md:order-2 basis-2/4 shadow-lg"
          />
        </motion.div>
      </div>
      <div className="mb-5">
        <motion.div
          whileInView={{
            opacity: [0, 1],
            y: [30, 0],
          }}
          transition={{ duration: 1, type: "tween" }}
          className="flex flex-col md:flex-row gap-2 md:gap-5 justify-start items-start"
        >
          <img
            src={pic13}
            alt={"pic-13"}
            className="md:w-[50%] basis-2/4 shadow-lg"
          />
          <div className="md:ml-5 md:mt-10 text-black md:text-2xl basis-2/4">
            Handling over of some farm equipments
          </div>
        </motion.div>
      </div>
      <div className="mb-5">
        <motion.div
          whileInView={{
            opacity: [0, 1],
            y: [30, 0],
          }}
          transition={{ duration: 1, type: "tween" }}
          className="flex flex-col md:flex-row gap-2 md:gap-5 justify-between items-start"
        >
          <div className="md:ml-5 md:mt-10 text-black md:text-2xl basis-2/4">
            Bank officials onboard Ifesowapo CICS members
          </div>
          <img
            src={pic2}
            alt={"pic-2"}
            className="md:w-[50%] order-first md:order-2 basis-2/4 shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SectionTwo;
