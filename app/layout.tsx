import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harshit Khanna — Software Engineer | Backend • AI/ML • Cloud • iOS",
  description:
    "Portfolio of Harshit Khanna, a Computer Science Engineering student building scalable backend systems, AI applications, cloud infrastructure and native iOS products.",
  keywords: [
    "Harshit Khanna",
    "Software Engineer",
    "Backend Engineer",
    "Machine Learning",
    "iOS Developer",
    "Cloud Infrastructure",
    "Distributed Systems",
    "FastAPI",
    "Python",
    "Swift",
    "Graphic Era University",
  ],
  authors: [{ name: "Harshit Khanna" }],
  creator: "Harshit Khanna",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://harshitkhanna.dev",
    title: "Harshit Khanna — Software Engineer | Backend • AI/ML • Cloud • iOS",
    description:
      "Portfolio of Harshit Khanna, a Computer Science Engineering student building scalable backend systems, AI applications, cloud infrastructure and native iOS products.",
    siteName: "Harshit Khanna Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshit Khanna — Software Engineer | Backend • AI/ML • Cloud • iOS",
    description:
      "Portfolio of Harshit Khanna, a Computer Science Engineering student building scalable backend systems, AI applications, cloud infrastructure and native iOS products.",
    creator: "@harshitkhanna16",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#050508] text-white antialiased selection:bg-cyan-500/20 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
