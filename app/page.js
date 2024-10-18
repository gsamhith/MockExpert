// page.js
"use client"
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Navbar from './components/Navbar';
import FeatureSection from './components/howItWorks';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';



export default function Home() {
  return (
    <>
    <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    <Navbar/>
   
    <hr></hr>
    <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
         <br></br>
        <hr className='text-black'></hr>
        <FeatureSection />
        <Footer/>        
      </div>
   
    </>
  );
}
