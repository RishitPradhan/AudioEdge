"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Send, MessageSquare, FileText, CheckCircle2, X } from "lucide-react";
import { useState } from "react";

const WHATSAPP_NUMBER = "919938120820"; // Country code + number, no +

const GOV_IDS = [
  { value: "aadhaar",          label: "Aadhaar Card" },
  { value: "pan",              label: "PAN Card" },
  { value: "driving_licence",  label: "Driving Licence" },
  { value: "voter_id",         label: "Voter ID" },
  { value: "passport",         label: "Passport" },
  { value: "ration_card",      label: "Ration Card" },
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    docType: "",
  });
  const [showModal, setShowModal] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const docLabel = GOV_IDS.find((d) => d.value === form.docType)?.label ?? form.docType;

    const message = [
      `🎙️ *New Admission Enquiry — Audio Edge Academy*`,
      ``,
      `👤 *Name:* ${form.name}`,
      `📧 *Email:* ${form.email}`,
      `📞 *Phone:* ${form.phone}`,
      `🪪 *ID Proof Type Selected:* ${docLabel}`,
      `📎 *Document:* Will be sent separately in this chat for verification`,
      ``,
      `💬 *Message:*`,
      form.message,
      ``,
      `_Sent via audioedgeacademy.com_`,
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    
    // Show instruction modal for Option 1
    setShowModal(true);
  }

  const inputCls =
    "w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all placeholder:text-white/25";
  const labelCls = "text-xs font-medium text-white/70 block uppercase tracking-wider mb-2";

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
            Have questions about our curriculum or want to schedule a studio tour? Fill in your details and we'll respond on WhatsApp instantly.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#111111] border border-white/5 rounded-2xl p-6 sm:p-10 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="name" className={labelCls}>Full Name</label>
              <input
                type="text"
                id="name"
                value={form.name}
                onChange={handleChange}
                className={inputCls}
                placeholder="John Doe"
                required
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className={labelCls}>Email Address</label>
              <input
                type="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                className={inputCls}
                placeholder="john@example.com"
                required
              />
            </div>

            {/* Phone */}
            <div className="sm:col-span-2 space-y-2">
              <label htmlFor="phone" className={labelCls}>Phone Number</label>
              <input
                type="tel"
                id="phone"
                value={form.phone}
                onChange={handleChange}
                className={inputCls}
                placeholder="+91 99999 99999"
                required
              />
            </div>

            {/* ID Type dropdown — full width */}
            <div className="sm:col-span-2 space-y-2">
              <label htmlFor="docType" className={labelCls}>
                <FileText className="inline w-3.5 h-3.5 mr-1.5 -mt-0.5" />
                Government ID Proof Type
              </label>
              <select
                id="docType"
                value={form.docType}
                onChange={handleChange}
                className={`${inputCls} appearance-none cursor-pointer`}
                required
              >
                <option value="" disabled className="bg-[#1A1A1A]">Select Government ID</option>
                {GOV_IDS.map((d) => (
                  <option key={d.value} value={d.value} className="bg-[#1A1A1A]">
                    {d.label}
                  </option>
                ))}
              </select>
              <p className="text-amber-400/70 text-[10px] tracking-wide flex items-center gap-1.5 pt-0.5">
                <span>⚠️</span> You will be asked to send a photo/scan of this document directly in WhatsApp for verification before your seat is confirmed.
              </p>
            </div>

            {/* Message */}
            <div className="sm:col-span-2 space-y-2">
              <label htmlFor="message" className={labelCls}>Your Message</label>
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className={`${inputCls} resize-none`}
                placeholder="Any questions about the course, schedule, or fee?"
                required
              />
            </div>

            {/* Submit → WhatsApp */}
            <div className="sm:col-span-2 pt-2">
              <button
                type="submit"
                className="btn-primary w-full sm:w-auto px-12 flex items-center justify-center gap-3 mx-auto"
              >
                Send via WhatsApp
                <Send className="w-4 h-4" />
              </button>
              <p className="text-center text-white/30 text-xs mt-4">
                Tapping the button will open WhatsApp with your details pre-filled.
              </p>
            </div>

          </form>
        </motion.div>
      </div>

      {/* Instruction Modal (Option 1) */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#111111] border border-gold/20 rounded-2xl p-6 sm:p-8 max-w-md w-full relative shadow-[0_0_50px_rgba(203,170,92,0.15)] text-center"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 text-gold mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">Enquiry Sent to WhatsApp!</h3>
              <p className="text-white/60 text-sm mb-6">
                Your structured text details have been successfully formatted and opened in WhatsApp.
              </p>

              <div className="text-sm text-white/70 space-y-2 text-left bg-amber-400/5 p-4 rounded-xl border border-amber-400/20 mb-6">
                <p className="font-semibold text-amber-400 flex items-center gap-1.5">
                  <span>⚠️</span> Document Required for Verification
                </p>
                <p className="text-xs sm:text-sm leading-relaxed text-white/70">
                  Please <span className="text-white font-semibold">send a clear photo or scan</span> of your <span className="text-gold font-semibold">{GOV_IDS.find(d => d.value === form.docType)?.label ?? "ID document"}</span> directly inside the WhatsApp chat that just opened. Your seat will be confirmed only after document verification.
                </p>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="btn-primary w-full py-3 font-semibold uppercase tracking-wider text-xs rounded-sm"
              >
                Got it
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
