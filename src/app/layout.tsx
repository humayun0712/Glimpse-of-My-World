import type { Metadata, Viewport } from "next";
import { twMerge } from "tailwind-merge";

import { Calistoga, Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "A Glimpse Into Vijay's World",
  description:
    "Data Science enthusiast and Python developer. B.Tech Data Science student at NRI Institute of Technology, exploring AI, ML, and data analytics.",
  keywords: ["Data Science", "Python", "Machine Learning", "Data Analysis", "Portfolio", "Vijay Rama Raju"],
  authors: [{ name: "Vijay Rama Raju" }],
  icons: {
    icon: '/favicon.ico'
  },
  openGraph: {
    title: "A Glimpse Into Vijay's World",
    description: "Data Science enthusiast and Python developer, exploring AI, ML, and data analytics.",
    url: "https://vijay-portfolio.vercel.app",
    siteName: "Vijay's Portfolio",
    locale: "en_US",
    type: "website",
  },
};

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "contain",
  userScalable: false,
  height: "device-height",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#059669" />
      </head>
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "no-scrollbar overflow-y-auto overflow-x-hidden bg-gray-900 font-sans text-white antialiased selection:bg-emerald-500/30",
        )}
      >
        {children}
      </body>
    </html>
  );
}
