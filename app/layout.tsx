import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/client/navBar";
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Saif Elkastawy - Senior Full Stack Developer",
    template: "%s | Saif Elkastawy"
  },
  description: "Portfolio of Saif Elkastawy, a 15-year-old Senior Full Stack Developer specializing in Next.js, React, and TypeScript.",
  keywords: ["Saif Elkastawy", "Full Stack Developer", "React", "Next.js", "TypeScript", "Portfolio", "15 years old", "Senior Developer", "Web Developer"],
  authors: [{ name: "Saif Elkastawy" }],
  creator: "Saif Elkastawy",
  publisher: "Saif Elkastawy",
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
  metadataBase: new URL('https://portfolio-nine-peach-41.vercel.app'), // 🔁 Replace with your actual URL
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Saif Elkastawy - Senior Full Stack Developer",
    description: "Portfolio of Saif Elkastawy, a 15-year-old Senior Full Stack Developer specializing in Next.js, React, and TypeScript.",
    url: "https://portfolio-nine-peach-41.vercel.app", // 🔁 Replace with your actual URL
    siteName: "Saif Elkastawy Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Saif Elkastawy - Senior Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saif Elkastawy - Senior Full Stack Developer",
    description: "Portfolio of Saif Elkastawy, a 15-year-old Senior Full Stack Developer specializing in Next.js, React, and TypeScript.",
    images: ["/og-image.png"],
    creator: "@saifelkastawy", // Optional - replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "W-PZZQTDIMBshT3nt6nr-7UWb5mZ_LBvnsAo19IRFE8",
  },
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
      <body className="h-full flex flex-col">
        <NavBar />
        <main className="flex-1 z-0">
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}