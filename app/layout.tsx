import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import { site } from "@/lib/data";
import { LanguageProvider } from "@/lib/language-context";
import { LanguageModal } from "@/components/language-switcher";
import "./globals.css";


const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });
const dm = DM_Sans({ subsets: ["latin"], variable: "--font-dm" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://umajoshi-tailors.com"),
  title: `${site.name} — Ladies Tailor in ${site.society}`,
  description: `Custom ladies tailoring in ${site.society} by ${site.owner}. Saree fall-pico, blouse stitching, designer suits, kurtas & alterations with doorstep pickup. Call/WhatsApp ${site.phone}.`,
  keywords: [
    "Uma Joshi",
    "Uma Joshi tailor",
    "Ladies Tailor Sare Homes",
    "Tower 8 Sare Homes",
    "Tailor in Sare Homes",
    "Blouse stitching Sare Homes",
    "Suit stitching Sare Homes",
    "Saree fall pico Sare Homes",
    "Ladies tailor Gurgaon",
    "Society tailor Sare Homes",
    "Silai Studio Sare Homes",
    "Indian ethnic wear tailoring",
  ],
  authors: [{ name: site.owner }],
  creator: site.owner,
  publisher: site.name,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "192x192", type: "image/png" }],
    shortcut: "/icon.png",
  },
  openGraph: {
    title: `${site.name} — Ladies Tailor in ${site.society}`,
    description: `Custom ladies tailoring in ${site.society} by ${site.owner}. Saree fall-pico, blouse stitching, designer suits, kurtas & alterations with doorstep pickup. Call/WhatsApp ${site.phone}.`,
    url: "/",
    siteName: site.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${site.name} — Ladies Tailor Studio in ${site.society}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Ladies Tailor in ${site.society}`,
    description: `Custom ladies tailoring in ${site.society} by ${site.owner}. Doorstep pickup & drop inside Sare Homes. Call/WhatsApp ${site.phone}.`,
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#7a1f3d",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  description: `Custom ladies tailoring studio in ${site.society} run by ${site.owner}. Specializing in blouse stitching, salwar suits, sarees, and alterations.`,
  image: "/og-image.jpg",
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.society,
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
  priceRange: "₹40 - ₹2500",
  openingHours: "Mo-Sa 10:00-19:00",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dm.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700&family=Rozha+One&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="pb-24 md:pb-12 antialiased">
        <LanguageProvider>
          {children}
          <LanguageModal />
        </LanguageProvider>
      </body>
    </html>
  );
}

