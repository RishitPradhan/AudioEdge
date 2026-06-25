"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMotionValue, useSpring, motion } from "framer-motion";

// Navbar logo end widths — tuned to look right in the navbar
const NAV_W_DESKTOP = 110; // px, desktop (md+)
const NAV_W_MOBILE  = 88;  // px, mobile

// Navbar left padding — matches px-6 (24px) and lg:px-12 (48px)
const NAV_X_LG = 48;
const NAV_X    = 24;

// Navbar vertical offset from top — navbar is py-6 (24px) unscrolled
// Logo sits centered in that 72px block ≈ top + (72 - logoH) / 2
const NAV_Y_DESKTOP = 18; // px from top
const NAV_Y_MOBILE  = 14;

export default function TravelingLogo() {
  const [ready, setReady] = useState(false);

  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const mvW = useMotionValue(260);

  const x = useSpring(mvX, { stiffness: 140, damping: 30, mass: 0.6 });
  const y = useSpring(mvY, { stiffness: 140, damping: 30, mass: 0.6 });
  const w = useSpring(mvW, { stiffness: 140, damping: 30, mass: 0.6 });

  const dimsRef = useRef({
    startX: 0,
    startY: 0,
    endX: NAV_X,
    endY: NAV_Y_DESKTOP,
    startW: 260,
    endW: NAV_W_DESKTOP,
    threshold: 500,
  });

  useEffect(() => {
    function getHeroLogoPos() {
      // Query the spacer anchor rendered in Hero.tsx
      const anchor = document.querySelector("[data-logo-anchor]");
      if (anchor) {
        const rect = anchor.getBoundingClientRect();
        // rect.top is relative to viewport; at scrollY=0 this is also the absolute Y
        return { top: rect.top, left: rect.left, width: rect.width, height: rect.height };
      }
      // Fallback if anchor not yet mounted
      return null;
    }

    function calc() {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      const endX = vw >= 1024 ? NAV_X_LG : NAV_X;
      const endY = vw >= 768 ? NAV_Y_DESKTOP : NAV_Y_MOBILE;
      const endW = vw >= 768 ? NAV_W_DESKTOP : NAV_W_MOBILE;

      const pos = getHeroLogoPos();
      let startX: number;
      let startY: number;
      let startW: number;

      if (pos) {
        // Use the exact anchor position — perfect alignment with spacer
        startX = pos.left;
        startY = pos.top;          // at scrollY=0, viewport top = page top
        startW = pos.width;        // anchor has same width as the logo spacer
      } else {
        // Fallback: centre horizontally, rough vertical centre
        startW = vw < 640 ? 160 : vw < 768 ? 200 : 260;
        startX = vw / 2 - startW / 2;
        startY = vh * 0.28;
      }

      dimsRef.current = {
        startX,
        startY,
        endX,
        endY,
        startW,
        endW,
        threshold: vh * 0.5,
      };

      update(window.scrollY);
    }

    function lerp(a: number, b: number, t: number) {
      return a + (b - a) * t;
    }

    function easeInOut(t: number) {
      return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    }

    function update(scrollY: number) {
      const d = dimsRef.current;
      const raw = Math.min(1, Math.max(0, scrollY / d.threshold));
      const t = easeInOut(raw);
      mvX.set(lerp(d.startX, d.endX, t));
      mvY.set(lerp(d.startY, d.endY, t));
      mvW.set(lerp(d.startW, d.endW, t));
    }

    function onScroll() {
      update(window.scrollY);
    }

    // Wait one frame so Hero's DOM is painted before we measure
    const raf = requestAnimationFrame(() => {
      calc();
      setReady(true);
    });

    window.addEventListener("resize", calc, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", calc);
      window.removeEventListener("scroll", onScroll);
    };
  }, [mvX, mvY, mvW]);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[60] origin-top-left pointer-events-auto"
      style={{ x, y }}
      initial={{ opacity: 0 }}
      animate={{ opacity: ready ? 1 : 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <Link href="/" aria-label="Audio Edge Academy home">
        <motion.div style={{ width: w }}>
          <Image
            src="/new_logo.png"
            alt="Audio Edge Academy"
            width={260}
            height={94}
            className="w-full h-auto object-contain drop-shadow-[0_0_28px_rgba(203,170,92,0.18)]"
            priority
          />
        </motion.div>
      </Link>
    </motion.div>
  );
}
