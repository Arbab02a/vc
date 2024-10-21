'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaChartLine, FaPenNib, FaMobileAlt, FaGoogle } from 'react-icons/fa'; // SEO-related icons
import { motion } from 'framer-motion'; // Framer Motion for animations

const SEOPricing = () => {
  return (
    <section className="text-gray-400 bg-[#000319] body-font overflow-hidden">
      <div className="container px-5 pb-8 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <motion.h2
            className="text-4xl text-white font-extrabold title-font -mb-6 mt-12"
            whileHover={{ scale: 1.1, rotate: 3 }} // Animation on hover
            transition={{ type: 'spring', stiffness: 300 }}
          >
            🔍 SEO Pricing
          </motion.h2>
        </div>
        <div className="flex flex-wrap -m-4">
          {/* SEO Pricing Cards */}
          <PricingCard
            title="Startup SEO Package"
            price="$450"
            features={[
              "🔑 5 Keywords",
              "📈 Guaranteed Ranking on Google",
              "🌐 Off-site Optimization",
              "🔗 Link Building",
              "🔖 Social Bookmarking",
              "📊 Basic Analytical Report",
              "📋 In-depth Site Analysis",
              "📑 Content Duplicity Check",
              "🔍 Initial Backlinks analysis",
              "🚫 Google Penalty Check",
              "📱 Mobile Usability Check",
              "📊 Competition Analysis",
              "🔍 Keyword Research",
              "📝 Informational Content Writing & Sharing (1 - Per Month)",
              "✍️ Blog Writing (1 - Per Month)",
              "📣 Press Release Social Bookmarking (2 - Per Month)",
              "📍 NAP Syndication",
              "📍 Google My Business / Bing Local Listing",
              "📄 Citation Building",
              "📝 Classified Submissions",
              "📊 Google Analytics Analysis Report",
              "📈 SEO Reports",
              "🔍 Search Engine Rank Report",
              "👤 Dedicated Accounts Manager",
              "📆 Monthly Action Plan",
              "📋 Activity Report",
              "🚀 Complete Deployment",
              "💼 100% Ownership Rights",
              "✅ 100% Satisfaction Guarantee",
              "🛡️ 100% Unique Design Guarantee",
              "💵 100% Money Back Guarantee *"
            ]}
            buttonText="Order Now"
            buttonStyle="bg-gray-800 hover:bg-gray-700"
          />

          <PricingCard
            title="Identity SEO Package"
            price="$850"
            features={[
              "🔑 10 Keywords",
              "📈 Guaranteed Ranking on Google",
              "🌐 Off-site & On-site Optimization",
              "🔗 Link Building",
              "🔖 Social Bookmarking",
              "📋 In-depth Site Analysis",
              "📑 Content Duplicity Check",
              "🔍 Initial Backlinks analysis",
              "🚫 Google Penalty Check",
              "📱 Mobile Usability Check",
              "📊 Competition Analysis",
              "🔍 Keyword Research",
              "🔧 Title & Meta Tags Optimization",
              "📝 Content Optimization",
              "⚡ Page Speed Analysis & Optimization",
              "💻 HTML Code Cleanup & Optimization",
              "🔗 Internal Link Structuring & Optimization",
              "🏷️ Pages Hashtags Optimization",
              "↪️ Canonicalization/301 Redirect",
              "📂 Website Page Load Optimization",
              "🔖 Schema Markup Implementation",
              "🖼️ Image & Hyperlink Optimization",
              "🤖 Robots.txt Creation/Analysis",
              "✍️ Blog Writing (2 - Per Month)",
              "📑 Informational Content Writing & Sharing (2 Per Month)",
              "📣 Press Release Writing & Distribution",
              "📣 Press Release Social Bookmarking",
              "🔧 Google Webmaster Tools Setup",
              "📊 Google Analytics Setup & Integration",
              "🚀 Complete Deployment",
              "👤 Dedicated Accounts Manager",
              "💼 100% Ownership Rights",
              "✅ 100% Satisfaction Guarantee",
              "🛡️ 100% Unique Design Guarantee",
              "💵 100% Money Back Guarantee *"
            ]}
            buttonText="Order Now"
            buttonStyle="bg-gray-800 hover:bg-gray-700"
          />

          <PricingCard
            title="Elite SEO Package"
            price="$1550"
            features={[
              "🔑 20 Keywords",
              "📈 Guaranteed Ranking on Google",
              "🌐 Off-site & On-site Optimization",
              "🔗 Link Building",
              "🔖 Social Bookmarking",
              "📋 In-depth Site Analysis",
              "📑 Content Duplicity Check",
              "🔍 Initial Backlinks analysis",
              "🚫 Google Penalty Check",
              "📱 Mobile Usability Check",
              "📊 Competition Analysis",
              "🔍 Keyword Research",
              "⚡ Page Speed Analysis & Optimization",
              "🔧 Title & Meta Tags Optimization",
              "📝 Content Optimization",
              "💻 HTML Code Cleanup & Optimization",
              "🔗 Internal Link Structuring & Optimization",
              "🏷️ Pages H tags Optimization",
              "↪️ Canonicalization/301 Redirect",
              "📂 Website Page Load Optimization",
              "🤖 Robots.txt Creation/Analysis",
              "🔖 Schema Markup Implementation",
              "🖼️ Image & Hyperlink Optimization",
              "📣 Press Release Writing & Distribution",
              "📣 Press Release Social Bookmarking",
              "🔧 Google Webmaster Tools Setup",
              "📊 Google Analytics Setup & Integration",
              "✍️ Blog Writing (3 - Per Month)",
              "📑 Informational Content Writing & Sharing (3 Per Month)",
              "🚀 Complete Deployment",
              "👤 Dedicated Accounts Manager",
              "💼 100% Ownership Rights",
              "✅ 100% Satisfaction Guarantee",
              "🛡️ 100% Unique Design Guarantee",
              "💵 100% Money Back Guarantee *"
            ]}
            buttonText="Order Now"
            buttonStyle="bg-gray-800 hover:bg-gray-700"
          />

          <PricingCard
            title="Professional SEO Package"
            price="$2150"
            features={[
              "🔑 30 Keywords",
              "📈 Guaranteed Ranking on Google",
              "🌐 Off-site & On-site Optimization",
              "🔗 Link Building",
              "🔖 Social Bookmarking",
              "📋 In-depth Site Analysis",
              "📑 Content Duplicity Check",
              "🔍 Initial Backlinks analysis",
              "🚫 Google Penalty Check",
              "📱 Mobile Usability Check",
              "📊 Competition Analysis",
              "🔍 Keyword Research",
              "⚡ Page Speed Analysis & Optimization",
              "🔧 Title & Meta Tags Optimization",
              "📝 Content Optimization",
              "💻 HTML Code Cleanup & Optimization",
              "🔗 Internal Link Structuring & Optimization",
              "🏷️ Pages Hashtags Optimization",
              "↪️ Canonicalization/301 Redirect",
              "📂 Website Page Load Optimization",
              "🔖 Schema Markup Implementation",
              "🖼️ Image & Hyperlink Optimization",
              "📣 Press Release Writing & Distribution",
              "📣 Press Release Social Bookmarking",
              "🔧 Google Webmaster Tools Setup",
              "📊 Google Analytics Setup & Integration",
              "✍️ Blog Writing (5 - Per Month)",
              "📑 Informational Content Writing & Sharing (5 Per Month)",
              "🚀 Complete Deployment",
              "👤 Dedicated Accounts Manager",
              "💼 100% Ownership Rights",
              "✅ 100% Satisfaction Guarantee",
              "🛡️ 100% Unique Design Guarantee",
              "💵 100% Money Back Guarantee *"
            ]}
            buttonText="Order Now"
            buttonStyle="bg-gray-800 hover:bg-gray-700"
          />
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ title, price, features, buttonText, buttonStyle }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <motion.div
      className="p-4 md:w-1/2 w-full"
      whileHover={{ scale: 1.05 }} // Scale animation on hover
    >
      <div className="h-full p-6 rounded-lg flex flex-col relative overflow-hidden border-gray-700">
        <div className="flex items-center mb-4">
          <FaChartLine className="text-green-400 text-3xl" /> {/* SEO Icon */}
          <h2 className="lg:text-2xl sm:text-3xl sm:mb-2 tracking-widest text-white title-font ml-2 font-semibold">{title}</h2>
        </div>
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

export default SEOPricing;
