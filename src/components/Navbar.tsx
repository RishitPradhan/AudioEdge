"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ scrolled }: { scrolled?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src="/new_logo.png" 
              alt="Audio Edge Academy" 
              width={160} 
              height={48} 
              className="h-8 md:h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" 
              priority
            />
          </Link>
          
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {['Home', 'Courses', 'Contact Us'].map((item) => (
                <Link 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  className="text-white/70 font-medium text-sm tracking-wide hover:text-gold transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-2 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            <Link href="#courses" className="hidden sm:block btn-primary text-sm py-2.5 px-6">
              Enroll Now
            </Link>
          </div>

          <button onClick={toggleMenu} className="md:hidden text-white hover:text-gold transition-colors">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>
      
      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-[72px] left-0 w-full z-40 bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-6">
              {['Home', 'Courses', 'Contact Us'].map((item) => (
                <Link 
                  key={item}
                  onClick={toggleMenu} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  className="text-sm font-medium tracking-wide text-gray-300 hover:text-gold transition-colors"
                >
                  {item}
                </Link>
              ))}
              <Link onClick={toggleMenu} href="#courses" className="btn-primary text-center mt-4">
                Enroll Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
