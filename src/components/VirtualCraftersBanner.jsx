"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const VirtualCraftersBanner = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        yoyo: Infinity,
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className=" bg-[#000319] body-font font-medium"
    >
      <div className="container mx-auto flex px-4 py-6 md:flex-row flex-col items-center">
        <motion.div
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          variants={containerVariants}
        >
          <motion.h1
            className="text-5xl font-extrabold mb-6 text-gray-300"
            variants={childVariants}
          >
           Learn to live in Future with&nbsp;
            <br className="hidden lg:inline-block" />
               Our Advance  <span className='text-[#3247e2]'> Virtual Crafters </span>Services!
          </motion.h1>
          <motion.p className="mb-8 leading-relaxed text-lg text-justify text-gray-400" variants={childVariants}>
          At Virtual Crafters, we are passionate about crafting innovative software solutions that drive business success. As a forward-thinking software company, we specialize in developing cutting-edge technology that empowers businesses to streamline operations, enhance customer experiences, and unlock their full potential.
         
          <Link href='/contact'><button className='block rounded-3xl  mt-5 text-black bg-gray-300 py-2 px-8'>Join Our Team </button></Link>
          </motion.p>
          <motion.div className="flex justify-center" variants={childVariants}>
            {/* <motion.button
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              variants={buttonVariants}
              whileHover="hover"
            >
              Button
            </motion.button> */}
            {/* <motion.button
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              variants={buttonVariants}
              whileHover="hover"
            >
              Button
            </motion.button> */}
          </motion.div>
        </motion.div>
        <motion.div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Image
            className="slide object-cover object-center rounded hero"
            alt="hero"
            src="/images/slide.png"
            width={600}
            height={600}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VirtualCraftersBanner;