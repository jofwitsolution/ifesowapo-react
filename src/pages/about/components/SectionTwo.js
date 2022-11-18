import React from "react";
import { motion } from "framer-motion";

import pic1 from "../../../assets/images/pic-1.jpeg";

const SectionTwo = () => {
  return (
    <section className="border-b-[1px] border-white">
      <div className="px-4 md:w-[60%] md:px-[8%] md:mx-auto py-[8%]">
        <div className="flex flex-col md:flex-row gap-5 justify-start items-center md:items-start">
          <motion.div
            whileInView={{
              opacity: [0, 1],
              x: [-40, 0],
            }}
            transition={{ duration: 1, type: "tween" }}
          >
            <img
              src={pic1}
              alt="pic-1"
              className="w-[300px] h-[300px] rounded-md"
            />
          </motion.div>
          <motion.div
            className="md:mt-8"
            whileInView={{
              opacity: [0, 1],
              y: [100, 0],
            }}
            transition={{ delay: 0.8, duration: 1, type: "tween" }}
          >
            <p className="text-[1.2rem]">
              <span className="font-semibold">Comrade Abdulsalam Ayoola</span>{" "}
              <br /> CEO and President <br /> Ifesowapo CICS farmers cooperative
            </p>
          </motion.div>
        </div>
        <div className="w-[90%] md:w-[50%] border-b-[6px] mt-10 border-primary mx-auto md:mx-0"></div>
        <div className="w-[100%] border-b-2 border-white"></div>
      </div>
    </section>
  );
};

export default SectionTwo;
