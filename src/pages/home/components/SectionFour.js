import React from "react";
import { motion } from "framer-motion";

import pic5 from "../../../assets/images/pic-5.jpeg";

const SectionFour = () => {
  return (
    <section className="md:px-[8%]">
      <div className="flex px-4 py-[8%] flex-col md:flex-row gap-5 justify-center items-center">
        <motion.div className="basis-[50%] order-last md:order-none">
          <img src={pic5} alt="pic-10" className="md:w-[90%]" />
        </motion.div>
        <motion.div
          whileInView={{
            opacity: [0, 1],
            y: [30, 0],
          }}
          transition={{ duration: 1, type: "tween" }}
          className="basis-[50%]"
        >
          <h3 className="text-primary text-center font-semibold mb-[2rem] text-[1.3rem]">
            What we do
          </h3>
          <p className="mb-[1rem] text-[1.2rem] text-center">
            We farm with both organic and conventional techniques and strive to
            produce food and fiber in the most ethical and environmentally
            friendly ways possible.
          </p>
          <p className="mb-[1rem] text-[1.2rem] text-center">
            We also manage habitat areas that are key resources for our local
            ecosystem as well as for migrating waterfowl. For us at Ifesowapo,
            “sustainability” is part of everything we do. Sustainability is not
            just a catch phrase for us, it is a way of life.
          </p>
        </motion.div>
      </div>
      <div className="w-max py-3 px-6 bg-primary text-white font-extrabold rounded-lg mx-auto mb-10 cursor-pointer hover:opacity-90 hover:scale-105 hover:shadow-md">
        <a href="/development">Development</a>
      </div>
    </section>
  );
};

export default SectionFour;
