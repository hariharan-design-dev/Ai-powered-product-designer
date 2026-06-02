import type { Metadata } from 'next';
import { Bebas_Neue, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-bebas-neue',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: 'AI Product Designer Portfolio',
  description: 'High-energy UI/UX and AI product design portfolio.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
