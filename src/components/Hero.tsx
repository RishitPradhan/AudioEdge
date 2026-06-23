"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#080808] pt-28 pb-12 px-6 lg:px-16">

      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/premium_studio_hero.png')" }}
        />
        <div className="absolute inset-0 bg-[#080808]/72" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full flex-1 flex flex-col justify-center">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-6 h-px bg-gold" />
          <span className="text-gold text-[10px] sm:text-xs font-medium tracking-[0.25em] uppercase">
            Cuttack, Odisha · Est. 2019
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[88px] font-black tracking-tighter leading-[0.92] text-white mb-6 max-w-3xl"
        >
          Where Sound<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-300">
            Becomes&nbsp;Art.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="text-white/55 text-sm sm:text-base lg:text-lg font-light leading-relaxed max-w-sm sm:max-w-md mb-10"
        >
          Hands-on training with professional-grade equipment and real-world mentors. Built for serious audio engineers.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <Link
            href="#courses"
            className="group inline-flex items-center gap-2 bg-gold hover:bg-yellow-300 text-[#080808] px-7 py-3.5 font-bold text-xs tracking-widest uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(203,170,92,0.35)] w-full sm:w-auto justify-center"
          >
            Explore Courses
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="#contact-us"
            className="inline-flex items-center gap-2 border border-white/20 text-white/70 hover:text-white hover:border-white/40 px-7 py-3.5 font-medium text-xs tracking-widest uppercase rounded-sm transition-all duration-300 w-full sm:w-auto justify-center"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>



    </section>
  );
}
