'use client';

import { Inter } from 'next/font/google';
import '../styles/globals.css';
import CustomCursor from '../components/CustomCursor';
import Navbar from '../components/Navbar';
import LoadingScreen from '../components/LoadingScreen';
import ScrollToTopButton from '../components/ScrollToTopButton';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <LoadingScreen />
        <CustomCursor />
        <Navbar />
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  );
}
