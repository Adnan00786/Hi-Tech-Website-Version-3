"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function NotFound() {
  const textVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4">
      <div className="container mx-auto text-center">
      <br />
      <br />
        <motion.div 
          className="mb-8"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          variants={textVariant}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4">Oops! 404</h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-4">The page you are looking for does not exist.</p>
          <p className="text-base sm:text-lg md:text-xl">It might have been moved or deleted.</p>
        </motion.div>
        <motion.a
          href="https://hitechcopier.com"
          className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition-all duration-300"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={buttonVariant}
        >
          Go to Homepage
        </motion.a>
      </div>
    </section>
  );
}
