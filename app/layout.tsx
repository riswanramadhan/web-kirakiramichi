import './globals.css';
import type { Metadata } from 'next';
import { Epilogue } from 'next/font/google';
import AOSInit from './components/AOSInit';
import ScrollToTop from './components/ScrollToTop';
import 'aos/dist/aos.css';

const epilogue = Epilogue({ 
  subsets: ['latin'],
  variable: '--font-epilogue',
  display: 'swap',
});

// Load Material Symbols font
export const metadata: Metadata = {
  metadataBase: new URL('https://kirakiramichi.com'),
  title: {
    default: 'Kira Kira Michi - Custom Merchandise Premium Indonesia | DekatLokal',
    template: '%s | Kira Kira Michi'
  },
  description: 'Tempat terbaik untuk custom merchandise favoritmu, dengan kualitas premium dan desain eksklusif. Didukung oleh DekatLokal. Custom totebag, t-shirt, hoodie, dan merchandise lainnya dengan kualitas terpercaya.',
  keywords: ['custom merchandise', 'custom merchandise indonesia', 'kira kira michi', 'kkm', 'dekatlokal', 'produk kreatif', 'desain eksklusif', 'custom totebag', 'custom t-shirt', 'custom hoodie', 'merchandise premium', 'produk lokal indonesia', 'produk custom jakarta', 'sablon kaos', 'printing custom'],
  authors: [{ name: 'Kira Kira Michi', url: 'https://kirakiramichi.com' }],
  creator: 'Kira Kira Michi',
  publisher: 'Kira Kira Michi',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://kirakiramichi.com',
    siteName: 'Kira Kira Michi',
    title: 'Kira Kira Michi - Custom Merchandise Premium Indonesia',
    description: 'Tempat terbaik untuk custom merchandise favoritmu, dengan kualitas premium dan desain eksklusif. Didukung oleh DekatLokal.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kira Kira Michi - Custom Merchandise Premium',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kira Kira Michi - Custom Merchandise Premium Indonesia',
    description: 'Tempat terbaik untuk custom merchandise favoritmu, dengan kualitas premium dan desain eksklusif.',
    images: ['/og-image.jpg'],
    creator: '@kirakiramichi',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  verification: {
    google: 'xMYzBHOvyktvEQhprsMYHl38Ea3GPcIkShFYaXj3RKo',
  },
  alternates: {
    canonical: 'https://kirakiramichi.com',
  },
  category: 'business',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${epilogue.variable} light scroll-smooth`}>
      <head>
        <link rel="canonical" href="https://kirakiramichi.com" />
      </head>
      <body className="bg-background-light dark:bg-background-dark text-text-main font-display antialiased selection:bg-primary/30 selection:text-text-main">
        <ScrollToTop />
        <AOSInit />
        {children}
      </body>
    </html>
  );
}