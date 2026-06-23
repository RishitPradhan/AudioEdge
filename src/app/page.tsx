"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureBar from "@/components/FeatureBar";
import ProfessionalModules from "@/components/ProfessionalModules";
import CourseDetails from "@/components/CourseDetails";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar scrolled={scrolled} />
      <Hero scrolled={scrolled} />
      <FeatureBar />
      <ProfessionalModules />
      <CourseDetails />
      <ContactForm />
      <Footer />
    </main>
  );
}
