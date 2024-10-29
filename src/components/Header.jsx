"use client";
import Image from "next/image";
import React, { useState } from "react";
import ButtonLink from "./ButtonLink";
import Link from "next/link";

const NAV_ITEMS = [
  { text: "DINE WITH US", link: "#" },
  { text: "PLAN YOUR VISIT", link: "#" },
  { text: "EVENTS", link: "#" },
  { text: "VIEW GROVES MAP", link: "#" },
  { text: "OUR STORY", link: "#" },
  { text: "CONTACT US", link: "#" },
];

const Header = () => {
  const [res, setRes] = useState(false);

  const handleRes = () => {
    setRes(!res);
  };

  return (
    <header className="absolute z-50 top-0 left-0 w-full">
      <div className="container relative">
        <div
          className={`topbar flex items-center justify-between gap-10 pb-3 lg:pt-5 pt-4 lg:static z-10 ${
            res ? "fixed" : "absolute"
          } w-full top-0 left-0 lg:px-0 px-8`}
        >
          <div className="logo">
            <Image src="/images/logo.png" width={220} height={139} alt="" />
          </div>
          <div className="social_icons lg:flex hidden gap-6 items-center justify-between">
            <Image src="/images/tk.svg" className="hover:scale-125 transition-all" width={24} height={24} alt="" />
            <Image src="/images/insta.svg" className="hover:scale-125 transition-all" width={24} height={24} alt="" />
            <Image src="/images/x.svg" className="hover:scale-125 transition-all" width={24} height={24} alt="" />
            <Image src="/images/sp.svg" className="hover:scale-125 transition-all" width={24} height={24} alt="" />
            <ButtonLink
              text="Log in"
              link="#"
              classes="py-3 max-w-[142px] w-full px-10"
            />
            <button className="flex gap-3 items-center">
              <Image src="/images/drop.svg" width={14} height={8} alt="" />
              <Image src="/images/lang.png" width={33} height={22} alt="" />
              <span className="text-white">English</span>
            </button>
          </div>
          <div className="lg:hidden flex">
            {res ? (
              <Image
                src="/images/cancel.svg"
                width={24}
                height={24}
                alt=""
                onClick={handleRes}
              />
            ) : (
              <Image
                src="/images/menu.svg"
                width={24}
                height={24}
                alt=""
                onClick={handleRes}
              />
            )}
          </div>
        </div>
      </div>

      <div
        className={`navbar lg:border-y-[0.5px] border-y-white/50 lg:py-3 2xl:mt-5 lg:mt-3 lg:static fixed top-0 left-0 w-full h-full lg:bg-none ${
          res ? "block navbar-open" : "lg:block hidden"
        } bg-custom-gradient pt-28`}
      >
        <ul className="container flex lg:flex-row flex-col justify-between lg:items-center">
          {NAV_ITEMS.map((item, index) => (
            <li
              key={index}
              className="border-t-[0.5px] border-t-white/50 lg:border-0 lg:last:border-0 last:border-b-[0.5px] last:border-b-white/50 lg:py-0 py-4 lg:pl-0 pl-8"
            >
              <Link
                href={item.link}
                className="uppercase text-white hover:opacity-60 tracking-[2.6px] text-sm"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
        <div className="pl-8 pt-10 lg:hidden block h-full">
          <button className="flex gap-3 items-center mb-10">
            <Image src="/images/drop.svg" width={14} height={8} alt="" />
            <Image src="/images/lang.png" width={33} height={22} alt="" />
            <span className="text-white">English</span>
          </button>

          <ButtonLink
            text="Log in"
            link="#"
            classes="py-3 max-w-[142px] w-full px-10 block"
          />
          <div className="social_icons flex gap-6 items-center justify-between absolute bottom-10">
            <Image src="/images/tk.svg" width={24} height={24} alt="" />
            <Image src="/images/insta.svg" width={24} height={24} alt="" />
            <Image src="/images/x.svg" width={24} height={24} alt="" />
            <Image src="/images/sp.svg" width={24} height={24} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
