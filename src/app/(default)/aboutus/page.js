"use client";
import React from "react";
import { Kodchasan } from "next/font/google";
import MemberList from "@/components/aboutus/Team/MemberList";
import "./aboutus.css";

const kodchasan = Kodchasan({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function AboutPage() {
  return (
    <div className={kodchasan.className}>
      {/* Header */}
      <section
        className="bg-cover bg-center h-[85vh] w-full bg-no-repeat relative"
        style={{
          backgroundImage: "url('/sponsors/sponserbg.png')",
          height: "765px",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#10171D]" />
        <div className="flex flex-col justify-center items-center h-full relative">
          <div
            className="text-white text-xl max-w-[15rem] tracking-wider bg-gradient-to-r from-green-500 to-transparent text-center rounded-full"
            style={{ padding: "10px 15px" }}
          >
            HOME • ABOUT US
          </div>
          <div className="text-white text-4xl md:text-6xl lg:text-8xl font-bold font-sans py-4">
            ABOUT US
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="team-members-section py-10">
        <MemberList />
      </section>

      <section
        className="bg-[#10171D] w-full"
        style={{ height: "50px" }}
      ></section>
    </div>
  );
}
