'use client'

import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { FaGlobe, FaFacebook, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const Stats = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const statsData = [
    { id: 1, value: 1000, label: 'Visitors 🌍', suffix: ' per month', icon: <FaGlobe className="text-indigo-400 w-12 h-12 mb-3 inline-block" /> },
    { id: 2, value: 6000, label: 'Followers 👍', icon: <FaFacebook className="text-blue-500 w-12 h-12 mb-3 inline-block" /> },
    { id: 3, value: 5000, label: 'Followers 📸', icon: <FaInstagramSquare className="text-pink-500 w-12 h-12 mb-3 inline-block" /> },
    { id: 4, value: 10000, label: 'Followers 💼', icon: <FaLinkedin className="text-blue-700 w-12 h-12 mb-3 inline-block" /> },
  ];

  return (
    <section className="text-gray-400 bg-[#000319] body-font py-24">
      <div className="container px-5 mx-auto">
        <motion.div 
          className="flex flex-col text-center w-full mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold title-font text-gray-300 mb-4">
            📊 Our Statistics
          </h1>
          <p className="text-lg text-gray-400">
            Social Media Presence & Website Visitors
          </p>
        </motion.div>
        
        <div className="flex flex-wrap font-medium -m-4 text-center" ref={ref}>
          {statsData.map((stat, index) => (
            <motion.div
              className="p-4 md:w-1/4 sm:w-1/2 w-full"
              key={stat.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.8 }}
            >
              <motion.div
                className="border-2 border-gray-800 px-4 py-8 rounded-lg hover:shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out hover:cursor-pointer"
                whileHover={{ scale: 1.05, rotate: 3 }}
              >
                <div className="text-5xl mb-4">{stat.icon}</div>
                <h2 className="title-font font-bold text-3xl text-white">
                  {inView && (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2}
                      suffix={stat.suffix || ''}
                    />
                  )}
                </h2>
                <p className="leading-relaxed text-gray-300">
                  {stat.label}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
