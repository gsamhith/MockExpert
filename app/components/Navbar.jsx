import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import Image from 'next/image'
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { motion } from "framer-motion";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  const container = (delay) => ({
    hidden: {x: 50, opacity: 0},
    visible: {
      x: 0,
      opacity: 1,
      transition: {duration: 1.5, delay: delay},
    }
  })
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg ">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <motion.div 
           whileInView={{opacity: 1, x:0}}
           initial={{opacity:0, x: -100}}
           transition={{duration: 0.5}} className="flex items-center flex-shrink-0">
            <img className="h-11 mr-2" src={"/mockxpert-high-resolution-logo-transparent.png"} alt="Logo" />
            
          </motion.div>
          {/* <ul className="hidden lg:flex ml-14 space-x-12 ">
            {navItems.map((item, index) => (
              <li key={index}>
                <a className=" transition-all cursor-pointer  font-bold " href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul> */}
          <motion.div 
           whileInView={{opacity: 1, x:0}}
           initial={{opacity:0, x: 100}}
           transition={{duration: 0.5}} className="hidden lg:flex justify-center space-x-12 items-center">
         
            <Link href="/dashboard">
         <Button className="bg-gradient-to-r from-orange-500 to-red-800 py-2 px-3 rounded-md">
         Create an account
          </Button>
        </Link>

          </motion.div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            {/* <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul> */}
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <Link href="/dashboard">
         <Button className="bg-gradient-to-r from-orange-500 to-red-800 py-2 px-3 rounded-md">
         Create an account
          </Button>
        </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
