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
    <div className="2xl:ml-[10vw] sliderContainer flex md:flex-row flex-col md:items-center gap-10 pt-16 md:pl-0 pl-6">
      {/* Heading Section */}
      <div className="w-full xl:min-w-[270px]">
        <h2 className="md:mb-10 mb-8">Curate your <br /> experience <br /> as you like</h2>
        <ButtonLink
          classes="md:py-4 py-3 sm:max-w-[350px] max-w-[300px] text-[15px] w-full pl-6 pr-4 mb-8"
          text="Book General Access Ticket"
          link="#"
          arrow
        />
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
