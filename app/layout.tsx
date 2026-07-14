import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Rubik } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/lenis";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rubik = Rubik({
  weight: "300",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Headphones page",
  description: "Practice page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SmoothScroll>
      <html lang="en" className={`${rubik.className} h-full antialiased`}>
        <body className="min-h-full flex flex-col">
          <div className="fixed mix-blend-difference inset-0 z-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:60px_60px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
          <div className="z-10">{children}</div>
        </body>
      </html>
    </SmoothScroll>
  );
}
