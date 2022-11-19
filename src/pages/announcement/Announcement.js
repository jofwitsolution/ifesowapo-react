import React from "react";
import { Meta } from "../../components";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";

const Announcement = () => {
  return (
    <div className="mt-[4rem] bg-white">
      <Meta title={"Announcement - Ifesowapo CICS"} />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
};

export default Announcement;
