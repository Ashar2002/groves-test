import Image from "next/image";
import React from "react";

const CuisineCard = ({ title, imageSrc, price }) => (
  <div className="w-full pt-3 px-3 pb-11 bg-white/5 rounded-[38px]">
    <Image
      src={imageSrc}
      alt={`Cuisine - ${title}`}
      width={508}
      height={304}
      className="w-full h-auto object-cover"
      priority
    />
    <div className="flex justify-between items-center w-full px-5">
      <div className="w-full">
        <h3 className="py-4">{title}</h3>
        <div className="bg-brown1 w-fit rounded-3xl py-2 px-6 text-[13px] tracking-[2.6px]">
          {price}
        </div>
      </div>
      <Image
        src="/images/arrow.png"
        width={37}
        height={27}
        alt="Arrow Icon"
        aria-hidden="true"
      />
    </div>
  </div>
);

export default CuisineCard;
