import Link from "next/link";
import { ArrowLeft, Scale } from "lucide-react";

export const metadata = {
  title: "Terms of Service | Audio Edge Academy",
  description: "Review the rules, policies, and code of conduct for enrolling in Audio Edge Academy courses.",
};

export default function TermsOfServicePage() {
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
            <Scale className="w-6 h-6" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">
            Terms of Service
          </h1>
          <p className="text-white/55 text-sm">
            Last Updated: June 25, 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-white/70 leading-relaxed text-sm sm:text-base">
          
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wide border-l-2 border-gold pl-3">
              1. Enrolment & Admission
            </h2>
            <p>
              By applying for courses at Audio Edge Academy, you agree to submit true, complete, and accurate information (name, contact number, email, and government ID type). Double registrations or providing fake contact info may lead to automatic cancellation of your seat enquiry.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wide border-l-2 border-gold pl-3">
              2. Seat Reservations & Fees
            </h2>
            <p>
              Admissions to the masterclass sessions (such as the upcoming July 1st – 5th masterclass) are limited and confirmed on a first-come, first-served basis:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Verification Requirement:</strong> You must present a valid government-issued ID card matching the details submitted on the website to confirm reservation.</li>
              <li><strong>Fee Structure:</strong> Standard investment fee is ₹9,999. All fees must be cleared prior to or on the date of commencement unless alternate arrangements have been authorized in writing.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wide border-l-2 border-gold pl-3">
              3. Attendance & Studio Rules
            </h2>
            <p>
              Students enrolling in courses agree to comply with all safety, operational, and decorum guidelines enforced at our offline Cuttack campus:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Proper handling of expensive console and physical outboard gear is mandatory. Any malicious or negligent damage to studio property will be billed to the responsible student.</li>
              <li>A high code of mutual respect and professionalism is expected during class hours (10:00 AM – 5:00 PM).</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wide border-l-2 border-gold pl-3">
              4. Curriculum & Schedule Modifications
            </h2>
            <p>
              While we guarantee high-quality lessons matching all listed modules, Audio Edge Academy reserves the right to modify training schedules, masterclass dates, or guest instructor lineups in the event of emergencies or unforeseen circumstances. Registered students will be notified of any changes immediately.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wide border-l-2 border-gold pl-3">
              5. Intellectual Property
            </h2>
            <p>
              All course guides, structural modules, custom software setups, and instructional material provided during the course are the intellectual property of Audio Edge Academy and may not be redistributed, sold, or copied for external training usage.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wide border-l-2 border-gold pl-3">
              6. Limitation of Liability
            </h2>
            <p>
              Audio Edge Academy is not liable for personal injuries or loss of personal property occurring at the academy campus or offsite venue locations during live audio internships.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wide border-l-2 border-gold pl-3">
              7. Governing Law
            </h2>
            <p>
              These Terms of Service shall be governed by, construed, and enforced in accordance with the laws of Odisha, India, without regard to conflict of law principles. All disputes are subject to Cuttack jurisdiction.
            </p>
          </section>

        </div>

      </div>
    </main>
  );
}
