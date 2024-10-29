// pages/cuisine.js
import React from "react";
import CuisineCard from "./CuisineCard";

const cuisines = [
  {
    title: "Vida Vera",
    imageSrc: "/images/cuisine/1.png",
    price: "100 SR PER GUEST",
  },
  {
    title: "Zama Zulu",
    imageSrc: "/images/cuisine/2.png",
    price: "100 SR PER GUEST",
  },
  {
    title: "Khawaja Yanni",
    imageSrc: "/images/cuisine/3.png",
    price: "100 SR PER GUEST",
  },
  {
    title: "Yamagata",
    imageSrc: "/images/cuisine/4.png",
    price: "100 SR PER GUEST",
  },
];

const Cuisine = () => (
  <div className="container md:px-0 px-6 xl:pt-[124px] md:pt-[90px] pt-12">
    <div className="md:text-center text-left md:pb-16 pb-8">
      <h2>Experience the <br className="md:hidden block" /> Finest Cuisine</h2>
      <p className="max-w-[775px] mx-auto md:block hidden">
        {`Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`}
      </p>
    </div>

    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-3">
      {cuisines.map((cuisine, index) => (
        <CuisineCard key={index} {...cuisine} />
      ))}
    </div>
  </div>
);

export default Cuisine;
