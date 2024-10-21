'use client'

import React from "react";
import Link from 'next/link'
import { motion } from "framer-motion";
import { FaShieldAlt } from "react-icons/fa";

const Policies = () => {
  return (
    <motion.div
      className="min-h-screen bg-[#000319] text-gray-300 p-5 sm:p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-center mb-8">
          🔒 Privacy Policy
        </h1>
        <div className="flex items-center justify-center mb-6">
          <FaShieldAlt className="text-4xl text-yellow-300" />
        </div>
        <p className="text-lg mb-4">
          This Privacy Policy outlines how <strong>Virtual Crafters</strong> collects, uses, and protects your information.
        </p>

        <h2 className="text-3xl sm:text-5xl font-bold mb-4">1. Information We Collect</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Personal Information (e.g., name, email address)</li>
          <li>Usage Data (e.g., IP address, browser type)</li>
          <li>Cookies and Tracking Technologies</li>
        </ul>

        <h2 className="text-3xl sm:text-5xl font-bold mb-4">2. How We Use Your Information</h2>
        <p className="mb-4">
          We may use your information to:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Provide and maintain our services</li>
          <li>Improve user experience</li>
          <li>Send promotional messages and updates</li>
          <li>Monitor usage and prevent fraud</li>
        </ul>

        <h2 className="text-3xl sm:text-5xl font-bold mb-4">3. Data Sharing</h2>
        <p className="mb-4">
          We do not sell your personal information. We may share your data with:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Service Providers</li>
          <li>Business Transfers</li>
          <li>Legal Requirements</li>
        </ul>

        <h2 className="text-3xl sm:text-5xl font-bold mb-4">4. User Rights</h2>
        <p className="mb-4">
          You have the right to:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Access and update your personal information</li>
          <li>Request deletion of your data</li>
          <li>Opt-out of marketing communications</li>
        </ul>

        <h2 className="text-3xl sm:text-5xl font-bold mb-4">5. Security of Your Information</h2>
        <p className="mb-4">
          We take the security of your information seriously and implement measures to protect it.
        </p>

        <h2 className="text-3xl sm:text-5xl font-bold mb-4">6. Changes to This Policy</h2>
        <p className="mb-4">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.
        </p>

        <h2 className="text-3xl sm:text-5xl font-bold mb-4">7. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p className="mb-6">
          <strong>Email:</strong> <Link href="mailto:virtualcrafterstek@gmail.com" className="text-yellow-300">virtualcrafterstek@gmail.com</Link>
        </p>

       
      </div>
    </motion.div>
  );
};

export default Policies;
