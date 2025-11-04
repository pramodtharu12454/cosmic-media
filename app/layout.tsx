// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/(user)/header";
import Footer from "@/components/(user)/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cosmic Media Pvt Ltd - Creative Media Solutions",
  description:
    "Cosmic Media Pvt Ltd offers creative media content, videos, and visual storytelling for businesses and individuals.",
  keywords:
    "media, video production, creative content, visual storytelling, Cosmic Media",
  authors: [{ name: "Cosmic Media Pvt Ltd" }],
  openGraph: {
    title: "Cosmic Media Pvt Ltd - Creative Media Solutions",
    description: "Explore our videos, creative projects, and visual content.",
    url: "https://www.yoursite.com",
    siteName: "Cosmic Media",
    images: [
      {
        url: "https://www.yoursite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cosmic Media Visual Content",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cosmic Media Pvt Ltd",
    description: "Creative media and video content for your business.",
    images: ["https://www.yoursite.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />

        {children}

        <Footer />

        {/* Structured Data for Video SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoObject",
              name: "Sample Video",
              description:
                "Cosmic Media video content for creative storytelling.",
              thumbnailUrl: ["https://www.yoursite.com/video-thumbnail.jpg"],
              uploadDate: "2025-09-19",
              contentUrl: "https://www.yoursite.com/video.mp4",
              embedUrl: "https://www.yoursite.com/embed/video-id",
              publisher: {
                "@type": "Organization",
                name: "Cosmic Media Pvt Ltd",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.yoursite.com/logo.png",
                },
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
