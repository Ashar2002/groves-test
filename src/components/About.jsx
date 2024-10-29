import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="container md:pt-32 pt-10">
      <div className="text-center md:px-0 px-4">
        <h2 className="pb-2">Mall Of: Endless Possibilities</h2>
        <p className="max-w-[775px] mx-auto md:pb-14 pb-10">
          {`Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.`}
        </p>

        <div className="relative video_player">
          <Image
            src="/images/home/1.png"
            width={904}
            height={500}
            alt="video"
            className="mx-auto"
            priority
          />
          <button className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full sm:w-[75px] w-12 h-12 sm:h-[75px] flex items-center justify-center">
            <Image
              src="/images/video.png"
              width={29}
              height={34}
              alt="play"
              className="sm:-mr-2 -mr-1 sm:w-fit w-5"
            />
          </button>
        </div>

        <div className="access max-w-[904px] mx-auto mt-7 bg-white/5 pt-10 md:pb-16 pb-8 rounded-[25px] text-left px-8 md:flex justify-between items-center">
          <div className="max-w-[610px]">
            <h4 className="tracking-[2.6px] text-[13px] pb-6">25 SR/GUEST</h4>
            <h3 className="pb-4">Get your General Access Ticket</h3>
            <p className="text-[15px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text.
            </p>
          </div>
          <Image
            src="/images/arrow.png"
            width={40}
            height={29}
            alt="arrow"
            className="ml-auto md:mt-0 mt-10 md:max-w-fit max-w-[30px]"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default About;
