"use client";
import React, { useState } from 'react';
import Products from '@/components/Products';
import NavbarProducts from '@/components/Navbar_Products';
import Topbar from '@/components/Topbar';
import Footer from '@/components/Footer';

const Home = () => {

  return (
    <>
    <Topbar/>
    <NavbarProducts/>
    <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8'>Our Products</h1>
    <Products/>
    <Footer/>
    </>
  );
};

export default Home;
