"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function FloatingWhatsApp() {
  return (
    <Link 
      href="https://wa.me/919938120820"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-gold text-[#080808] w-14 h-14 rounded-full shadow-[0_4px_20px_rgba(203,170,92,0.3)] flex items-center justify-center hover:bg-yellow-400 hover:scale-110 active:scale-95 transition-all duration-300 group"
      aria-label="Talk to us on WhatsApp"
    >
      {/* Pulse rings */}
      <span className="absolute inset-0 rounded-full bg-gold/30 animate-ping opacity-75 pointer-events-none" />
      
      <MessageCircle className="w-7 h-7 relative z-10" strokeWidth={2.5} />

      {/* Tooltip */}
      <span className="absolute right-16 bg-[#111111] border border-white/10 text-white text-[10px] sm:text-xs font-bold tracking-wider uppercase py-1.5 px-3 rounded-md opacity-0 scale-90 translate-x-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl">
        Talk to Us
      </span>
    </Link>
  );
}
