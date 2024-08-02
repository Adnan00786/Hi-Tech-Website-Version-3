"use client";
import React, { useEffect } from "react";
import { motion } from 'framer-motion';
import Image from 'next/image';

const Services = () => {

  const textVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  const imageVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    // <section id="services" className="py-16">
    <section id="services" className={`min-h-screen flex flex-col items-center justify-center py-8 bg-black dark:bg-black`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl sm:text-7xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service 1: Repair */}
          <motion.div 
            className="flex flex-col md:flex-row items-center md:items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div className="md:w-1/2" variants={textVariant}>
              <h3 className="text-3xl font-semibold mb-4 text-white">Repair</h3>
              <p className="text-lg text-white">We provide expert repair services for all Xerox machine models. Our technicians ensure quick and efficient repairs to minimize downtime.</p>
            </motion.div>
            <motion.div className="md:w-1/2" variants={imageVariant}>
              <Image
                src="/assets/repair.png"
                alt="Repair"
                className="rounded-lg shadow-md w-full h-64 object-cover"
                width={500}
                height={500}
              />
            </motion.div>
          </motion.div>
          {/* Service 2: Periodic Service for Maintenance */}
          <motion.div 
            className="flex flex-col md:flex-row items-center md:items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div className="md:w-1/2" variants={textVariant}>
              <h3 className="text-3xl font-semibold mb-4 text-white">Periodic Service</h3>
              <p className="text-lg text-white">Keep your Xerox machine running smoothly with our periodic maintenance service. We perform thorough checks and cleaning to ensure optimal performance.</p>
            </motion.div>
            <motion.div className="md:w-1/2" variants={imageVariant}>
              <Image
                src="/assets/periodicService.jpg"
                alt="Periodic Service"
                className="rounded-lg shadow-md w-full h-64 object-cover"
                width={500}
                height={500}
              />
            </motion.div>
          </motion.div>
          {/* Service 3: Warranty Service for Maintenance */}
          <motion.div 
            className="flex flex-col md:flex-row items-center md:items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div className="md:w-1/2" variants={textVariant}>
              <h3 className="text-3xl font-semibold mb-4 text-white">Warranty Service</h3>
              <p className="text-lg text-white">Unlock peace of mind with our Warranty Service – because your trust deserves protection. 🛡️✨</p>
            </motion.div>
            <motion.div className="md:w-1/2" variants={imageVariant}>
              <Image
                src="/assets/warantyservice.jpg"
                alt="Warranty Service"
                className="rounded-lg shadow-md w-full h-64 object-cover"
                width={500}
                height={500}
              />
            </motion.div>
          </motion.div>
          {/* Service 4: Full Service */}
          <motion.div 
            className="flex flex-col md:flex-row items-center md:items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div className="md:w-1/2" variants={textVariant}>
              <h3 className="text-3xl font-semibold mb-4 text-white">Full Service</h3>
              <p className="text-lg text-white">Our comprehensive full-service package includes repair, maintenance, and performance optimization. Get everything your Xerox machine needs in one package.</p>
            </motion.div>
            <motion.div className="md:w-1/2" variants={imageVariant}>
              <Image
                src="/assets/fullservice.webp"
                alt="Full Service"
                className="rounded-lg shadow-md w-full h-64 object-cover"
                width={500}
                height={500}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
      <br />
    </section>
  );
}

export default Services;

