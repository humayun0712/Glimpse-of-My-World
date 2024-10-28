import type { Metadata, Viewport } from 'next';
import { twMerge } from 'tailwind-merge';

import { Calistoga, Inter } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: "Lohit's Portfolio",
  description:
    'Created with the help of Frontend Tribe, King Grey"s personal portfolio.Android, Web and Blockchain Developer',
};

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const calistoga = Calistoga({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          'bg-gray-900 text-white antialiased font-sans no-scrollbar overflow-y-auto'
        )}
      >
        {children}
      </body>
    </html>
  );
}
