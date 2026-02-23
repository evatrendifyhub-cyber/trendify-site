import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eva's Trendifying Hub | Discover the Latest Trends",
  description: "Discover trending products across Fashion, Fitness, Digital Products, and more. Your go-to destination for the latest multi-platform trends with 134+ products across 20 categories.",
  keywords: ["trending products", "fashion", "fitness", "digital products", "online shopping", "gifts", "eva's trendifying hub"],
  authors: [{ name: "Eva's Trendifying Hub" }],
  openGraph: {
    title: "Eva's Trendifying Hub | Discover the Latest Trends",
    description: "Discover trending products across Fashion, Fitness, Digital Products, and more. Your go-to destination for the latest multi-platform trends.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eva's Trendifying Hub | Discover the Latest Trends",
    description: "Discover trending products across Fashion, Fitness, Digital Products, and more.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        {/* This speeds up the redirect to your affiliate shop */}
        <link rel="preconnect" href="https://www.digistore24.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background font-sans`}
      >
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
} // Removed the extra ")" that was here
