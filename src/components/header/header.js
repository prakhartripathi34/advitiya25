"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../../public/assests/images/logoMain.png";
import Svgg from "./designG";
import Svgw from "./designW";
import Link from "next/link";
import { motion } from "framer-motion";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { usePathname } from "next/navigation";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      disableBodyScroll(document.body);
    } else {
      enableBodyScroll(document.body);
    }

    // Cleanup to ensure scrolling is re-enabled when component unmounts
    return () => enableBodyScroll(document.body);
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <section className="bg-[#12181E] flex justify-between items-center px-[4%] py-[1.4%]">
        {/* Logo */}
        <div className="md:w-[17%] w-[45%] sm:w-[40%]">
          <div className="aspect-[895/127]">
            <Image
              src={logo}
              alt="Logo"
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        {/* Menu and Sign-In Buttons */}
        <div className="flex justify-center items-center">
          {!isOpen && (
            <Link href="/signin">
              <button className="text-white md:py-[2%] py-[1%] px-6 md:px-8 text-md lg:text-lg rounded-full bg-gradient-to-b from-[#43F27F] to-[#0A772F] mr-5">
                SIGN IN
              </button>
            </Link>
          )}

          {/* Menu Toggle */}
          <div className="relative">
            <button
              onClick={toggleMenu}
              className="text-white py-[2%] text-md md:text-lg mx-2 md:mx-4"
            >
              {isOpen ? "CLOSE" : "MENU"}
            </button>
            {isOpen && (
              <div className="bg-transparent/50 backdrop:blur-xl fixed inset-0 z-50 inset-y-[2.8rem] h-[calc(100vh-2.8rem)] md:inset-y-[4.3rem] md:h-[calc(100vh-4.3rem)] w-screen" onClick={toggleMenu}>

              </div>
            )}
            {isOpen && (
              <motion.div
              initial={{ opacity: 0, x: -150 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 70 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="fixed inset-0 inset-y-[2.8rem] h-[calc(100vh-2.8rem)] md:inset-y-[4.3rem] md:h-[calc(100vh-4.3rem)] md:w-2/5 w-screen bg-cover bg-[-15rem] bg-no-repeat flex flex-col justify-center items-center gap-6 z-50"
                style={{ backgroundImage: "url('/header/image.png')" }}
              >
                {/* <img
                  src="/header/design.png"
                  className="absolute top-1/3 hidden md:block -z-10 md:right-[10vw] xl:top-1/3 xl:left-[72vw] h-96"
                  alt="Background Design"
                /> */}

                {/* Menu Links */}
                <motion.div
                // initial={{ opacity: 0, x: -150 }}
                // animate={{ opacity: 1, x: 0 }}
                // exit={{ opacity: 0, x: 70 }}
                className="flex-col h-full w-full justify-start items-center text-white space-y-16">
                    <section className="w-full flex mt-32">
                        {pathname === "/" ? <Svgg /> : <Svgw />}
                        <Link
                          href="/"
                          onClick={toggleMenu}
                          className="text-3xl hover:text-green-400 px-10"
                        >
                            Home
                        </Link>
                    </section>
                  {[
                    { path: "/comingSoon", label: "Workshops" },
                    { path: "/events", label: "Events" },
                    { path: "/comingSoon", label: "Our Team" },
                    { path: "/contactus", label: "Contact Us" },
                  ].map((menuItem, index) => (
                    <section
                      className="w-full flex"
                      key={index}
                    >
                      {pathname === menuItem.path ? <Svgg /> : <Svgw />}
                      <Link
                        href={menuItem.path}
                        onClick={toggleMenu}
                        className="text-3xl hover:text-green-400 px-10"
                      >
                        {menuItem.label}
                      </Link>
                    </section>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
