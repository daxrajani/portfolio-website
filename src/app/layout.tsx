import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dax Rajani | Embedded Firmware Engineer",
  description:
    "Embedded firmware engineer with 1.5+ years shipping production firmware across BLE, NFC, and Sub GHz wireless on ARM Cortex M. MEng ECE Concordia 2026. Projects on ARM Cortex M controllers with Zephyr RTOS and MCUboot.",
  openGraph: {
    title: "Dax Rajani | Embedded Firmware Engineer",
    description:
      "Embedded firmware engineer with 1.5+ years shipping production firmware across BLE, NFC, and Sub GHz wireless on ARM Cortex M. MEng ECE Concordia 2026. Projects on ARM Cortex M controllers with Zephyr RTOS and MCUboot.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body>
        {/* Animated ambient background blobs */}
        <div className="bg-blobs" aria-hidden="true">
          <div className="bg-blob bg-blob-blue" />
          <div className="bg-blob bg-blob-violet" />
        </div>

        <div className="bg-[#F8FAFC] text-slate-900 min-h-screen relative">
          <Navbar />
          {children}
          <Footer />
        </div>

        <Toaster />
      </body>
    </html>
  );
}
