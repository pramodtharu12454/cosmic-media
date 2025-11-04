"use client";

import Image from "next/image";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-0">
        {/* Left Side: Logo */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="mb-3">
            <Image
              src="/logo.png" // Replace with your logo path
              alt="Logo"
              width={260}
              height={128}
              style={{ objectFit: "contain" }}
            />
          </div>
          <p className="text-lg text-gray-400">
            Visualize your creative imagination
          </p>
        </div>

        {/* Right Side: Contact & Social */}
        <div className="flex flex-col md:items-end text-center md:text-right space-y-2">
          <h3 className="font-semibold text-lg">Contact Us</h3>
          <p>New Baneshwor, Kathmandu 44600, Nepal</p>
          <p>
            Email:{" "}
            <a
              href="mailto:conmicmedianepal@gmail.com"
              className="hover:text-blue-400"
            >
              conmicmedianepal@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+9779863402528" className="hover:text-blue-400">
              +977 9863402528
            </a>
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-2 justify-center md:justify-end">
            <a
              href="https://www.facebook.com/cosmicmediapvtltd"
              className="hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.youtube.com/@CosmicMedia"
              className="hover:text-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        © 2025 Cosmic Media Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
