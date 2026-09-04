// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Proenergy - Soluciones integrales',
  description: 'Soluciones de Ingeniería, Mantenimiento y Montaje Industrial',
  // Metadatos Open Graph (para redes sociales)
  openGraph: {
    title: 'Proenergy - Soluciones integrales',
    description: 'Soluciones de Ingeniería, Mantenimiento y Montaje Industrial',
    url: 'https://proenergy-web.vercel.app',
    siteName: 'Proenergy',
    images: [
      {
        url: 'https://proenergy-web.vercel.app/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Proenergy - Soluciones Industriales',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  // Metadatos para Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Proenergy - Soluciones integrales',
    description: 'Soluciones de Ingeniería, Mantenimiento y Montaje Industrial',
    images: ['https://proenergy-web.vercel.app/images/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}