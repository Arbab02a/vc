'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaPaintBrush, FaCrown, FaRocket } from 'react-icons/fa'; // Importing icons
import { motion } from 'framer-motion'; // Framer Motion for animations

const LogoPricing = () => {
  return (
    <section className="text-gray-400 bg-[#000319] body-font overflow-hidden">
      <div className="container px-5 pb-8 mx-auto">
        <div className="flex flex-col text-center w-full mb-20 bg-b">
          <motion.h2 
            className="text-4xl font-extrabold text-white title-font -mb-6 mt-12"
            whileHover={{ scale: 1.1, rotate: 3 }} // Adding animation on hover
            transition={{ type: 'spring', stiffness: 300 }}
          >
            🎨 Logo Designing Services
          </motion.h2>
        </div>
        <div className="flex flex-wrap -m-4 ">
          {/* Pricing Cards */}
          <PricingCard
            title="Basic Logo Package"
            price="$49.99"
        
            features={[
              "🎨 2 Custom Logo Design Concepts",
              "👩‍🎨 1 Dedicated Designer",            
              "🔁 3 Revisions",                           
              "📁 All Final Files Format (AI, EPS, PNG, JPG)",      
              "🚀 Complete Deployment",
              "📝 Dedicated Accounts Manager",
              "💼 100% Ownership Rights",
              "😊 100% Satisfaction Guarantee",
              "🛡 100% Unique Design Guarantee",
              "💸 100% Money Back Guarantee *"
            ]}
            buttonText="Order Now"
            buttonStyle="bg-gray-800 hover:bg-gray-700"
          />
          <PricingCard
            title="Start Up Logo Package"
            price="$119.99"
         
            features={[
              "🚀 4 Custom Logo Design Concepts By 1 Designer",
              "🌟 FREE Icon",             
              "💳 FREE Business Card Design",
              "🔁 UNLIMITED Revisions",
              "📁 All Final Files Format (AI, EPS, PNG, JPG, PDF)",   
              "🚀 Complete Deployment",
              "📝 Dedicated Accounts Manager",
              "💼 100% Ownership Rights",
              "😊 100% Satisfaction Guarantee",
              "🛡 100% Unique Design Guarantee"
            ]}
            buttonText="Order Now"
            buttonStyle="bg-gray-800 hover:bg-gray-700"
          />
          <PricingCard
            title="Professional Logo Package"
            price="$149.99"
          
            features={[
              "👑 UNLIMITED Logo Design Concepts By 05 Designers",
              "🔁 UNLIMITED Revisions",
              "📂 FREE Stationary Design Set",
              "📝 FREE MS Word Letterhead",
              "📁 All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)",
              "🎁 15% Discount on your next order",                         
              "🚀 Complete Deployment",
              "📝 Dedicated Accounts Manager",
              "💼 100% Ownership Rights",
              "😊 100% Satisfaction Guarantee",
              "🛡 100% Unique Design Guarantee"
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
      className="p-4 md:w-1/2 w-full hover:cursor-pointer hover:bg-"
      whileHover={{ scale: 1.05 }} // Scale animation on hover
    >
      <div className={`h-full p-6 rounded-lg flex flex-col relative overflow-hidden ${icon ? "border-indigo-500" : "border-gray-700"}`}>
        {icon && (
          <div className="text-3xl mb-4">{icon}</div> // Displaying the icon
        )}
        <h2 className="lg:text-2xl sm:text-3xl sm:mb-2 tracking-widest text-gray-400 title-font mb-1 font-medium"> 🎨 {title}</h2>
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
            {expanded ? 'Read Less' : 'Read More'} 📖
          </button>
        )}
        <Link href="mailto:virtualcrafterstek@gmail.com">
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

export default LogoPricing;
