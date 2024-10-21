import React from 'react';
import Link from 'next/link'
import { FaGlobe, FaFacebook, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#000319] text-gray-200 border-t-[1px] py-10">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p>
            We are a leading Technical company offering services
            tailored to your needs. Our commitment is to deliver the best
            services to our customers.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Home</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">About</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Services</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
           <Link href="mailto:info@virtualcrafterstek.com"><p className="mb-2">Email: info@virtualcrafterstek.com</p></Link>
          <p className="mb-2">Phone: +1 580 215 4325</p>
          <p className="mb-2">Address: V3W 0E9. City: SURREY. Area Name: SURREY. Province: BC. Area Code: 604.</p>
          <div className="flex space-x-4 mt-4">
           
           
            <Link href="https://www.facebook.com/profile.php?id=61559447247176" target="_blank" className="transition-all hover:scale-110">
            <FaFacebook className=" w-10 h-10 mb-3 inline-block" />
            </Link>
            <Link href="https://www.instagram.com/virtual_crafter" target="_blank" className="transition-all hover:scale-110">
            <FaInstagramSquare className=" w-10 h-10 mb-3 inline-block" />
            </Link>
            <Link href="https://www.linkedin.com/in/virtual-crafters-b15a17332/" target="_blank" className="transition-all hover:scale-110">
            <FaLinkedin className=" w-10 h-10 mb-3 inline-block" />
            </Link>
           
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 text-center mt-8">
        <p>&copy; 2024 Virtual Crafters. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
