"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { FaGlobe, FaFacebook, FaInstagramSquare, FaLinkedin, FaEnvelope, FaPhoneAlt, FaUser } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const FormWithStats = () => {
  const [error, setError] = useState<string[]>([]);
  const [success, setSuccess] = useState(false);
  const fullname = useRef<HTMLInputElement | null>(null);
  const email = useRef<HTMLInputElement | null>(null);
  const phone = useRef<HTMLInputElement | null>(null);
  const message = useRef<HTMLTextAreaElement | null>(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const statsData = [
    { id: 1, value: 1000, label: 'Visitors 🌍', suffix: '', reference: '', icon: <FaGlobe className="text-white w-12 h-12 mb-3 inline-block" /> },
    { id: 2, value: 6000, label: 'Followers 👍', reference: 'https://www.facebook.com/profile.php?id=61559447247176', icon: <FaFacebook className="text-white w-12 h-12 mb-3 inline-block" /> },
    { id: 3, value: 5000, label: 'Followers 📸', reference: 'https://www.instagram.com/virtual_crafter', icon: <FaInstagramSquare className="text-white w-12 h-12 mb-3 inline-block" /> },
    { id: 4, value: 10000, label: 'Followers 💼', reference: 'https://www.linkedin.com/in/virtual-crafters-b15a17332/', icon: <FaLinkedin className="text-white w-12 h-12 mb-3 inline-block" /> },
  ];

  const submitHandler = async (e: any) => {
    e.preventDefault();
    const data = {
      fullname: fullname.current?.value,
      email: email.current?.value,
      phone: phone.current?.value,
      message: message.current?.value,
    };
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);
    alert('Your message has been received!');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-24 px-5 bg-[#000319]"
    >
      <div className="text-center mb-12">
        <motion.h2
          className="text-3xl text-white sm:text-4xl md:text-5xl font-bold mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          📬 Contact Us
        </motion.h2>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300">
          HAVE A PROJECT IN MIND? LET’S WORK TOGETHER.
          <br />
          "Join countless other businesses that have achieved unparalleled success with Virtual Crafters by their side. Located in Surrey, Canada, we specialize in elevating your business to the next level. Schedule a consultation today and unlock the limitless possibilities of your digital future! 🚀"
        </p>
      </div>

      {/* Form and Stats side by side */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Form */}
        <motion.form
          onSubmit={submitHandler}
          className="flex flex-col gap-4 w-full md:w-1/2 border-2 border-gray-300 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex flex-col gap-3">
            <label className="text-lg text-gray-400" htmlFor="fullname">
              <FaUser className="inline-block mr-2" /> Name:
            </label>
            <input ref={fullname} className="py-2 rounded-md border-2 border-gray-400 bg-[transparent] text-gray-400 w-full px-4" id="fullname" type="text" placeholder="Enter your full name" />
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-lg text-gray-400" htmlFor="email">
              <FaEnvelope className="inline-block mr-2" /> Email:
            </label>
            <input ref={email} className="py-2 rounded-md border-2 border-gray-400 bg-[transparent] text-gray-400 w-full px-4" id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-lg text-gray-400" htmlFor="phone">
              <FaPhoneAlt className="inline-block mr-2" /> Phone:
            </label>
            <input ref={phone} className="py-2 rounded-md border-2 border-gray-400 bg-[transparent] text-gray-400 w-full px-4" id="phone" type="tel" placeholder="Enter your phone number" />
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-lg text-gray-400" htmlFor="message">💬 Message:</label>
            <textarea ref={message} className="py-2 rounded-md border-2 border-gray-400 bg-[transparent] text-gray-400 w-full px-4 h-32 resize-none" id="message" placeholder="Enter your message"></textarea>
          </div>
          <div className="text-center">
            <button className="py-2 px-[2rem] rounded-full bg-[blue] text-white text-xl transition duration-300 hover:bg-blue-900">
               Submit
            </button>
          </div>
        </motion.form>

        {/* Stats */}
        <section className="text-gray-400 bg-[#000319] w-full md:w-1/2">
          <div className="container px-5 mx-auto">
            <motion.div
              className="flex flex-col text-center w-full mb-16"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold title-font text-gray-300 mb-4">
                📊  Let's Talk
              </h1>
              <p className="text-lg text-gray-400">Social Media Presence & Website Visitors</p>
            </motion.div>

            <div className="flex flex-wrap font-medium -m-4 text-center" ref={ref}>
              {statsData.map((stat, index) => (
              <motion.div
                  className="p-4 md:w-1/2 w-full"
                  key={stat.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index, duration: 0.8 }}
                >
                   <Link href={stat.reference} target='_blank'><motion.div
                    className="border-2 border-gray-800 px-4 py-8 rounded-lg hover:shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out hover:cursor-pointer"
                    whileHover={{ scale: 1.05, rotate: 3 }}
                  >
                    <div className="text-5xl mb-4">{stat.icon}</div>
                    <h2 className="title-font font-bold text-3xl text-white">
                      {inView && <CountUp start={0} end={stat.value} duration={2} suffix={stat.suffix || ''} />}
                    </h2>
                    <p className="leading-relaxed text-gray-300">{stat.label}</p>
                  </motion.div></Link> 
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Error and Success Messages */}
      <div className="w-full md:w-1/2 mt-8">
        {error && error.length > 0 && error.map((item) => (
          <div key={item} className="text-lg text-red-700 mt-2 p-3 bg-red-100 rounded">
            {item}
          </div>
        ))}
        {success && (
          <div className="text-lg text-green-700 mt-2 p-3 bg-green-100 rounded">
            Your message has been sent successfully! 🎉
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default FormWithStats;
