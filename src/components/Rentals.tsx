"use client";
import React from "react";
import { motion } from 'framer-motion';

const Rentals = () => {
  const textVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="services" className={`min-h-screen flex flex-col items-center justify-center py-8 bg-gradient-to-b from-black via-orange-700 to-gray-900 dark:bg-black`}>
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          Rentals
        </h2>
        <div className="grid grid-cols-1 gap-8">
          {/* Rentals Content */}
          <motion.div 
            className="flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div className="w-full" variants={textVariant}>
              <p className="text-base sm:text-lg md:text-xl text-white mb-8 text-center">
                When it comes to renting office equipment in Hyderabad and across Andhra Pradesh and Telangana, Hi-Tech Copier Solutions is your go-to choice. We specialize in providing top-notch photocopiers, always well-maintained and equipped with the latest technology. Whether you need a photocopier for a short-term project or a long-term rental plan, you can count on us for reliability and quality. Partner with Hi-Tech Copier Solutions and experience the difference in office equipment rental.
              </p>
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-gray-300">Rental Advantages</h4>
              <ul className="list-disc list-inside mb-8 text-white text-left">
                <li>No Investment</li>
                <li>No Maintenance charges</li>
                <li>No Risk & No Surprise Bills</li>
                <li>Low Copy Cost & High Copy Quality</li>
                <li>Free Upgrade of Latest Technology</li>
                <li>Replacement of Copier every Two years</li>
                <li>Rent is inclusive of all Spares & Consumables</li>
              </ul>

              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-gray-300">With this also get</h4>
              <ul className="list-disc list-inside mb-8 text-white text-left">
                <li>Express Service</li>
                <li>Free Operator`s training</li>
                <li>Free Delivery in Hyderabad</li>
                <li>High Speed Machines - 20 ppm to 70 ppm</li>
                <li>Heavy Print Capacity - Upto 1 Lakh copies per day</li>
              </ul>

              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-gray-300">Reasons for Opting Hi-Tech Copier Solutions</h4>
              <ul className="list-disc list-inside mb-8 text-white text-left">
                <li>Skilled technicians</li>
                <li>Largest Inventory of Digital Copiers & Printers</li>
                <li>Largest Inventory for Spares & Consumables</li>
                <li>On time Delivery, Installation and support</li>
                <li>100% Service satisfaction</li>
              </ul>

              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-gray-300">Convenient Rental Packages</h4>
              <p className="text-base sm:text-lg md:text-xl text-white mb-8 text-center">
                Once a month payment with flexible rental schemes.
              </p>

              <p className="text-base sm:text-lg md:text-xl text-white mb-4 text-center">
                Please feel free to contact, if you need any further information.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-white text-center">
                Mohammad Jaffar Ahmed<br />
                Mobile: +91 9030731001 (10am to 8pm Monday to Saturday)<br />
                Email: <a href="mailto:HITECHCOPIERSOLUTION1001@gmail.com" className="text-blue-500 underline">HITECHCOPIERSOLUTION1001@gmail.com</a><br />
                Sunday & General holiday closed.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-white text-center">
                Thanking you and assuring you of our prompt and best services at all times.
              </p>
            </motion.div>
            {/* No image */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Rentals;
