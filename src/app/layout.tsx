import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const lato = localFont({
  src: './fonts/Lato-Regular.woff',
  variable: '--font-lato',
  weight: '400',
});
const emilysCandy = localFont({
  src: './fonts/EmilysCandy-Regular.woff',
  variable: '--font-emilys-candy',
  weight: '400',
});

export const metadata: Metadata = {
  title: "Cat's news App",
  description: 'This is test app for cats news',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${emilysCandy.variable} `}>
        <main className="flex min-h-screen flex-col">{children}</main>
      </body>
    </html>
  );
}
