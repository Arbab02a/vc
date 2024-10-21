'use client';

import { useState } from "react";
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'; // Social Media Icons
import { motion } from 'framer-motion'; // Framer Motion for animations

const SocialMediaPricing = () => {
  return (
    <section className="text-gray-400 bg-[#000319] body-font overflow-hidden">
      <div className="container px-5 pb-8 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <motion.h2 
            className="text-4xl text-white font-extrabold title-font -mb-6 mt-12"
            whileHover={{ scale: 1.1, rotate: 3 }} // Animation on hover
            transition={{ type: 'spring', stiffness: 300 }}
          >
            📱 Social Media Marketing
          </motion.h2>
        </div>
        <div className="flex flex-wrap -m-4">
          {/* Pricing Cards */}
          <PricingCard
            title="Basic"
            price="$399.99"
            
            features={[
              "📱 1 Platform (i.e Facebook)",
              "🌐 FB page Optimization (Creation & management)",
              "📝 2 posts a week",       
              "📈 2 FB posts boost/month",
              "📊 Monthly activity report",
              "🎨 Facebook Cover Design",
              "🖼 Graphic designing of images"
            ]}
            buttonText="Order Now"
            buttonStyle="bg-gray-800 hover:bg-gray-700"
          />
          <PricingCard
            title="Standard"
            price="$599.99"
         
            features={[
              "📱 2 Platforms (i.e FB & Instagram)",
              "🌐 Optimize both pages (Creation & management)",
              "📝 4 posts a week",                       
              "🎨 Content creation",
              "📈 4 FB posts boost/month",
              "📊 Monthly activity report",
              "🎨 Facebook Cover Design",
              "🖼 Graphic designing of images",
              "💬 Response on messages/comments"
            ]}
            buttonText="Order Now"
            buttonStyle="bg-gray-800 hover:bg-gray-700"
          />
          <PricingCard
            title="Premium"
            price="$699.99"
           
            features={[
              "📱 3 Platforms (i.e FB, Instagram & Twitter/YouTube)",
              "🌐 Optimize all pages (Creation & management)",
              "📝 Daily posting",                    
              "🎨 Content creation",
              "📈 8 FB posts boost/month",
              "📊 Monthly activity report",
              "🎨 Facebook Cover Design",
              "🖼 Graphic designing of images",
              "💬 Response on messages/comments",
              "💰 Advertising"
            ]}
            buttonText="Order Now"
            buttonStyle="bg-gray-800 hover:bg-gray-700"
          />
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ title, price, features, icon, buttonText, buttonStyle }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <motion.div 
      className="p-4 md:w-1/2 w-full hover:cursor-pointer"
      whileHover={{ scale: 1.05 }} // Scale animation on hover
    >
      <div className="h-full p-6 rounded-lg flex flex-col relative overflow-hidden border-gray-700">
        {icon && (
          <div className="text-3xl mb-4">{icon}</div> // Displaying the icon
        )}
        <h2 className="lg:text-2xl sm:text-3xl sm:mb-2 tracking-widest text-gray-400 title-font mb-1 font-medium">📱 {title}</h2>
        <h1 className="lg:text-2xl sm:text-2xl text-white pb-4 mb-4 border-b border-gray-800 leading-none">💵 {price}</h1>
        {features.slice(0, expanded ? features.length : 5).map((feature, index) => (
          <p key={index} className="flex items-center text-gray-400 mb-2">
            {feature}
          </p>
        ))}
        {features.length > 5 && (
          <button
            className="text-indigo-500 mt-3"
            onClick={toggleExpanded}
          >
            {expanded ? "Read Less" : "Read More"} 📖
          </button>
        )}
        <Link href="mailto:info@virtualcrafterstek.com">
          <motion.button
            className={`flex items-center mt-auto justify-center ${buttonStyle} border-0 py-2 px-4 w-full focus:outline-none rounded-full text-center`}
            whileHover={{ scale: 1.1 }} // Button hover effect
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {buttonText} ✉️
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default SocialMediaPricing;
