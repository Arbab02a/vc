'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <motion.header 
      className="text-white bg-[#000319]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="lg:text-2xl  container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <motion.div 
          className="flex-shrink-0 pt-1"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/logo.png"
            width={110}
            height={110}
            alt="Logo"
          />
        </motion.div>

        <motion.nav 
          className="md:ml-auto md:mr-auto flex flex-wrap items-center text-lg justify-center"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link className="lg:text-xl mr-5 hover:text-purple-400 transition duration-300" href="/">Home</Link>
          <Link className="lg:text-xl mr-5 hover:text-purple-400 transition duration-300" href="/About">About</Link>
          <Link className="lg:text-xl mr-5 hover:text-purple-400 transition duration-300" href="/Portfolio">Portfolio</Link>
          <Link className="lg:text-xl mr-5 hover:text-purple-400 transition duration-300" href="/Services">Services</Link>
          <Link className="lg:text-xl mr-[-2rem] hover:text-purple-400 transition duration-300" href="/Contact">Contact Us</Link>
        </motion.nav>

        <Link href="mailto:info@virtualcrafterstek.com"><motion.button 
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 transition duration-300"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
        info@virtualcrafterstek.com
          
        </motion.button></Link>
      </div>
    </motion.header>
  );
};

export default Navbar;
