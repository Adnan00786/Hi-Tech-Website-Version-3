
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Brands from "@/components/Brand";
import Divider from "@/components/Divider";
import Services from "@/components/Services";
import Rentals from "@/components/Rentals";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

import React from "react";


export default function Home() {
  return (
    <>
      <Topbar/>
      <Navbar/>
      <Hero/>
      <About/>
      <Brands/>
      {/* Products Starts Here  */}
      {/* Products Ends here  */}
      <Divider/>
      <Services/>
      <Rentals/>
      <Testimonial/>
      <Footer/>
    </>
  );
}
