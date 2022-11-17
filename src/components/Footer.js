import React from "react";
import { motion } from "framer-motion";

import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="px-4 md:px-[8%] pt-[8%]">
      <div className="mb-10 md:mb-20">
        <h3 className="text-primary font-semibold text-[1.3rem]">
          IFESOWAPO CICS
        </h3>
      </div>
      <div className="flex flex-col md:flex-row gap-5 justify-start items-start md:w-[40%] md:justify-between">
        <motion.div
          className="flex gap-3 mb-5 md:mb-0"
          whileInView={{ opacity: [0, 1], y: [-40, 0] }}
          transition={{ duration: 1, type: "tween" }}
        >
          <a href="http://www.instagram.com" target={"_blank"} rel="noreferrer">
            <AiOutlineInstagram fontSize={35} />
          </a>
          <a href="http://www.facebook.com" target={"_blank"} rel="noreferrer">
            <AiOutlineFacebook fontSize={35} />
          </a>
          <a href="http://www.twitter.com" target={"_blank"} rel="noreferrer">
            <AiOutlineTwitter fontSize={35} />
          </a>
          <a href="http://www.youtube.com" target={"_blank"} rel="noreferrer">
            <AiOutlineYoutube fontSize={35} />
          </a>
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1], y: [40, 0] }}
          transition={{ duration: 1, type: "tween" }}
        >
          <h4 className="text-primary border-b-4 border-primary w-max mb-2">
            General enquiries
          </h4>
          <a href="mailto: info@ifesowapocics.com">info@ifesowapocics.com</a>{" "}
          <br />
          <a href="tel: +2347012338209" className="mt-2 inline-block">
            070 1233 8209
          </a>
        </motion.div>
      </div>
      <div className="text-center mt-20 mb-1">
        <span className="font-semibold">&copy; 2022 Ifesowapo</span>
      </div>
    </footer>
  );
};

export default Footer;
