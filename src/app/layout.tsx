import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/styles/globals.css';
import data from '@/data/common.json';
import { Header } from '@/layout/header/Header';
import { Footer } from '@/layout/footer/Footer';

const lato = localFont({
  src: '../../public/fonts/Lato-Regular.woff',
  variable: '--font-lato',
  weight: '400',
});
const emilysCandy = localFont({
  src: '../../public/fonts/EmilysCandy-Regular.woff',
  variable: '--font-emilys-candy',
  weight: '400',
});

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${emilysCandy.variable} `}>
        <Header />
        <main className="flex min-h-[90vh] flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
