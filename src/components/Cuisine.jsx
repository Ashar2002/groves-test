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
  <div className="container xl:pt-[124px] pt-[90px]">
    <div className="text-center pb-16">
      <h2>Experience the Finest Cuisine</h2>
      <p className="max-w-[775px] mx-auto">
        {`Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`}
      </p>
    </div>

    <div className="grid grid-cols-2 gap-8">
      {cuisines.map((cuisine, index) => (
        <CuisineCard key={index} {...cuisine} />
      ))}
    </div>
  </div>
);

export default Cuisine;
