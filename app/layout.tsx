import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  preload: true,
  display: "swap", // ✅ good for performance
});

export const metadata: Metadata = {
  title: "My App",
  description: "Using Sora with Next.js + Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}