"use client";

import { motion } from "framer-motion";
import { Send, MessageSquare } from "lucide-react";

export default function ContactForm() {
  return (
    <section id="contact-us" className="bg-[#0A0A0A] py-16 sm:py-24 px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/5 text-gold mb-5">
            <MessageSquare className="w-7 h-7" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4">
            Get in Touch
          </h2>
          <p className="text-white/55 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Have questions about our curriculum or want to schedule a studio tour? Send us a message and our team will respond shortly.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#111111] border border-white/5 rounded-2xl p-6 sm:p-10 shadow-2xl"
        >
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-medium text-white/70 block uppercase tracking-wider">Full Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all placeholder:text-white/25"
                placeholder="John Doe"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-medium text-white/70 block uppercase tracking-wider">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all placeholder:text-white/25"
                placeholder="john@example.com"
                required
              />
            </div>
            
            <div className="sm:col-span-2 space-y-2">
              <label htmlFor="phone" className="text-xs font-medium text-white/70 block uppercase tracking-wider">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all placeholder:text-white/25"
                placeholder="+91 99999 99999"
              />
            </div>
            
            <div className="sm:col-span-2 space-y-2">
              <label htmlFor="message" className="text-xs font-medium text-white/70 block uppercase tracking-wider">Your Message</label>
              <textarea 
                id="message" 
                rows={5} 
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all resize-none placeholder:text-white/25"
                placeholder="How can we help you?"
                required
              />
            </div>
            
            <div className="sm:col-span-2 pt-2">
              <button 
                type="submit" 
                className="btn-primary w-full sm:w-auto px-12 flex items-center justify-center gap-3 mx-auto"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
