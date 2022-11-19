import React from "react";

import { Meta } from "../../components";
import "./Home.scss";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";
import SectionSix from "./components/SectionSix";

// "mt-[8rem] md:mt-[15rem]"
const home = () => {
  return (
    <div className="mt-[4.5rem]">
      <Meta />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </div>
  );
};

export default home;
