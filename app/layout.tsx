import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spacegrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spacegrotesk",
});

export const metadata: Metadata = {
  title: "DevFlow",
  description: "A place for developers to ask question and find answer",
  icons: {
    icon: "/assets/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.variable} ${spacegrotesk.variable}`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
