import Link from "next/link";
import { ArrowLeft, ShieldAlert } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Audio Edge Academy",
  description: "Learn how we handle your admission and enquiry data securely at Audio Edge Academy.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-gray-200 py-16 sm:py-24 px-6 lg:px-12 relative overflow-hidden font-sans">
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-white/50 hover:text-gold transition-colors text-sm mb-12 group font-semibold uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Academy Homepage
        </Link>

        {/* Header */}
        <div className="border-b border-white/10 pb-8 mb-10">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gold/10 text-gold mb-4">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">
            Privacy Policy
          </h1>
          <p className="text-white/55 text-sm">
            Last Updated: June 25, 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-white/70 leading-relaxed text-sm sm:text-base">
          
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wide border-l-2 border-gold pl-3">
              1. Introduction & Overview
            </h2>
            <p>
              Welcome to Audio Edge Academy. We respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy describes how we handle, process, and protect your information when you visit our website (audioedgeacademy.com) or submit admission enquiries.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wide border-l-2 border-gold pl-3">
              2. Information We Collect
            </h2>
            <p>
              When you use our admission enquiry form or get in touch with us, we collect the following personal information to facilitate your booking and verify your application:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Contact Information:</strong> Full Name, Email Address, and Phone Number.</li>
              <li><strong>Identity Verification details:</strong> Your selected type of government identification proof (e.g. Aadhaar, PAN, Passport, Voter ID, Driving Licence) which you agree to provide to our team.</li>
              <li><strong>Inquiry details:</strong> Any custom message or instructions you provide in our form.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wide border-l-2 border-gold pl-3">
              3. How We Process Document Verification
            </h2>
            <p>
              To ensure compliance and protect the integrity of our admissions:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Zero Cloud-Storage of Sensitive Documents:</strong> We do NOT upload, host, or store scan files of your government ID proofs on our servers or databases.</li>
              <li><strong>Secure Peer-to-Peer Workflow:</strong> Your document verification is conducted manually and securely via end-to-end encrypted chats on WhatsApp, protecting your identity documents from cloud vulnerabilities.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wide border-l-2 border-gold pl-3">
              4. How We Use Your Information
            </h2>
            <p>
              The information we collect is used solely for the following purposes:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Processing your seat reservations and applications.</li>
              <li>Reaching out to you on WhatsApp or phone to confirm details.</li>
              <li>Complying with administrative requirements of the academy courses.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wide border-l-2 border-gold pl-3">
              5. Data Protection & Security
            </h2>
            <p>
              We implement industry-standard practices to protect your data. Since our principal messaging channel is WhatsApp, communications are encrypted in transit. We urge students to avoid posting scans of government IDs in unencrypted public forums.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wide border-l-2 border-gold pl-3">
              6. Your Rights
            </h2>
            <p>
              You have the right to request deletion of your chat transcripts, review the registration data we hold, or correct any inaccuracies in your contact details. To make requests, email us at <span className="text-white font-medium">audioedgeacademy@gmail.com</span>.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wide border-l-2 border-gold pl-3">
              7. Contact Information
            </h2>
            <p>
              For privacy concerns or to contact our data officer, please write to us at:
            </p>
            <div className="bg-white/5 border border-white/10 p-5 rounded-xl text-sm">
              <strong className="text-white block mb-1">Audio Edge Academy</strong>
              CDA Sector 9, 2nd Floor, Near Central Bank of India<br />
              Cuttack, Odisha – 753014<br />
              Email: audioedgeacademy@gmail.com
            </div>
          </section>

        </div>

      </div>
    </main>
  );
}
