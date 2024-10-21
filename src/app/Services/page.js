'use client';

import React, { useState } from 'react';
import WebPricing from '/src/components/WebPricing.jsx';
import LogoPricing from '/src/components/LogoPricing.jsx';
import SocialMediaPricing from '/src/components/SocialMediaPricing.jsx';
import SEOPricing from '/src/components/SEOPricing.jsx';
import { motion } from 'framer-motion';

const Services = () => {
  const [selectedService, setSelectedService] = useState('All');

  const renderService = () => {
    switch (selectedService) {
      case 'Web':
        return <WebPricing />;
      case 'Logo':
        return <LogoPricing />;
      case 'Social Media':
        return <SocialMediaPricing />;
      case 'SEO':
        return <SEOPricing />;
      default:
        return (
          <>
            <WebPricing />
            <LogoPricing />
            <SocialMediaPricing />
            <SEOPricing />
          </>
        );
    }
  };

  return (
    <section className="bg-[#000319] text-gray-200 body-font py-10 px-5 lg:px-20">
        <motion.h1
  className="text-4xl text-center mb-10 -mt-4 sm:text-5xl md:text-6xl font-bold text-white title-font my-4"
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
 Services 
</motion.h1>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out transform ${
            selectedService === 'All'
              ? 'bg-gradient-to-r from-[#000319] to-[#424574] text-white scale-105 shadow-lg'
              : 'bg-gradient-to-r from-[#000319] to-[#2c2f59] text-gray-300 hover:bg-gray-700 hover:scale-105'
          }`}
          onClick={() => setSelectedService('All')}
        >
          All Services
        </button>
        <button
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out transform ${
            selectedService === 'Web'
              ? 'bg-gradient-to-r from-[#000319] to-[#424574] text-white scale-105 shadow-lg'
              : 'bg-gradient-to-r from-[#000319] to-[#2c2f59] text-gray-300 hover:bg-gray-700 hover:scale-105'
          }`}
          onClick={() => setSelectedService('Web')}
        >
          Web Pricing
        </button>
        <button
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out transform ${
            selectedService === 'Logo'
              ? 'bg-gradient-to-r from-[#000319] to-[#424574] text-white scale-105 shadow-lg'
              : 'bg-gradient-to-r from-[#000319] to-[#2c2f59] hover:bg-gray-700 hover:scale-105'
          }`}
          onClick={() => setSelectedService('Logo')}
        >
          Logo Pricing
        </button>
        <button
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out transform ${
            selectedService === 'Social Media'
              ? 'bg-gradient-to-r from-[#000319] to-[#424574] text-white scale-105 shadow-lg'
              : 'bg-gradient-to-r from-[#000319] to-[#2c2f59] text-gray-300 hover:bg-gray-700 hover:scale-105'
          }`}
          onClick={() => setSelectedService('Social Media')}
        >
          Social Media Pricing
        </button>
        <button
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out transform ${
            selectedService === 'SEO'
              ? 'bg-gradient-to-r from-[#000319] to-[#424574] text-white scale-105 shadow-lg'
              : 'bg-gradient-to-r from-[#000319] to-[#2c2f59] text-gray-300 hover:bg-gray-700 hover:scale-105'
          }`}
          onClick={() => setSelectedService('SEO')}
        >
          SEO Pricing
        </button>
      </div>

      {/* Pricing Components */}
      <motion.div
        className="container mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {renderService()}
        
      </motion.div>
    
    </section>
  );
};

export default Services;
