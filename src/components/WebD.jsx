import { motion } from 'framer-motion';
import { FaDesktop, FaMobileAlt, FaCode, FaDatabase, FaServer, FaShieldAlt } from 'react-icons/fa';
import Image from 'next/image';

const services = [
  {
    icon: <FaDesktop size={40} />,
    title: 'Responsive Web Design',
    description: 'Visually stunning and fully responsive websites for all devices.'
  },
  {
    icon: <FaMobileAlt size={40} />,
    title: 'Mobile App Development',
    description: 'Powerful mobile applications optimized for both iOS and Android.'
  },
  {
    icon: <FaCode size={40} />,
    title: 'Frontend Development',
    description: 'Fast, dynamic, and user-friendly web applications using modern frameworks.'
  },
  {
    icon: <FaDatabase size={40} />,
    title: 'Backend Development',
    description: 'Robust backend development for seamless server-side performance.'
  },
  {
    icon: <FaServer size={40} />,
    title: 'Cloud Integration',
    description: 'Scalable cloud solutions on AWS, Google Cloud, and Azure.'
  },
  {
    icon: <FaShieldAlt size={40} />,
    title: 'Web Security',
    description: 'Advanced security measures to protect your website from threats.'
  }
];

const WebDevelopmentServices = () => {
  return (
    <div className="container mx-auto p-10 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-400">Software Development Services</h2>

      <div className="relative flex justify-center items-center w-full" style={{ height: '600px' }}>
        {/* Center image */}
        <div className="absolute z-10">
          <Image
            src="/images/logo.png"  // Change the source to your desired image
            width={150}
            height={150}
            alt="Center Image"
            className="rounded-full"
          />
        </div>

        {/* Circular service cards */}
        <div className="flex justify-center items-center flex-wrap w-full h-full">
          {services.map((service, index) => {
            const angle = (index / services.length) * 360;  // Calculate angle for positioning
            const radius = 200;  // Adjust radius for spacing
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);

            return (
              <motion.div
                key={index}
                className="absolute bg-[#000522] rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                  width: '200px',
                  height: '200px',
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="flex justify-center mb-4 text-blue-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center text-gray-400">{service.title}</h3>
                <p className="text-gray-600 text-center text-sm">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WebDevelopmentServices;
