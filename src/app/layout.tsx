import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rahul R | Software Engineer & DevOps Enthusiast",
  description:
    "Portfolio of Rahul R — Software Engineer specializing in Automation, Full-Stack Development, DevOps Architecture, and Cloud Engineering.",
  keywords: [
    "Rahul R",
    "Software Engineer",
    "DevOps",
    "Full Stack Developer",
    "Cloud Engineering",
    "Automation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased overflow-x-hidden`}
      >
        <div className="grain" />
        {children}
      </body>
    </html>
  );
}
