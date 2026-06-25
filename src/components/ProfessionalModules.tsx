"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

const courses = [
  { id: "01", title: "Basic of Live Sound", duration: "July 1st - 5th", image: "/new_course1.png" },
  { id: "02", title: "Loudspeaker & Mic", duration: "July 1st - 5th", image: "/new_course2.png" },
  { id: "03", title: "Crossover Basics", duration: "July 1st - 5th", image: "/new_about.png" },
  { id: "04", title: "Cables & Connectors", duration: "July 1st - 5th", image: "/new_course1.png" },
  { id: "05", title: "Digital Console", duration: "July 1st - 5th", image: "/new_course2.png" }
];

export default function ProfessionalModules() {
  return (
    <section id="courses" className="bg-[#0A0A0A] py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div className="flex flex-col">
            <div className="text-gold font-medium uppercase tracking-widest text-xs sm:text-sm mb-4 flex items-center gap-4">
              <span className="w-6 h-[1px] bg-gold" />
              Curriculum Core
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Professional Audio Training
            </h2>
            <p className="text-white/60 text-sm sm:text-base mt-2 font-medium tracking-wide">
              Basics and Fundamentals of Live Sound
            </p>
          </div>
          <Link href="#all-courses" className="btn-secondary flex items-center gap-2 group self-start sm:self-auto whitespace-nowrap text-sm">
            View All
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Course Grid — 1 col mobile, 2 col tablet, 5 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-[#111111] rounded-xl overflow-hidden group hover:-translate-y-1 transition-all duration-300 border border-white/5 hover:border-gold/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex flex-col"
            >
              {/* Image */}
              <div className="relative h-40 sm:h-48 w-full overflow-hidden">
                <Image 
                  src={course.image} 
                  alt={course.title} 
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="text-gold text-[10px] font-bold mb-2 uppercase tracking-widest">Module {course.id}</div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-4 leading-snug flex-grow">{course.title}</h3>
                <div className="flex items-center gap-2 text-white/40 text-xs font-medium pt-3 border-t border-white/10">
                  <Clock className="w-3.5 h-3.5" />
                  {course.duration}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
