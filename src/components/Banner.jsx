"use client";

import React from "react";
import Header from "./Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import ButtonLink from "./ButtonLink";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: false,
};

const SlideContent = () => (
  <div className="overlay w-full h-full absolute z-2">
    <div className="container xl:pt-0 pt-20 flex justify-center items-start flex-col h-full">
      <div className="lg:grid lg:text-left grid-cols-2 w-full sm:px-0 px-8">
        <div className="sm:pt-10 lg:pt-0">
          <h4 className="pb-6 text-[13px] tracking-[2.6px]">KHAWAJA YANNI</h4>
          <h1 className="xl:text-[68px] text-[50px] font-playfair xl:leading-[76px] leading-[60px]">
            The new <br /> era of luxury
          </h1>
          <p className="pt-6 pb-10">
            Lorem Ipsum is simply dummy text of the printing and{" "}
            <br className="lg:block hidden" />
            typesetting industry. Lorem Ipsum.
          </p>
          <ButtonLink
            classes="py-4 max-w-[300px] w-full pl-6 pr-4"
            text="Book reservation now"
            link="#"
            arrow
          />
        </div>
      </div>
    </div>
  </div>
);

const Banner = () => (
  <div className="position-relative h-screen w-screen overflow-hidden">
    <Header />
    <div className="h-full">
      <Slider {...settings}>
        {[...Array(4)].map((_, index) => (
          <div key={index} className="relative">
            <SlideContent />
            <Image
              src="/images/home/home.png"
              alt={`Banner ${index + 1}`}
              width={1540}
              height={1080}
              className="object-cover w-full h-full min-h-screen object-center"
              priority
            />
          </div>
        ))}
      </Slider>
    </div>
  </div>
);

export default Banner;
