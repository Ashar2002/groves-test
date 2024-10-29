"use client";
import React from "react";
import ButtonLink from "./ButtonLink";
import Slider from "react-slick";
import Image from "next/image";

const AttractionSlider = () => {
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    pauseOnHover: false,
    lazyLoad: true,
    infinite: true,
  };

  return (
    <>
      <div className="container md:pt-[100px] pt-12 sm:px-0 px-4">
        <h2 className="pb-10">
          Book General Access ticket and <br className="md:block hidden" /> enjoy the attractions for free
        </h2>
        <ButtonLink
          classes="py-4 sm:max-w-[350px] max-w-[300px] text-[15px] w-full pl-6 pr-4"
          text="Book General Access Ticket"
          link="#"
          arrow
        />
      </div>

      {/* Slider Section */}
      <div className="pt-16">
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
            <h3 className="text-center pt-5">Hawanim <br /> Groves City</h3>
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
    </>
  );
};

export default AttractionSlider;
