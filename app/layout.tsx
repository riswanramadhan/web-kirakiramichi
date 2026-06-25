import './globals.css';
import type { Metadata } from 'next';
import { Epilogue } from 'next/font/google';
import AOSInit from './components/AOSInit';
import ScrollToTop from './components/ScrollToTop';
import 'aos/dist/aos.css';
import { siteConfig } from './seo-data';

const epilogue = Epilogue({ 
  subsets: ['latin'],
  variable: '--font-epilogue',
  display: 'swap',
});

const heroImageAlt =
  'Kira Kira Michi custom merchandise dan pre-order produk kreatif premium';

// Load Material Symbols font
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Kira Kira Michi',
    'KiraKiraMichi',
    'custom merchandise Indonesia',
    'custom merchandise Makassar',
    'merchandise custom',
    'pre-order merchandise',
    'gantungan kunci custom',
    'ganci custom',
    'akrilik custom',
    'pouch custom',
    'produk kayu custom',
    'produk kain custom',
    'kulit sintetis custom',
    'eva sponge custom',
    'merchandise anime',
    'produk kreatif custom',
    'souvenir custom',
    'produk handmade',
    'custom request merchandise',
    'UMKM merchandise kreatif',
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.homeUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: siteConfig.homeUrl,
    siteName: `${siteConfig.name} - DekatLokal`,
    title: siteConfig.shortTitle,
    description: siteConfig.ogDescription,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: heroImageAlt,
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.shortTitle,
    description: siteConfig.twitterDescription,
    images: [
      {
        url: siteConfig.ogImage,
        alt: heroImageAlt,
      },
    ],
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
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'xMYzBHOvyktvEQhprsMYHl38Ea3GPcIkShFYaXj3RKo',
  },

  
  alternates: {
    canonical: siteConfig.homeUrl,
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
      <body className="bg-background-light dark:bg-background-dark text-text-main font-display antialiased selection:bg-primary/30 selection:text-text-main">
        <ScrollToTop />
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
