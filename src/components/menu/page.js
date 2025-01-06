"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Menu Button */}
      <button onClick={toggleMenu} className="text-white py-[2%]  text-lg mx-4">
        MENU
      </button>

      {/* Full-Screen Popup */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center gap-6 z-50"
        >
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded-full shadow-md"
          >
            Close
          </button>

          {/* Menu Items */}
          <div className="text-center text-white space-y-4">
            <Link
              href="/"
              onClick={toggleMenu}
              className="text-3xl hover:text-green-400 px-10"
            >
              Home
            </Link>
            <Link
              href="/comingSoon"
              onClick={toggleMenu}
              className="text-3xl hover:text-green-400 px-10"
            >
              Workshops
            </Link>
            <Link
              href="/events"
              onClick={toggleMenu}
              className="text-3xl hover:text-green-400 px-10"
            >
              Events
            </Link>
            <Link
              href="/sponsors"
              onClick={toggleMenu}
              className="text-3xl hover:text-green-400 px-10"
            >
              Sponsors
            </Link>
            <Link
              href="/aboutus"
              onClick={toggleMenu}
              className="text-3xl hover:text-green-400 px-10"
            >
              About Us
            </Link>
            <Link
              href="/contactus"
              onClick={toggleMenu}
              className="text-3xl hover:text-green-400 px-10"
            >
              Contact US
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
}
