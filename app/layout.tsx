import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { GoogleAnalytics } from "@/components/google-analytics";
import { jsonLd, siteConfig } from "@/lib/site";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteConfig.name,
  title: {
    default: "Utah Landscaping Services | Complete Care Landscaping",
    template: "%s | Complete Care Landscaping",
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Utah Landscaping Services | Complete Care Landscaping",
    description: siteConfig.description,
    url: siteUrl,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Utah Landscaping Services | Complete Care Landscaping",
    description: siteConfig.description,
  },
  category: "Landscaping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-stone-950">
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
