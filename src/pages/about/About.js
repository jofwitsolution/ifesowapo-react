import React from "react";
import { Meta } from "../../components";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";

const about = () => {
  return (
    <div className="mt-[4.5rem]">
      <Meta title={"About - Ifesowapo CICS"} />
      <SectionOne />
      <SectionTwo />
    </div>
  );
};

export default about;
