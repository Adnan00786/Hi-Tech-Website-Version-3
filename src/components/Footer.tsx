"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn, FaMapMarkerAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const handleScrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Footer = () => {
  const socialLinks = [
    { icon: FaFacebookF, url: 'https://www.facebook.com/people/Xerox-Machines-sales-and-service/100063738321138' },
    { icon: FaYoutube, url: 'https://www.youtube.com/channel/UCdgZOHjQ0V34QnO4LXWvD5w?sub_confirmation=1' },
    { icon: FaXTwitter, url: 'https://x.com/hitechcopier' },
    { icon: FaInstagram, url: 'https://www.instagram.com/hitechcopier' },
    { icon: FaLinkedinIn, url: 'https://www.linkedin.com/company/hi-tech-copier' },
  ];

  const handlePhoneClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = 'tel:+918885621001';
    } else {
      alert('Contact Information: Call for Inquiries\n\nContact Number: +918885621001\n\nMake a Whatsapp Call');
      window.open('https://wa.me/918885621001');
    }
  };

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const whatsappUrl = isMobile
      ? 'whatsapp://send?phone=918885621001'
      : 'https://wa.me/918885621001';

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };
  
  const handleLocationClick = () => {
    const address = encodeURIComponent("Shop No: 3, 1-766, near Bharat petrol, Tirmala Arcade, Nimboliadda, Kachiguda, Hyderabad, Telangana 500027");
    const googleMapsUrl = `https://maps.app.goo.gl/AaKHxodpF8mxhXKNA`;
    window.open(googleMapsUrl);
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/3 mb-8 md:mb-0"
          >
            <span className="text-2xl font-bold">Hi-Tech Copier</span>
            <p className="text-sm mt-4">
              Your trusted partner for Xerox machine Sales, Services, rentals, and repairs.
            </p>
          </motion.div>

          {/* Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/3 mb-8 md:mb-0 md:ml-12"
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="mb-2"
              >
                <a href="#" className="hover:text-gray-400 transition-colors" onClick={() => handleScrollTo('home')}>
                  Home
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="mb-2"
              >
                <span className="hover:text-gray-400 transition-colors" onClick={() => handleScrollTo('services')}>
                  Services
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="mb-2"
              >
                <span className="hover:text-gray-400 transition-colors" onClick={() => handleScrollTo('rentals')}>
                  Rentals
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="mb-2"
              >
                <span className="hover:text-gray-400 transition-colors" onClick={() => window.open('/Products')}>
                  Products
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="mb-2"
              >
                <a href="#" className="hover:text-gray-400 transition-colors" onClick={handlePhoneClick}>
                  call Now At +91-8885621001
                </a>
              </motion.li>
            </ul>
          </motion.div>

          {/* Social Media Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full md:w-1/3 mb-8 md:mb-0"
          >
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((item, index) => (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  href={item.url}
                  target="_blank" // Open link in new tab
                  rel="noopener noreferrer" // Security best practice for external links
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <item.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        
              <br />
        {/* Address Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full mt-8 md:mt-0 md:w-1/3 mb-8 md:mb-0"
        >
          <h4 className="text-lg font-semibold mb-4">Address</h4>
          <p className="text-sm mt-2">
            Shop No: 3, 1-766, near Bharat petrol, Tirmala Arcade, Nimboliadda, Kachiguda, Hyderabad, Telangana 500027
          </p>
          <div className="flex items-center mt-4">
            <FaMapMarkerAlt size={24} className="text-gray-400 hover:text-white transition-colors cursor-pointer" onClick={handleLocationClick} />
            <span className="ml-2 text-gray-400 hover:text-white transition-colors cursor-pointer" onClick={handleLocationClick}>
              View on Google Maps
            </span>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 border-t border-gray-700 pt-4 text-center"
        >
          {/* <p className="text-sm">
            &copy; {new Date().getFullYear()} Hi-Tech Copier. All rights reserved.
          </p> */}
          <p className="text-sm">
  &copy; {new Date().getFullYear()} Hi-Tech Copier. All rights reserved. <br/> <br/><a target='_blanck' href="https://www.linkedin.com/in/syedadnanali99/"><strong>Developed by Adnan.</strong></a>
</p>

        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
