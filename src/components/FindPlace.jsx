import Image from "next/image";
import React from "react";
import ButtonLink from "./ButtonLink";

const FindPlace = () => {
  return (
    <div className="container">
      <div className="flex justify-center items-center gap-10">
        <div className="mapImg w-full">
          <Image src="/images/map.png" width={1000} height={1000} alt="map" />
        </div>
        <div className="">
          <h4 className="pb-6 text-[13px] tracking-[2.6px]">
            EXPERIENCE THE GROVES
          </h4>
          <h2>Find Your Place</h2>
          <p className="max-w-[775px] mx-auto pt-5 pb-10">
            {`Our interactive map will show you the way to the shops and restaurants that you want to see.`}
          </p>
          <ButtonLink arrow classes="max-w-[232px] py-3 px-5" link="#" text="Open the Map" />
        </div>
      </div>
    </div>
  );
};

export default FindPlace;
