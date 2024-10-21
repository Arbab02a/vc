'use client'


import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Hero from "./Hero";
import ClipOne from "./ClipOne";
import WebD from "./WebD";
import { Carousel } from "flowbite-react";

const Silder = () => {
  return (
    <motion.div className="h-[60rem] sm:h-[50rem] md:h-[48rem] lg:h-[46rem] xl:h-[46rem] 2xl:h-[46rem]" initial={{ x: -1600 }}
    animate={{ x: 0 }}
    transition={{ duration: 0.8 }}>
      <Carousel pauseOnHover>
        <Hero
        />
        <ClipOne
        />
          
      </Carousel>
    </motion.div>
  )
}

export default Silder
