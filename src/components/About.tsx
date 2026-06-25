"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-6 lg:px-12 overflow-hidden relative bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16 relative z-10">
        
        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden"
          style={{ aspectRatio: "4/3" }}
        >
          <div className="absolute -inset-4 bg-gold/15 blur-3xl rounded-full opacity-40 z-0" />
          <Image 
            src="/studio_hero_students_logo.png" 
            alt="Students in studio" 
            fill
            className="relative z-10 rounded-2xl shadow-2xl border border-white/10 object-cover" 
          />
        </motion.div>
        
        {/* Text */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full lg:w-1/2 relative z-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight mb-5 leading-tight text-white">
            Professional Training for the <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-600">Next Generation</span> of Engineers.
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mb-8 leading-relaxed">
            At Audio Edge Academy, we bridge the gap between theoretical knowledge and real-world application. Our immersive programs equip you with the skills demanded by today's top studios and live venues.
          </p>
          <ul className="space-y-5">
            {[
              "Live Venue Internships & Real-world Exposure",
              "Dedicated Job Placement Assistance",
              "24/7 Studio Access for Enrolled Students",
              "Global Network of Alumni & Industry Pros"
            ].map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-gray-200 text-sm sm:text-base">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
