import Image from "next/image";
import React from "react";

const CuisineCard = ({ title, imageSrc, price }) => (
  <div className="w-full md:pt-3 pt-2 md:px-3 px-2 md:pb-11 pb-5 bg-white/5 rounded-[38px]">
    <Image
      src={imageSrc}
      alt={`Cuisine - ${title}`}
      width={508}
      height={304}
      className="w-full h-auto object-cover rounded-t-[32px]"
      priority
    />
    <div className="flex justify-between items-center w-full px-5">
      <div className="w-full">
        <h3 className="md:py-4 py-2">{title}</h3>
        <div className="bg-brown1 w-fit rounded-3xl md:py-2 py-1 md:px-6 px-3 md:text-[13px] text-[8px] tracking-[2.6px]">
          {price}
        </div>
      </div>
      <Image
        src="/images/arrow.png"
        width={37}
        height={27}
        alt="Arrow Icon"
        aria-hidden="true"
        className="md:w-9 w-6"
      />
    </div>
  </div>
);

export default CuisineCard;
