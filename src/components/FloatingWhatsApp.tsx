"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function FloatingWhatsApp() {
  return (
    <Link 
      href="https://wa.me/1234567890" // Replace with actual WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-gold text-[#121414] py-4 px-2 rounded-l-md shadow-[-4px_0_15px_rgba(0,0,0,0.1)] flex flex-col items-center gap-4 hover:bg-yellow-500 hover:-translate-x-1 transition-all group"
    >
      <MessageCircle className="w-6 h-6 mb-2" />
      <div className="text-sm font-bold tracking-wider uppercase [writing-mode:vertical-lr] rotate-180">
        Talk to Us
      </div>
    </Link>
  );
}
