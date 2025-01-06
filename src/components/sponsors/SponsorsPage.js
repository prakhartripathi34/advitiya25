"use client";

import React from "react";
import Image from "next/image";
import SlidingLogos from "./SlidingLogos";
import { Kodchasan } from "next/font/google";

const kodchasan = Kodchasan({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function SponsorsPage() {
  // name logos as logo1.png, logo2.png, ......
  const logoCount = 16; // Here enter the number of total unique logos and store logos in companylogos folder under public/sponsors

  return (
    <div className={kodchasan.className}>
      {/* Header */}
      <section
        className="bg-cover bg-center h-[60vh] w-full bg-no-repeat relative"
        style={{
          backgroundImage: "url('/sponsors/sponserbg.png')",
          height: "765px",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#10171D]" />
        <div className="flex flex-col justify-center items-center h-full relative px-4 text-center">
          <div className="text-white text-lg md:text-xl bg-gradient-to-r from-green-500 to-transparent text-center rounded-full px-4 py-2">
            HOME • SPONSORS
          </div>
          <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-bold font-sans py-4">
            SPONSORS
          </h1>
        </div>
      </section>

      <section
        className="relative w-full bg-[#121720] py-8 md:py-16 overflow-hidden"
        style={{ perspective: "1000px" }}
      >
        {/* Sliding Logos */}
        <div
          className="relative"
          style={{
            transform: "translateZ(50px)",
          }}
        >
          <SlidingLogos logoCount={logoCount} />
          <div className="mt-4 md:mt-8">
            <SlidingLogos logoCount={logoCount} direction="reverse" />
          </div>
        </div>

        {/* Floor Image */}
        <div
          className="relative mx-auto"
          style={{
            width: "100%",
            height: "200px",
            bottom: "100px",
            opacity: "0.6",
            zIndex: "-1",
          }}
        >
          <Image
            src="/sponsors/bg.svg"
            alt="Background Floor"
            width={1920}
            height={500}
            className="w-full h-full"
          />
        </div>
      </section>
      <section
        className="bg-[#10171D] w-full"
        style={{ height: "50px" }}
      ></section>
    </div>
  );
}
