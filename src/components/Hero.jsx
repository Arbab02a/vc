import React from "react";
import Link from "next/link";
import {
  FaEnvelopeOpenText,
  FaArrowRight,
  FaLaptopCode,
  FaRobot,
  FaCloud,
  FaCode,
} from "react-icons/fa"; // React icons for tech
import { SiNextdotjs, SiMongodb, SiTailwindcss } from "react-icons/si"; // Additional tech icons

const Hero = () => {
  return (
    <section className="text-gray-400 bg-[#000319] body-font">
      <div className="container mx-auto flex px-3 sm:px-5 pt-[3.5rem] md:pt-[5rem] items-center justify-center flex-col max-w-full">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 text-gray-200 animate-pulse leading-tight">
             Empowering Your Business with <br className="hidden sm:block" />{" "}
            Cutting-Edge Solutions! 
          </h1>
          <p className="text-base sm:text-lg md:text-2xl leading-relaxed mb-6 sm:mb-8 text-gray-100">
            At{" "}
            <span className="font-semibold text-blue-400">
               Virtual Crafters
            </span>
            , we know how important it is to capture the perfect moment for your
            business and clients. 🎯
          </p>
          <div className="flex justify-center items-center">
            <Link href="mailto:virtualcrafterstek@gmail.com">
              <button className="ml-0 sm:ml-4 mb-10 sm:mb-16 inline-flex items-center text-white bg-gradient-to-r from-[#000319] to-[#2c2f59] hover:from-[#000319] hover:to-[#424574] py-2 px-6 sm:py-3 sm:px-10 focus:outline-none rounded-full text-sm sm:text-lg transform hover:scale-105 transition-all duration-300">
                <FaEnvelopeOpenText className="mr-2 text-lg sm:text-xl animate-bounce" />
                Free Consultation
                <FaArrowRight className="ml-2 text-lg sm:text-xl" />
              </button>
            </Link>
          </div>
        </div>

        {/* Tech Icons with default colors */}
        <div className="mt-8 flex justify-center space-x-4 text-white">
          <FaLaptopCode
            className="text-blue-400 lg:text-6xl md:text-6xl sm:text-6xl text-5xl transform hover:scale-110 transition-transform duration-300"
            title="Coding"
          />
          <FaCloud
            className="text-blue-300 lg:text-6xl md:text-6xl sm:text-6xl text-5xl transform hover:scale-110 transition-transform duration-300"
            title="Cloud Technologies"
          />
          <FaRobot
            className="text-green-400 lg:text-6xl md:text-6xl sm:text-6xl text-5xl transform hover:scale-110 transition-transform duration-300"
            title="Automation"
          />
          <SiNextdotjs
            className="text-gray-300 lg:text-6xl md:text-6xl sm:text-6xl text-5xl transform hover:scale-110 transition-transform duration-300"
            title="Next.js"
          />
          <FaCode
            className="text-purple-400 lg:text-6xl md:text-6xl sm:text-6xl text-5xl transform hover:scale-110 transition-transform duration-300"
            title="Development"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
