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
  title: "Asha Ramanathan | Machine Learning Engineer",
  description:
    "Portfolio showcasing the applied machine learning work of Asha Ramanathan across production AI systems, research, and responsible deployment.",
  metadataBase: new URL("https://agentic-a6fdc519.vercel.app"),
  keywords: [
    "machine learning engineer",
    "ml engineer portfolio",
    "applied machine learning",
    "mlops",
    "responsible ai",
    "deep learning",
  ],
  openGraph: {
    title: "Asha Ramanathan | Machine Learning Engineer",
    description:
      "Applied ML engineer shipping reliable AI systems for mission-critical products.",
    url: "https://agentic-a6fdc519.vercel.app",
    siteName: "Asha Ramanathan Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asha Ramanathan | Machine Learning Engineer",
    description:
      "Building resilient ML systems that ship to production and deliver measurable impact.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
