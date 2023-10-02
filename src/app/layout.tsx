'use client';

import './globals.scss'
import localFont from 'next/font/local';

const tktMedium = localFont({src: '../lib/assets/fonts/TKT-Medium.ttf', variable: '--font-TKT-medium'});
const tktRegular = localFont({src: '../lib/assets/fonts/TKT-Regular.ttf', variable: '--font-TKT-regular'});

import { ReduxProvider } from './providers';
import Header from '@/lib/components/Header';
import Navigation from '@/lib/components/Navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${tktMedium.variable} ${tktRegular.variable}`}>
        <ReduxProvider>
          <Header />
          <Navigation />
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
