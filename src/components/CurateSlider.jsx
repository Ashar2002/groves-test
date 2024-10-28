"use client";
import React from "react";
import ButtonLink from "./ButtonLink";
import Image from "next/image";
import Slider from "react-slick";

const CurateSlider = () => {
  const settings = {
    className: "slider curatedslider",
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: false,
  };

  return (
    <div className="2xl:ml-[10vw] sliderContainer flex items-center gap-10 pt-16">
      {/* Heading Section */}
      <div className="max-w-[270px] w-full xl:min-w-[270px]">
        <h2 className="">Curate your experience as you like</h2>
        {/* <ButtonLink /> */}
      </div>

      <div className="w-full">
        <Slider {...settings}>
          {/* Slide 1 */}
          <div className="slide-item">
            <Image
              src="/images/slider1/4.png"
              alt="Little Krazy"
              width={385}
              height={526}
              className="slide-image"
            />
            <h3 className="text-center pt-5">Little Krazy</h3>
          </div>

          {/* Slide 2 */}
          <div className="slide-item">
            <Image
              src="/images/slider1/2.png"
              alt="Hawanim Groves City"
              width={228}
              height={322}
              className="slide-image"
            />
            <h3 className="text-center pt-5">
              Hawanim <br /> Groves City
            </h3>
          </div>

          {/* Slide 3 */}
          <div className="slide-item">
            <Image
              src="/images/slider1/8.png"
              alt="Picnic Market"
              width={385}
              height={526}
              className="slide-image"
            />
            <h3 className="text-center pt-5">Picnic Market</h3>
          </div>

          {/* Slide 4 */}
          <div className="slide-item">
            <Image
              src="/images/slider1/3.png"
              alt="Lucaworld"
              width={167}
              height={402}
              className="slide-image"
            />
            <h3 className="text-center pt-5">Lucaworld</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CurateSlider;
