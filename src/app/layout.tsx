import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { GiWaterDrop } from "react-icons/gi";
import { IoFastFood } from "react-icons/io5";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jackson Kujur | Developer and Fitness Enthusiast",
  description: "Software engineering meets peak physical performance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistMono.variable}`}>
      <body className={`${geistSans.variable} antialiased bg-[#2c3e50] text-white`}>
        {/* Main content container with padding to avoid navbar overlap */}
        {/* Terminal-style navbar (fixed at bottom) */}
        <Navbar />
        <main className="pb-24 min-h-screen"> {/* 24 = 6rem (navbar height + margin) */}
          {children}
        </main>
        
        {/* Fitness visualization background elements */}
        <div className="fixed inset-0 -z-50 overflow-hidden">
          <div className="absolute top-1/4 left-10 opacity-5">
            <GiWaterDrop className="text-[300px] text-blue-400 animate-float" />
          </div>
          <div className="absolute bottom-1/3 right-20 opacity-5">
            <IoFastFood className="text-[250px] text-orange-500 animate-float" style={{ animationDelay: '2s' }} />
          </div>
        </div>
      </body>
    </html>
  );
}