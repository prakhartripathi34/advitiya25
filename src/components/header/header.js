"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/assests/images/logoMain.png";
import arrow from "../../../public/assests/images/aboutusLogo.png";
import Menu from '../menu/page'
import Svgg from "./designG";
import Svgw from "./designW";
import Link from "next/link";
import { motion } from "framer-motion";
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
export default function Page() {
    const [isOpen, setIsOpen] = useState(false);
    if (isOpen) {
        disableBodyScroll(document.body);
    } else {
        enableBodyScroll(document.body);
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  return (
    // <div className="sticky top-0">
    <div>
      <section className="bg-[#12181E] flex justify-between items-center px-[4%] py-[1.4%]">
      <div className="w-[17%]">
  <div className="aspect-[895/127]">
    <Image
      src={logo}
      alt="../"
      className="object-contain w-full h-full"
    />
  </div>
</div>
         <div className="flex">
          {!isOpen&&<Link href="/signin"><button className="text-white py-[2%] px-8  text-lg rounded-full bg-gradient-to-b from-[#43F27F] to-[#0A772F] mr-5" >
            SIGN IN</button>
        </Link>}
         
          <div>
          <div className="relative">
      {/* Menu Button */}
      {!isOpen&& <button
        onClick={toggleMenu}
        className="text-white py-[2%]  text-lg mx-4"
      >
        MENU
      </button>
    }
    {isOpen&& <button
        onClick={toggleMenu}
        className="text-white py-[2%]  text-lg mx-4"
      >
        CLOSE
      </button>
    }
    
      {/* Full-Screen Popup */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.90 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-0 inset-y-[2.8rem] h-[calc(100vh-2.8rem)] md:inset-y-[4.3rem] md:h-[calc(100vh-4.3rem)] w-screen bg-cover bg-right bg-no-repeat flex flex-col justify-center items-center gap-6 z-50"
          style={{ backgroundImage: "url('/header/image.png')" }}>
            <img src="/header/design.png" className="absolute top-1/3 -z-10 md:right-[10vw] xl:top-1/3 xl:left-[72vw] h-96" />
          {/* Close Button */}
          {/* <button
            onClick={toggleMenu}
            className="absolute top-4 right-20 uppercase p-2 text-white rounded-full shadow-md "
          >
            Close
          </button> */}


          {/* Menu Items */}
          {/* <div className="text-center text-white space-y-4">
          <Link href="/" onClick={toggleMenu} className="text-3xl hover:text-green-400 px-10">Home</Link>
          <Link href="/comingSoon" onClick={toggleMenu} className="text-3xl hover:text-green-400 px-10">Workshops</Link>
          <Link href="/events" onClick={toggleMenu} className="text-3xl hover:text-green-400 px-10">Events</Link>
            <Link href="/comingSoon" onClick={toggleMenu} className="text-3xl hover:text-green-400 px-10">Our Team</Link>
            <Link href="/contactus" onClick={toggleMenu} className="text-3xl hover:text-green-400 px-10">Contact US</Link>
          </div> */}
          <div className="flex-col h-full w-full justify-start items-center text-white space-y-16">
          <section className="w-full mt-32 flex">
            <Svgg />
          <Link href="/" onClick={toggleMenu} className="text-3xl hover:text-green-400 px-10">Home</Link>
          </section>
          <section className="w-full flex">
            <Svgg />
          <Link href="/comingSoon" onClick={toggleMenu} className="text-3xl hover:text-green-400 px-10">Workshops</Link>
          </section>
          <section className="w-full flex">
            <Svgg />
          <Link href="/events" onClick={toggleMenu} className="text-3xl hover:text-green-400 px-10">Events</Link>
          </section>
          <section className="w-full flex">
            <Svgg/>
            <Link href="/comingSoon" onClick={toggleMenu} className="text-3xl hover:text-green-400 px-10">Our Team</Link>
            </section>
            <section className="w-full flex">
                <Svgg />
            <Link href="/contactus" onClick={toggleMenu} className="text-3xl hover:text-green-400 px-10">Contact US</Link>
            </section>
          </div>
        </motion.div>
      )}
    </div>
          </div>
        </div>
      </section>
    </div>
  );
}
