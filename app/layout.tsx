import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Nexus Tech - AI-First IT Consultancy',
  description: 'Leading IT consultancy specializing in AI-first solutions, integrations, and custom development. Transform your business with cutting-edge technology solutions.',
  keywords: 'AI consultancy, IT solutions, custom development, technology integration, AI-first',
  authors: [{ name: 'The Nexus Tech' }],
  openGraph: {
    title: 'The Nexus Tech - AI-First IT Consultancy',
    description: 'Transform your business with cutting-edge AI and technology solutions',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}