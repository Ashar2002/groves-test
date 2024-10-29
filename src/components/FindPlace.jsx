import Image from "next/image";
import React from "react";
import ButtonLink from "./ButtonLink";

const FindPlace = () => {
  return (
    <div className="container md:pt-14 pt-[100px]">
      <div className="flex md:flex-row flex-col-reverse justify-center items-center md:gap-10">
        <div className="mapImg">
          <Image src="/images/map.png" width={677} height={553} className="sm:mt-0 -mt-5" alt="map" />
        </div>
        <div className="max-w-[350px]">
          <h4 className="pb-6 text-[13px] tracking-[2.6px]">
            EXPERIENCE THE GROVES
          </h4>
          <h2>Find Your Place</h2>
          <p className="max-w-[775px] mx-auto md:pt-5 pt-1 md:pb-10 pb-5">
            {`Our interactive map will show you the way to the shops and restaurants that you want to see.`}
          </p>
          <ButtonLink arrow classes="max-w-[232px] py-3 px-5 text-[15px]" link="#" text="Open the Map" />
        </div>
      </div>
    </div>
  );
};

export default FindPlace;
