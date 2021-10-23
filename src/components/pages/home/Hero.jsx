import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import banner from "../../../images/banner.jpg";
import banner1 from "../../../images/banner1.jpg";
const Hero = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="mt-14">
      <Carousel activeIndex={index} onSelect={handleSelect} className="h-96">
        <Carousel.Item className="h-96">
          <img
            className="d-block w-full h-full lg:h-96"
            style={{ objectFit: "cover" }}
            src={banner}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className="h-96">
          <img
            className="d-block w-full h-full lg:h-96"
            style={{ objectFit: "cover" }}
            src={banner1}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hero;
