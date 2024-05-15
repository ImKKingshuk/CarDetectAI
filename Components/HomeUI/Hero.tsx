"use client";

import Link from "next/link";
import StarGrid from "./StarGrid";

interface HeroProps {}

function Hero({}: HeroProps) {
  return (
    <div className="">
      <div className="mx-auto">
        <StarGrid />
        <h1 className="text-center tracking-wide select-no shine  overflow-hidden bg-gradient-to-b from-gray-400 to-white bg-clip-text font-bold text-[2.5rem] md:text-[4.5rem] ">
          CarDetect
          <span className="pl-1 tracking-[.10em] bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text font-bold text-transparent">
            AI
          </span>
        </h1>
      </div>
      <div className="pt-[8rem] flex justify-center items-center ">
        <Link href="/DetectionApp">
          <button className="hover:scale-110 duration-500 relative inline-flex  overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-3 focus:ring-slate-400 focus:ring-offset-3 focus:ring-offset-slate-50">
            <span className=" absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#30b1fc_50%,#ed67fb_100%)]" />
            <span className="text-md md:text-xl font-medium px-3 py-1 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full  bg-black   backdrop-blur-3xl text-white">
              Enter dApp
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
