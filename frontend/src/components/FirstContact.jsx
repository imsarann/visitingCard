import React from "react";
import CallSvg from "./CallSvg";
import QuoteSvg from "./QuoteSvg";
import { motion } from "motion/react";

export default function FirstContact() {
  return (
    <div className="flex items-center justify-center gap-3 sm:gap-4 py-3 flex-wrap">
      <button className="flex items-center group gap-2 rounded-full border border-dashed border-yellow-500 bg-white text-yellow-600 px-[3vw] py-[2vw] md:py-[5px] md:px-[25px] text-sm sm:text-base hover:bg-yellow-500 hover:text-white hover:border-white hover:border-solid transition duration-300">
        <CallSvg className=" " />
        <span className="font-medium">Call Now</span>
      </button>

      <button className="flex items-center group gap-2 rounded-full border border-dashed border-yellow-500 bg-white text-yellow-600 px-[3vw] py-[2vw] md:py-[5px] md:px-[25px] text-sm sm:text-base hover:bg-yellow-500 hover:text-white hover:border-white hover:border-solid transition duration-300">
        <QuoteSvg className=" " />
        <span className="font-medium">Get Quote</span>
      </button>
    </div>
  );
}
