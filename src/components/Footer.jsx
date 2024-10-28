import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-t-white/40 pt-16">
      <div className="container">
        <div className="flex items-center justify-between">
          <h2>
            Join us for an <br /> unforgettable experience
          </h2>
          <div>
            <h4 className="text-[13px] tracking-[2.6px] pb-6">
              DOWNLOAD THE GROVES APP
            </h4>
            <div className="flex gap-5 w-full">
              <Image
                className="object-contain"
                src="/images/appstore.png"
                alt="App Store"
                width={150}
                height={50}
              />
              <Image
                className="object-contain"
                src="/images/playstore.png"
                alt="Google Play"
                width={170}
                height={50}
              />
            </div>
          </div>
        </div>
        <div className="w-full max-w-[80%] flex justify-between pt-20">
          <div className="max-w-[250px] w-full">
            <h4 className="text-[13px] uppercase pb-4 tracking-[2.6px]">
              LOCATION
            </h4>
            <p className="leading-[23px]">
              Al-Hizam Park <br /> Al-Semairi, Yanbu Al Bahr 46455 <br /> Riyadh
              Saudi Arabia
            </p>
          </div>
          <div className="max-w-[250px] w-full">
            <h4 className="text-[13px] uppercase pb-4 tracking-[2.6px]">
              WORKING HOURS
            </h4>
            <p className="leading-[23px]">
              Sun until Thurs: 4:00PM <br /> Fri & Sat: 2:30PM <br /> <br />{" "}
              Gates Close at: Sat until Wed: 12:00AM Thu & Fri: 12:30AM
            </p>
          </div>
          <div className="max-w-[250px] w-full">
            <h4 className="text-[13px] uppercase pb-4 tracking-[2.6px]">
              LOCATION
            </h4>
            <p className="leading-[23px]">
              cc@thegroves-sa.com <br /> 920001672 <br /> <br /> +966556631309
            </p>
          </div>
        </div>
        <div className="footer_bottom md:pt-[73px]">
          <div className="flex items-center justify-between">
            <Image src="/images/logo.png" alt="Logo" width={286} height={65} />
            <div className="flex items-center justify-between gap-7">
              <Image src="/images/tk.svg" width={24} height={24} alt="" />
              <Image src="/images/insta.svg" width={24} height={24} alt="" />
              <Image src="/images/x.svg" width={24} height={24} alt="" />
              <Image src="/images/sp.svg" width={24} height={24} alt="" />
            </div>
          </div>
        </div>
        <div className="footer_bottom md:pt-[52px] pb-12">
          <div className="flex items-center justify-between">
            <ul className="flex gap-10 items-center">
              <li className="md:text-[15px] text-[13px]"><Link href="#">Terms & Conditions</Link></li>
              <li className="md:text-[15px] text-[13px]"><Link href="#">Privacy Policy</Link></li>
              <li className="md:text-[15px] text-[13px]">©2023 The Groves for Entertainment</li>
            </ul>
            <div className="flex items-center justify-between gap-2">
              <Image src="/images/pay/1.svg" width={43} height={14} alt="" />
              <Image src="/images/pay/2.png" width={31} height={31} alt="" />
              <Image src="/images/pay/3.png" width={26} height={26} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
