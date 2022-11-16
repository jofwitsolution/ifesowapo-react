import React from "react";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";

// "mt-[8rem] md:mt-[15rem]"
const home = () => {
  return (
    <div className="mt-[4.5rem]">
      <SectionOne />
      <SectionTwo />
    </div>
  );
};

export default home;
