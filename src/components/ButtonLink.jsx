import Image from "next/image";
import Link from "next/link";
import React from "react";

const ButtonLink = ({ link, classes, text,arrow }) => {
  return (
    <Link
      href={link}
      className={`${classes} ${arrow ? "flex justify-between items-center gap-5" : ""} rounded-2xl bg-gradient-to-b from-brown1 to-brown2 text-center text-white`}
    >
      {text}
      {arrow && (
        <Image src="/images/arrow.png" alt="arrow" width={26} height={19} className="md:w-7 h-auto" />
      )}
    </Link>
  );
};

export default ButtonLink;
