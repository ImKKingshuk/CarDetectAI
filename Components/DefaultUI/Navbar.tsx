"use client";

import Link from "next/link";

interface NavbarProps {}

function Navbar({}: NavbarProps) {
  return (
    <div>
      <div className="w-full fixed  z-40 top-2 flex justify-between  md:rounded-full rounded-b-3xl  px-4 md:px-12 py-auto">
        <button className="p-3 rounded-full backdrop-blur-xl tracking-wide select-no shine  overflow-hidden bg-gradient-to-b from-gray-400 to-white bg-clip-text font-bold text-2xl md:text-[2rem]  ">
          CarDetect
          <span className="pl-1 tracking-[.10em] bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text font-bold text-transparent">
            AI
          </span>
        </button>

        <Link href="/DetectionApp">
          <button className="backdrop-blur-xl relative inline-flex h-fit w-fit rounded-full border border-blue-100/20  px-4 py-2 text-yellow-300 hover:text-blue-500 outline-none ring-yellow-500 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-yellow-300 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-yellow-200/40  after:hover:bg-opacity-15 focus:ring-2">
            Login / Signup
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
