"use client";

import { IoHeart } from "react-icons/io5";

interface FooterProps {}

function Footer({}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-white fixed  text-center  bottom-2 left-0 right-0">
      <div className="sm:flex sm:items-center sm:justify-between text-center mx-3">
        <p className="text-center md:flex rounded-full backdrop-blur-xl px-3 py-1">
          Designed &#38; Developed with <br />
          <IoHeart className="text-[#FF4ECD] animationpound w-7 h-7 mx-auto md:mx-1" />
          by
          <a
            target="_blank"
            href="https://github.com/ImKKingshuk"
            className="text-blue-500 ml-1"
          >
            @ImKKingshuk
          </a>
        </p>

        <p className="rounded-full backdrop-blur-xl px-3 py-1">
          &copy; {currentYear}, HyperDetectAI | All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
