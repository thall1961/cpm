import type { Metadata } from "next";
import { Outfit, Fraunces } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Coastal Pain Management | Compassionate Care for Chronic Pain",
  description: "Expert pain management specialists providing personalized, compassionate care. We help you reclaim your life from chronic pain with advanced treatments and holistic approaches.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${fraunces.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
