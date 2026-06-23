"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Calendar, Clock, IndianRupee } from "lucide-react";
import Image from "next/image";

export default function CourseDetails() {
  const highlights = [
    "Practical & Hands-on Training",
    "Live Demonstrations",
    "Beginner Friendly",
    "Certificate of Participation",
    "Expert Guidance"
  ];

  return (
    <section className="bg-[#0A0A0A] py-16 sm:py-24 px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 pb-10 border-b border-white/10">
          <div className="max-w-3xl">
            <span className="text-gold font-medium uppercase tracking-[0.2em] text-xs sm:text-sm mb-4 inline-block">
              Intensive Fundamentals
            </span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]"
            >
              Live Sound <br/>
              <span className="text-white/60 font-light">Masterclass</span>
            </motion.h2>
          </div>
          <div className="flex flex-col gap-2 text-sm font-medium tracking-wide text-white/60">
            <p>Learn the Basics.</p>
            <p>Build the Foundation.</p>
            <p className="text-gold font-bold">Sound Like a Pro.</p>
          </div>
        </div>

        {/* Info Grid — stacks on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Program Details */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card flex flex-col"
          >
            <h3 className="text-lg font-bold text-white mb-6">Program Details</h3>
            <div className="space-y-5 flex-grow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-white/50 text-[10px] font-bold uppercase tracking-wider mb-1">Duration</p>
                  <h4 className="text-white font-medium text-base">1st – 5th July</h4>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-white/50 text-[10px] font-bold uppercase tracking-wider mb-1">Schedule</p>
                  <h4 className="text-white font-medium text-base">10:00 AM – 5:00 PM</h4>
                </div>
              </div>
            </div>
            <div className="mt-10 pt-6 border-t border-white/10">
              <p className="text-white/50 text-[10px] font-bold uppercase tracking-wider mb-2">Investment</p>
              <div className="flex items-center gap-1 text-gold text-3xl sm:text-4xl font-black">
                <IndianRupee className="w-7 h-7" strokeWidth={3} />
                10,000
              </div>
            </div>
          </motion.div>

          {/* Key Highlights */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#111111] border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col"
          >
            <h3 className="text-lg font-bold text-white mb-6">Key Highlights</h3>
            <ul className="space-y-4 flex-grow">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-white/80 text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex justify-center opacity-30 mix-blend-screen">
              <Image src="/new_logo.png" alt="Audio Edge" width={120} height={36} className="object-contain" />
            </div>
          </motion.div>

          {/* Contact & CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-5"
          >
            <div className="bg-[#111111] border border-white/5 rounded-2xl p-6 sm:p-8 flex-grow">
              <h3 className="text-lg font-bold text-white mb-6">Location & Contact</h3>
              <div className="space-y-5 text-sm text-white/70">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong className="text-white block mb-1">Audio Edge Academy</strong>
                    CDA Sector 9, 2nd Floor<br/>
                    Near Central Bank of India<br/>
                    Cuttack, Odisha – 753014
                  </p>
                </div>
                <div className="pt-5 border-t border-white/10 space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between items-center gap-4">
                    <span className="text-white/50">Phone</span>
                    <span className="text-white font-medium text-right">8598048363 / 9938120820</span>
                  </div>
                  <div className="flex justify-between items-center gap-4">
                    <span className="text-white/50">Email</span>
                    <span className="text-white font-medium truncate ml-2 text-right">audioedgeacademy@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
            <button className="btn-primary w-full">
              Secure Your Seat
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
