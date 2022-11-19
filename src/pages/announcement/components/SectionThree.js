import React from "react";
import Slider from "@madzadev/image-slider";
import "@madzadev/image-slider/dist/index.css";

import pic2 from "../../../assets/images/pic-2.jpeg";
import pic3 from "../../../assets/images/pic-3.jpeg";
import pic4 from "../../../assets/images/pic-4.jpeg";
import pic5 from "../../../assets/images/pic-5.jpeg";
import pic9 from "../../../assets/images/pic-9.jpeg";
import pic10 from "../../../assets/images/pic-10.jpeg";
import pic12 from "../../../assets/images/pic-12.jpeg";

const images = [
  { url: pic2 },
  { url: pic3 },
  { url: pic4 },
  { url: pic5 },
  { url: pic9 },
  { url: pic10 },
  { url: pic12 },
];

const SectionThree = () => {
  return (
    <section className="px-4 md:w-[85%] md:mx-auto py-[2rem] md:py-[2%] text-black flex justify-center items-center">
      <div className="">
        <h3 className="jof-header-3-primary text-center my-4">Site Gallery</h3>
        <Slider imageList={images} width={900} height={500} />
      </div>
    </section>
  );
};

export default SectionThree;
