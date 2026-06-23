import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Audio Edge Academy | Shape Your Sound Future",
  description: "Professional training institute delivering industry-focused audio engineering and sound production courses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} ${inter.variable} font-sans bg-[#0A0A0A] text-gray-100 antialiased selection:bg-gold selection:text-[#0A0A0A]`}>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
