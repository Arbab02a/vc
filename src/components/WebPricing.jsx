'use client';

import { useState } from 'react';
import Link from 'next/link'
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';


const WebPricing = () => {
  return (
    <section className="text-gray-400 bg-[#000319] body-font overflow-hidden">
      <div className="container px-5 pb-8 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
        

<motion.h2
  className="text-4xl font-extrabold text-white title-font -mb-6 mt-12"
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
>
💻 Web Design & Development
</motion.h2>

         
      
        </div>
        <div className="flex flex-wrap -m-4">
          {/* Add your PricingCard components here with the updated code */}
          <PricingCard
            title="Startup Website Package"
            price="$299"
            features={[
              "📸 5 Stock Photos",
              "🌐 5 Page Website",
              "🎨 3 Banner Designs",
              "📊 1 jQuery Slider Banner",
              "🗺️ FREE Google Friendly Sitemap",
              "✅ Complete W3C Certified HTML5",
              "📘 Facebook Page Design",
              "🐦 Twitter Page Design",
              "📱 Mobile Responsive will be Additional $99*",
              "⚙️ CMS will be Additional $149*",
              "🚀 Complete Deployment",
              "👤 Dedicated Accounts Manager",
              "🏆 100% Ownership Rights",
              "😊 100% Satisfaction Guarantee",
              "✨ 100% Unique Design Guarantee",
              "💸 100% Money Back Guarantee *"
            ]}
            
            buttonText="Order Now"
            buttonStyle="bg-gray-800 hover:bg-gray-700"
            footerText="Literally you probably haven't heard of them jean shorts."
          />
          <PricingCard
              title="Professional Website Package"
              price="$649"
              features={[
                "🌐 10 Page Website",
                "🛠️ CMS / Admin Panel Support",
                "📸 8 Stock Images",
                "🎨 5 Banner Designs",
                "📊 1 jQuery Slider Banner",
                "🗺️ FREE Google Friendly Sitemap",
                "✅ Complete W3C Certified HTML",
                "📘 Facebook Page Design",
                "🐦 Twitter Page Design",
                "📹 YouTube Page Design",
                "👨‍💼 Dedicated Project Manager",
                "🚀 Complete Deployment",
                "👤 Dedicated Accounts Manager",
                "🏆 100% Ownership Rights",
                "😊 100% Satisfaction Guarantee",
                "✨ 100% Unique Design Guarantee",
                "💸 100% Money Back Guarantee *"
              ]}
              
            buttonText="Order Now"
            buttonStyle="bg-gray-800 hover:bg-gray-700"
            footerText="Literally you probably haven't heard of them jean shorts."
          />
          <PricingCard
              title="Elite Website Package"
              price="$1399"
              features={[
                "📄 Upto 15 Unique Pages Website",
                "🎨 Conceptual and Dynamic Website",
                "📱 Mobile Responsive",
                "📅 Reservation/Appointment Tool (Optional)",
                "💳 Online Payment Integration (Optional)",
                "📝 Custom Forms",
                "🧲 Lead Capturing Forms (Optional)",
                "✨ Striking Hover Effects",
                "📧 Newsletter Subscription (Optional)",
                "📰 Newsfeed Integration",
                "🔗 Social Media Integration",
                "🔍 Search Engine Submission",
                "📸 5 Stock Photos",
                "🎨 3 Unique Banner Design",
                "📊 1 jQuery Slider Banner",
                "✅ Complete W3C Certified HTML",
                "📘 Facebook Page Design",
                "🐦 Twitter Page Design",
                "📹 YouTube Page Design",
                "👨‍💼 Dedicated Project Manager",
                "🚀 Complete Deployment",
                "👤 Dedicated Accounts Manager",
                "🏆 100% Ownership Rights",
                "😊 100% Satisfaction Guarantee",
                "✨ 100% Unique Design Guarantee",
                "💸 100% Money Back Guarantee *"
              ]}
              
            buttonText="Order Now"
            buttonStyle="bg-gray-800 hover:bg-gray-700"
            footerText="Literally you probably haven't heard of them jean shorts."
          />
          <PricingCard
  title="Silver Website Package"
  price="$1,699"
  features={[
    "🎨 Custom Made, Interactive, Dynamic & High End Design",
    "💻 Custom WP (or) Custom PHP Development",
    "📊 1 jQuery Slider Banner",
    "🖼️ Up to 10 Custom Made Banner Designs",
    "📸 10 Stock Images",
    "🔄 Unlimited Revisions",
    "✨ Special Hover Effects",
    "🖥️ Content Management System (CMS) Online",
    "📅 Appointment/Scheduling/Online Ordering",
    "💳 Online Payment Integration (Optional)",
    "🌍 Multi Lingual (Optional)",
    "📑 Custom Dynamic Forms (Optional)",
    "🔍 Search Bar",
    "🔗 Live Feeds of Social Networks integration",
    "📱 Mobile Responsive",
    "🌐 FREE 5 Years Domain Name",
    "📄 Free Google Friendly Sitemap",
    "✅ Complete W3C Certified HTML",
    "👨‍💼 Dedicated Project Manager",
    "👤 Dedicated Accounts Manager",
    "📘 Facebook Page Design",
    "🐦 Twitter Page Design",
    "📹 YouTube Page Design",
    "🚀 Complete Deployment",
    "👤 Dedicated Accounts Manager",
    "🏆 100% Ownership Rights",
    "😊 100% Satisfaction Guarantee",
    "✨ 100% Unique Design Guarantee",
    "💸 100% Money Back Guarantee *"
  ]}
            buttonText="Order Now"
            buttonStyle="bg-gray-800 hover:bg-gray-700"
            footerText="Literally you probably haven't heard of them jean shorts."
          />
          <PricingCard
              title="Business Website Package"
              price="$1,999"
              features={[
                "🔍 3 months of Search Engine Optimization",
    "📝 Complete website content (verbiage)",
    "🗝️ 2 keywords (per page)",
    "🎨 Custom Made, Interactive, Dynamic & High End Design",
    "💻 Custom WP (or) Custom PHP Development",
    "📊 1 jQuery Slider Banner",
    "🖼️ Up to 10 Custom Made Banner Designs",
    "📸 10 Stock Images",      
    "🔄 Unlimited Revisions",
    "✨ Special Hover Effects",
    "🖥️ Content Management System (CMS)",
    "📅 Online Appointment/Scheduling/Online Ordering",
    "💳 Online Payment Integration (Optional)",
    "🌍 Multi Lingual (Optional)",
    "📑 Custom Dynamic Forms (Optional)",
    "📰 Signup Area (For Newsletters, Offers etc.)",
    "🔍 Search Bar",
    "🔗 Live Feeds of Social Networks integration",
    "📱 Mobile Responsive",
    "🎬 15 Seconds 2D Explainer Video",
    "🎤 Voice - Over & Sound Effects",
    "✍️ Professional Script Writing",
    "🖼️ Storyboard",
    "🌐 FREE 5 Years Domain Name",
    "📄 Free Google Friendly Sitemap",
    "🔍 Search Engine Submission",
    "✅ Complete W3C Certified HTML",
    "🚀 Complete Deployment",
    "👤 Dedicated Accounts Manager",
    "🏆 100% Ownership Rights",
    "😊 100% Satisfaction Guarantee",
    "✨ 100% Unique Design Guarantee",
    "💸 100% Money Back Guarantee *"
            ]}
            buttonText="Order Now"
            buttonStyle="bg-gray-800 hover:bg-gray-700"
            footerText="Literally you probably haven't heard of them jean shorts."
          />
          <PricingCard
              title="Automated Conferencing Portal"
              price="$3,999"
              features={[
                "🌐 Unlimited Page Website",
                "🖥️ Custom Content Management System (CMS)",
                "🎨 Unique Pages and UI Design",
                "💻 Complete Custom Development",
                "🔄 Process Automation Tools",
                "📰 Newsfeed Integration",
                "🔗 Social Media Plugins Integration",
                "📸 Upto 40 Stock Images",
                "🖼️ 10 Unique Banner Designs",
                "📊 JQuery Slider",
                "🔍 Search Engine Submission",
                "📄 Free Google Friendly Sitemap",
                "✉️ Custom Email Addresses",
                "📱 Social Media Page Designs (Facebook, Twitter, Instagram)",
                "✅ Complete W3C Certified HTML",
                "👤 Dedicated Accounts Manager",
                "🚀 Complete Deployment",
                "💸 Money Back Guarantee",
                "📚 Automated Course Creation",
                "🎥 Video Conferencing",
                "📜 Skills/Certification Tracking",
                "📲 Mobile Learning",
                "⏳ Asynchronous Learning",
                "📊 CRM Features",                
                "🎮 Gamification",
                "💬 Social Learning/Message Boards",
                "💡 Motivational Triggers",
                "💻 Forums And Webinars",
                "🛒 E-commerce And Subscriptions",
                "🗓️ Online Course Booking",
                "📈 Excellent Reporting",
                "📑 Invoicing Integration",
                "💰 Financial Integrations",
                "🎓 Student Information Management",
                "📧 Automated Communications",
                "📖 Learning Management System",
                "⏱️ Quick And Easy Course Scheduling",
                "📊 Reporting And Data Analysis",
                "📝 Assessment Management & Live Feedback",
                "📚 Gradebooks",
                "🔗 Quick User Integration",
                "💳 Easy Payment Methods",
                "🌍 Online Communities & Social Engagement",
                "📂 Curation of Resources And Adding Own Resources",
                "🚀 Complete Deployment",
                "👤 Dedicated Accounts Manager",
                "🏆 100% Ownership Rights",
                "😊 100% Satisfaction Guarantee",
                "✨ 100% Unique Design Guarantee",
                "💸 100% Money Back Guarantee *"
            ]}
            buttonText="Order Now"
            buttonStyle="bg-gray-800 hover:bg-gray-700"
            footerText="Literally you probably haven't heard of them jean shorts."
          />
          <PricingCard
              title="Custom CRM Portal"
              price="$4999"
              features={[
                "🌐 Unlimited Page Website",
    "🎨 Unique Pages and UI Design",
    "💻 Complete Custom Development",
    "📰 Newsfeed Integration",
    "📊 CRM (Customer Relation Management System)",
    "📈 Performance and Analytics",
    "🔧 Customization of Personal Details",
    "🔄 Process Management",
    "🤖 Sales Automation",
    "👥 Team Collaboration",
    "📤 Marketing Automation",
    "🔐 Security",
    "🔗 Integrations",
    "📊 Sales Reports",
    "📉 Trend Analytics",
    "📆 Forecasting",
    "🌍 Territory Management",
    "📇 Account Management",
    "📅 Event Integration",
    "🔐 Advanced Data Security",
    "🚀 Opportunity Management",
    "📈 Sales Forecasting",
    "💬 Quotes",
    "📁 Document Library",
    "📚 Case Management",
    "📊 Analytics and Dashboards",
    "📞 Lead Management",
    "🛠️ Resource Management",
    "🔍 Web Intelligence",
    "📧 Automated Emails, Invoices & Estimates",
    "💵 Automated Split Invoicing",
    "📊 Automated Combine Invoices",
    "📑 Invoice Templates",
    "📊 Financial Reports",
    "📈 Generate Automated Sales Reports",
    "📋 Core Features",
    "📊 Reporting",
    "📚 Accounting",
    "👀 Tracking and Visibility",
    "📦 Centralized Modules",
    "👔 Human Resources Management",
    "💼 Business Process Management",
    "📊 Enterprise Analytics",
    "🧠 Business Intelligence",
    "🛠️ Standardization",
    "📦 Procurement",
    "📊 Reporting and Analytics",
    "📈 Projection",
    "🌐 Enterprise-wide Integration",
    "⌛ Real-Time Operations",
    "📝 Problem Definition",
    "🔍 Description of the Programs' Objectives and Scope",
    "🤔 Assumptions",
    "💸 Implementation Costs",
    "📅 Implementation Schedule",
    "⚠️ Development and Operational Risks",
    "📈 Projected Benefits",
    "👥 Team Members",
    "📑 Contracts",
    "📡 Infrastructure Upgrades",
    "🗂️ Create Work Plans and Timelines",
    "🔍 Analyze Gaps",
    "🔧 Configure Parameters",
    "📂 Migrate Data",
    "🧪 Test System",
    "📄 Document System",
    "💳 Online Payment Solutions (optional)",
    "⚙️ Advanced Admin Features 2.0",
    "🔐 User Signup/Login Functionalities",
    "🔧 Advanced User Features",
    "👤 User Profile Management",
    "⚙️ General Configuration Features",
    "✅ Complete W3C Certified HTML",
    "🚀 Complete Deployment",
    "👤 Dedicated Accounts Manager",
    "🏆 100% Ownership Rights",
    "😊 100% Satisfaction Guarantee",
    "✨ 100% Unique Design Guarantee",
    "💸 100% Money Back Guarantee*"
            ]}
            buttonText=" Order Now"
            buttonStyle="bg-gray-800 hover:bg-gray-700"
            footerText="Literally you probably haven't heard of them jean shorts."
          />
          <PricingCard
              title="Beginners E-Commerce Package"
              price="$999"
              features={[
                "🌟 Conceptual and Dynamic Website",
                "🛠️ Content Management System (CMS)",
                "📱 Mobile Responsive",
                "🔍 Easy Product Search",
                "⭐ Product Reviews",
                "🛍️ Up To 5 Products",
                "📂 Up To 3 Categories",
                "🛒 Full Shopping Cart Integration",
                "💳 Payment Module Integration",
                "📦 Sales & Inventory Management",
                "🎞️ Jquery Slider",
                "📈 Free Google Friendly Sitemap",
                "💻 FREE 1 Year Hosting",
                "✉️ Custom Email Addresses",
                "✅ Complete W3C Certified HTML",
                "📘 Facebook Page Design",
                "🐦 Twitter Page Design",
                "🎥 YouTube Page Design",
                "🚀 Complete Deployment",
                "👤 Dedicated Accounts Manager",
                "🏆 100% Ownership Rights",
                "😊 100% Satisfaction Guarantee",
                "✨ 100% Unique Design Guarantee",
                "💸 100% Money Back Guarantee*"
            ]}
            buttonText="Order Now"
            buttonStyle="bg-gray-800 hover:bg-gray-700"
            footerText="Literally you probably haven't heard of them jean shorts."
          />
          <PricingCard
              title="Corporate E-Commerce Package"
              price="$2,199"
              features={[
                "🌐 Conceptual and Dynamic Website",
                "🛠️ Content Management System (CMS)",
                "📱 Mobile Responsive",
                "🔍 Easy Product Search",
                "⭐ Product Reviews",
                "📦 Up To 10 Products",
                "📂 Up To 6 Categories",
                "🛒 Full Shopping Cart Integration",
                "💳 Payment Module Integration",
                "📊 Sales & Inventory Management",
                "🎞️ Jquery Slider",
                "📈 Free Google Friendly Sitemap",
                "✉️ Custom Email Addresses",
                "✅ Complete W3C Certified HTML",
                "📘 Facebook Page Design",
                "🐦 Twitter Page Design",
                "🎥 YouTube Page Design",
                "📸 Instagram Page Design",
                "🚀 Complete Deployment",
                "👤 Dedicated Accounts Manager",
                "🏆 100% Ownership Rights",
                "😊 100% Satisfaction Guarantee",
                "✨ 100% Unique Design Guarantee",
                "💸 100% Money Back Guarantee"
            ]}
            buttonText="Order Now"
            buttonStyle="bg-gray-800 hover:bg-gray-700"
            footerText="Literally you probably haven't heard of them jean shorts."
          />
          <PricingCard
              title="Elite E-Commerce Package"
              price="$3,499"
              features={[
                "🏆 By 6 Award Winning Designers",
    "🎨 Icon Design",
    "🔄 UNLIMITED Revisions",
    "🖨️ Print Media",
    "✒️ Stationary Design (Business Card, Letterhead & Envelope)",
    "🧾 Invoice Design, 📧 Email Signature",
    "📑 Bi-Fold Brochure (OR) 2-Sided Flyer Design",
    "📚 Product Catalog Design",
    "🪧 Signage Design (OR) Label Design",
    "👕 T-Shirt Design (OR) Car Wrap Design Website",
    "🛍️ E-Commerce Store Design",
    "📄 Product Detail Page Design",
    "🎞️ Unique Banner Slider",
    "🌟 Featured Products Showcase",
    "🛒 Full Shopping Cart Integration",
    "📦 Up To 15 Products",
    "📂 Up To 9 Categories",
    "⭐ Product Rating & Reviews",
    "🔍 Easy Product Search",
    "💳 Payment Gateway Integration",
    "💱 Multi-currency Support",
    "🛠️ Content Management System",
    "🔑 Customer Log-in Area",
    "📱 Mobile Responsive",
    "🔗 Social Media Plugins Integration",
    "👥 Tell a Friend Feature",
    "📱 Mobile Responsive",
    "📘 Social Media Pages (Facebook, Twitter, Instagram, YouTube)",

    "💡 Value Added Services",
    "👤 Dedicated Account Manager",
    "🔄 Unlimited Revisions",
    "🗂️ All Final File Formats",
    "🚀 Complete Deployment",
    "👤 Dedicated Accounts Manager",
    "🏆 100% Ownership Rights",
    "😊 100% Satisfaction Guarantee",
    "✨ 100% Unique Design Guarantee",
    "💸 100% Money Back Guarantee *"
            ]}
            buttonText="Order Now"
            buttonStyle="bg-gray-800 hover:bg-gray-700"
            footerText="Literally you probably haven't heard of them jean shorts."
          />
          <PricingCard
               title="Custom CRM/ERP Portal Website
              "
                          price="$9,999"
                          features={[
                            "🎨 Unique Pages and UI Design",
                            "🛠️ Complete Custom Development",
                            "📰 Newsfeed Integration",
                            "📊 CRM (Customer Relation Management System)",
                            "📈 Performance and Analytics",
                            "🧑‍💼 Customization of Personal Details",
                            "🔄 Process Management",
                            "🤖 Sales Automation",
                            "👥 Team Collaboration",
                            "📢 Marketing Automation",
                            "🔒 Security",
                            "🔗 Integrations",
                            "📲 Mobile Notifications",
                            "📊 Sales Reports",
                            "📈 Trend Analytics",
                            "🔮 Forecasting",
                            "🌍 Territory Management",
                            "📋 Account Management",
                            "📅 Event Integration",
                            "🛡️ Advanced Data Security",
                            "🎯 Opportunity Management",
                            "🔮 Sales Forecasting",
                            "📞 Call/Video Logging",
                            "📜 Quotes",
                            "📃 Contracts",
                            "📂 Document Library",
                            "🛠️ Case Management",
                            "📊 Analytics and Dashboards",
                            "💼 Lead Management",
                            "📑 Resource Management",
                            "💡 Web Intelligence",
                            "📧 Automated Emails, Invoices & Estimates",
                            "🔄 Automated Split Invoicing",
                            "🔄 Automated Combine Invoices",
                            "🧾 Invoice Templates",
                            "📊 Financial Reports",
                            "📊 Generate detailed sales reports by date-range and category",
                            "📊 Generate automated sales reports",
                            "📁 Core Modules",
                            "👥 Human Resources",
                            "🔗 Integrations",
                            "📈 Business Intelligence",
                            "💼 Sales/Marketing",
                            "💵 Finance",
                            "📊 Core Features",
                            "📑 Reporting",
                            "🧾 Accounting",
                            "📊 Tracking and Visibility",
                            "🔗 Centralized Modules",
                            "🗂️ ERP Database",
                            "👥 Human Resources Management",
                            "🔄 Business Process Management",
                            "📈 Enterprise Analytics",
                            "📊 Business Intelligence",
                            "📂 ERP Database",
                            "🔗 Integrations",
                            "🏭 Manufacturing (Optional)",
                            "📊 Distribution",
                            "📊 Business Intelligence",
                            "🔍 Insights",
                            "📊 Standardization",
                            "🛍️ Procurement",
                            "📈 Reporting and Analytics",
                            "🔮 Forecasting",
                            "🔮 Projection",
                            "🌍 Enterprise-wide Integration",
                            "⏱️ Real-Time Operations",
                            "📜 Problem Definition",
                            "📑 Program Objectives and Scope",
                            "🔮 Assumptions",
                            "💰 Implementation Costs",
                            "📅 Implementation Schedule",
                            "⚠️ Development and Operational Risks",
                            "📊 Projected Benefits",
                            "👥 Team Members",
                            "📃 Contracts",
                            "🔧 Infrastructure Upgrades",
                            "📝 Create Work Plans and Timelines",
                            "🛠️ Analyze Gaps",
                            "🔧 Configure Parameters",
                            "📦 Migrate Data",
                            "🔧 Test System",
                            "🗂️ Document System",
                            "⚙️ Advanced Admin Features 2.0",
                            "🔑 User Signup/Login Functionalities",
                            "⚙️ Advanced User Features",
                            "👤 User Profile Management",
                            "⚙️ General Configuration Features",
                            "✅ Complete W3C Certified HTML",
                            "🚀 Complete Deployment",
                            "👤 Dedicated Accounts Manager",
                            "🏆 100% Ownership Rights",
                            "😊 100% Satisfaction Guarantee",
                            "✨ 100% Unique Design Guarantee",
                            "💸 100% Money Back Guarantee"
            ]}
            buttonText="Order Now"
            buttonStyle="bg-gray-800"
            footerText="Literally you probably haven't heard of them jean shorts."
          />
          {/* Add other PricingCard components similarly */}
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ title, price, features, badge, buttonText, buttonStyle, footerText }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <motion.div className="p-4 md:w-1/2 w-full"
    whileHover={{ scale: 1.05 }} 
    >
    <motion.div
      className={`h-full p-6 rounded-lg flex flex-col relative overflow-hidden  hover:cursor-pointer  ${badge ? "border-indigo-500" : "border-gray-700"}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {badge && (
        <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
          {badge}
        </span>
      )}
      <h2 className="lg:text-2xl sm:text-3xl sm:mb-2  tracking-widest text-white title-font mb-1 font-semibold">
        💻 {title}
      </h2>
      <h1 className="lg:text-2xl sm:text-2xl text-white pb-4 mb-4 border-b border-gray-800 leading-none">
        💵 {price}
      </h1>
      {features.slice(0, expanded ? features.length : 5).map((feature, index) => (
        <p key={index} className="flex items-center text-gray-400 mb-2">
          {feature}
        </p>
      ))}
      {features.length > 5 && (
        <button className="text-indigo-500 mt-3" onClick={toggleExpanded}>
          {expanded ? 'Read Less' : 'Read More'} 📖
        </button>
      )}
      <Link href="mailto:info@virtualcrafterstek.com">
        <button className={`flex items-center mt-auto justify-center ${buttonStyle} border-0 py-2 px-4 w-full focus:outline-none rounded-full text-center`}>
          {buttonText} ✉️
        </button>
      </Link>
    </motion.div>
  </motion.div>
  );
};

export default WebPricing;
