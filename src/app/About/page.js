"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaRocket, FaHandshake } from "react-icons/fa";
import { FiLayers } from "react-icons/fi";
import { BsGlobe, BsGraphUp } from "react-icons/bs";
import Image from "next/image";
import AboutUs from "/src/components/AboutUs.jsx";

import OurProcess from "/src/components/OurProcess.jsx";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.6,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
   <div className="bg-[#000319] text-gray-200 py-4">
      <div className="container mx-auto ">
      <section className="text-gray-400 body-font bg-gray-900">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
          Pitchfork Kickstarter Taxidermy
        </h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.
      </p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img className="h-96 rounded w-full object-cover object-center mb-6" src="/images/about.jpg" alt="content" />
        
          <h2 className="text-lg text-white font-medium title-font mb-4">Who we Are</h2>
          <p className="leading-relaxed text-base">
            Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content" />
          <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 className="text-lg text-white font-medium title-font mb-4">Colosseum Roma</h2>
          <p className="leading-relaxed text-base">
            Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content" />
          <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 className="text-lg text-white font-medium title-font mb-4">Great Pyramid of Giza</h2>
          <p className="leading-relaxed text-base">
            Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content" />
          <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 className="text-lg text-white font-medium title-font mb-4">San Francisco</h2>
          <p className="leading-relaxed text-base">
            Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      </div>
    </div>
  );
};

export default About;
