"use client";

import { motion } from "framer-motion";
import { GraduationCap, Activity, Award, Headphones } from "lucide-react";

const features = [
  { icon: GraduationCap, title: "Expert Trainers", description: "Learn from industry professionals" },
  { icon: Activity, title: "Practical Learning", description: "Hands-on studio experience" },
  { icon: Award, title: "Certification", description: "Recognized industry credentials" },
  { icon: Headphones, title: "Career Support", description: "Placement and networking" },
];

export default function FeatureBar() {
  return (
    <section className="bg-[#111111] relative z-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-10 sm:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#1A1A1A] flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-[#0A0A0A] transition-all duration-300 shrink-0">
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm sm:text-base mb-0.5">
                  {feature.title}
                </h4>
                <p className="text-white/50 text-[11px] sm:text-xs tracking-wide">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
