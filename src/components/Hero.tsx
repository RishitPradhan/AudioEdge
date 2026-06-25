"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const logoRef    = useRef<HTMLDivElement>(null);

  // Displacement to the navbar logo landing position (calculated from actual DOM)
  const [disp, setDisp] = useState({ x: 0, y: 0, scale: 1 });

  useEffect(() => {
    function calc() {
      if (!logoRef.current) return;
      const rect = logoRef.current.getBoundingClientRect();

      const vw = window.innerWidth;
      // Navbar logo target — matches px-6 (24px) / lg:px-12 (48px) and ~20px from top
      const navLeft  = vw >= 1024 ? 48 : 24;
      const navTop   = vw >= 768  ? 20 : 14;
      const navLogoW = vw >= 768  ? 108 : 86;

      // origin-top-left: x/y are shifts of the top-left corner
      const targetScale = navLogoW / rect.width;
      const dx = navLeft - rect.left;
      const dy = navTop  - rect.top;

      setDisp({ x: dx, y: dy, scale: targetScale });
    }

    // Double-RAF ensures layout is fully painted
    requestAnimationFrame(() => requestAnimationFrame(calc));
    window.addEventListener("resize", calc, { passive: true });
    return () => window.removeEventListener("resize", calc);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "0.42 start"], // animation window
  });

  // Snappy spring
  const smooth = useSpring(scrollYProgress, { stiffness: 280, damping: 28, mass: 0.4 });

  // Transforms — function form so they re-evaluate when `disp` changes
  const logoX     = useTransform(smooth, (v) => v * disp.x);
  const logoY     = useTransform(smooth, (v) => v * disp.y);
  const logoScale = useTransform(smooth, (v) => 1 + (disp.scale - 1) * v);
  // Stay fully visible until 65% then snap to 0 at 100% — synced with navbar fade-in
  const logoOpacity = useTransform(smooth, [0, 0.65, 1], [1, 1, 0]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#080808] pb-12 px-6 lg:px-16"
      // NOTE: no overflow-hidden here — logo must travel freely outside bounds
    >
      {/* Background — overflow-hidden confined to this div only */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0 bg-cover bg-center opacity-90"
          style={{ backgroundImage: "url('/new_hero.png')" }}
        />
        <div className="absolute inset-0 bg-[#080808]/72" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/50 via-[#080808]/20 to-[#080808]" />
      </div>

      {/* ── Logo — travels from hero center to navbar top-left ── */}
      <motion.div
        ref={logoRef}
        className="relative z-20 mb-10 origin-top-left"
        style={{
          opacity: logoOpacity,
          x:       logoX,
          y:       logoY,
          scale:   logoScale,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Image
            src="/new_logo.png"
            alt="Audio Edge Academy"
            width={280}
            height={100}
            className="w-[170px] sm:w-[220px] md:w-[280px] h-auto object-contain
                       drop-shadow-[0_0_40px_rgba(203,170,92,0.25)]"
            priority
          />
        </motion.div>
      </motion.div>

      {/* ── Text content ── */}
      <div className="relative z-10 max-w-[900px] mx-auto w-full flex flex-col items-center text-center">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="flex items-center gap-3 mb-8 justify-center"
        >
          <div className="w-6 h-px bg-gold" />
          <span className="text-gold text-[10px] sm:text-xs font-medium tracking-[0.25em] uppercase">
            Cuttack, Odisha · Est. 2026
          </span>
          <div className="w-6 h-px bg-gold" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[88px] font-black tracking-tighter leading-[0.92] text-white mb-6"
        >
          Where Sound{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-300">
            Becomes&nbsp;Art.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.52 }}
          className="text-white/55 text-sm sm:text-base lg:text-lg font-light leading-relaxed max-w-sm sm:max-w-lg mb-10"
        >
          Hands-on training with professional-grade equipment and real-world
          mentors. Built for serious audio engineers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.66 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center"
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
