import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AirPods Pro 3 — Apple",
  description:
    "AirPods Pro 3. The world's best in-ear Active Noise Cancellation. Developed by Abishek Mohan and Sarthak bagal.",
  authors: [{ name: "Abishek Mohan" }, { name: "Sarthak bagal" }],
  creator: "Abishek Mohan & Sarthak bagal",
  keywords: [
    "AirPods Pro 3",
    "Abishek Mohan",
    "Sarthak bagal",
    "Active Noise Cancellation",
    "Spatial Audio",
  ],
  openGraph: {
    title: "AirPods Pro 3 — Showcase",
    description:
      "A high-end product showcase developed by Abishek Mohan and Sarthak bagal.",
    type: "website",
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
      className={`${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-white text-zinc-900">{children}</body>
    </html>
  );
}
