import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] pt-20 pb-8 px-6 lg:px-12 border-t border-white/5 relative overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 flex flex-col">
            <Link href="/" className="mb-6 inline-block">
              <Image 
                src="/new_logo.png" 
                alt="Audio Edge Academy" 
                width={200} 
                height={60} 
                className="h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" 
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-8 font-light">
              Audio Edge Academy is a premier institution dedicated to shaping the next generation of audio engineers and sound designers.
            </p>
            <div className="flex gap-4 font-bold text-xs">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-[#0A0A0A] hover:bg-gold transition-colors">
                FB
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-[#0A0A0A] hover:bg-gold transition-colors">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-[#0A0A0A] hover:bg-gold transition-colors">
                YT
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/60 font-medium">
              <li><Link href="#home" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link href="#courses" className="hover:text-gold transition-colors">Curriculum</Link></li>
              <li><Link href="#contact-us" className="hover:text-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-5 text-sm text-white/60">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gold shrink-0" />
                <span className="leading-relaxed">
                  <strong className="text-white block mb-1">CDA Sector 9, 2nd Floor</strong>
                  Near Central Bank of India<br/>
                  Cuttack, Odisha – 753014
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <span>8598048363 | 9938120820</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <span>audioedgeacademy@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40 font-medium">
          <p>&copy; {currentYear} Audio Edge Academy. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
