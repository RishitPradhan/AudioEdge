import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const siteUrl = "https://audioedgeacademy.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  // ── Core ──────────────────────────────────────────────────────────────────
  title: {
    default: "Audio Edge Academy | Professional Sound Engineering Institute in Cuttack",
    template: "%s | Audio Edge Academy",
  },
  description:
    "Audio Edge Academy is Odisha's premier audio engineering & live sound institute in Cuttack. Hands-on training in mixing, FOH, digital consoles, acoustics & more. Enrol for our July 1–5 masterclass today.",
  keywords: [
    "audio engineering course Cuttack",
    "sound engineering institute Odisha",
    "live sound training India",
    "music production course Cuttack",
    "FOH mixing workshop",
    "digital console training",
    "audio academy Odisha",
    "sound engineering certificate",
    "Audio Edge Academy",
    "music technology course India",
  ],

  // ── Canonical ────────────────────────────────────────────────────────────
  alternates: {
    canonical: "/",
  },

  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Audio Edge Academy",
    title: "Audio Edge Academy | Professional Sound Engineering Institute in Cuttack, Odisha",
    description:
      "Learn live sound, mixing & audio engineering from real-world professionals at Cuttack's most immersive audio academy. Join the July 1–5 masterclass.",
    images: [
      {
        url: "/new_hero.png",
        width: 1200,
        height: 630,
        alt: "Audio Edge Academy — Professional Sound Engineering Institute in Cuttack",
      },
    ],
    locale: "en_IN",
  },

  // ── Twitter / X ───────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Audio Edge Academy | Professional Sound Engineering Institute",
    description:
      "Cuttack's premier live sound & audio engineering academy. Enrol for the July 1–5 Masterclass now.",
    images: ["/new_hero.png"],
  },

  // ── Robots ────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Verification (add when you have Google Search Console token) ──────────
  // verification: { google: "YOUR_GOOGLE_SITE_VERIFICATION_TOKEN" },

  // ── Icons ────────────────────────────────────────────────────────────────
  icons: {
    icon: "/new_logo.png",
    shortcut: "/new_logo.png",
    apple: "/new_logo.png",
  },
};

// ── JSON-LD Structured Data ──────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": `${siteUrl}/#organization`,
      name: "Audio Edge Academy",
      url: siteUrl,
      logo: `${siteUrl}/new_logo.png`,
      description:
        "Professional audio engineering and live sound training institute based in Cuttack, Odisha, India.",
      foundingDate: "2026",
      address: {
        "@type": "PostalAddress",
        streetAddress: "CDA Sector 9, 2nd Floor, Near Central Bank of India",
        addressLocality: "Cuttack",
        addressRegion: "Odisha",
        postalCode: "753014",
        addressCountry: "IN",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-8598048363",
          contactType: "admissions",
          availableLanguage: ["English", "Odia", "Hindi"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+91-9938120820",
          contactType: "customer support",
          availableLanguage: ["English", "Odia", "Hindi"],
        },
      ],
      email: "audioedgeacademy@gmail.com",
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Audio Edge Academy",
      publisher: { "@id": `${siteUrl}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}/?s={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Course",
      name: "Live Sound Masterclass — Basics & Fundamentals",
      description:
        "A 5-day intensive masterclass covering live sound fundamentals including mixing consoles, microphones, loudspeakers, crossovers, cables and digital FOH workflows.",
      provider: { "@id": `${siteUrl}/#organization` },
      startDate: "2026-07-01",
      endDate: "2026-07-05",
      offers: {
        "@type": "Offer",
        price: "9999",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "onsite",
        location: {
          "@type": "Place",
          name: "Audio Edge Academy",
          address: {
            "@type": "PostalAddress",
            streetAddress: "CDA Sector 9, 2nd Floor",
            addressLocality: "Cuttack",
            addressRegion: "Odisha",
            addressCountry: "IN",
          },
        },
        startDate: "2026-07-01",
        endDate: "2026-07-05",
        courseSchedule: {
          "@type": "Schedule",
          startTime: "10:00",
          endTime: "17:00",
          repeatFrequency: "P1D",
        },
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Courses", item: `${siteUrl}/#courses` },
        { "@type": "ListItem", position: 3, name: "Contact", item: `${siteUrl}/#contact-us` },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Geo meta for local SEO */}
        <meta name="geo.region" content="IN-OR" />
        <meta name="geo.placename" content="Cuttack, Odisha" />
        <meta name="geo.position" content="20.4625;85.8828" />
        <meta name="ICBM" content="20.4625, 85.8828" />
        {/* Language */}
        <meta httpEquiv="content-language" content="en-IN" />
      </head>
      <body
        className={`${montserrat.variable} ${inter.variable} font-sans bg-[#0A0A0A] text-gray-100 antialiased selection:bg-gold selection:text-[#0A0A0A]`}
      >
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
