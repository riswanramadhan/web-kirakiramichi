import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Support from './components/Support';
import Features from './components/Features';
import Story from './components/Story';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Process from './components/Process';
import CTA from './components/CTA';
import Footer from './components/Footer';
<meta name="google-site-verification" content="xMYzBHOvyktvEQhprsMYHl38Ea3GPcIkShFYaXj3RKo" />
export default function Home() {
  // JSON-LD Structured Data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Kira Kira Michi',
    image: 'https://kirakiramichi.com/og-image.jpg',
    '@id': 'https://kirakiramichi.com',
    url: 'https://kirakiramichi.com',
    telephone: '',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '',
      addressLocality: 'Jakarta',
      addressRegion: 'DKI Jakarta',
      postalCode: '',
      addressCountry: 'ID'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -6.2088,
      longitude: 106.8456
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      opens: '09:00',
      closes: '21:00'
    },
    sameAs: [
      'https://instagram.com/kirakiramichi',
      'https://facebook.com/kirakiramichi',
      'https://twitter.com/kirakiramichi'
    ],
    description: 'Tempat terbaik untuk custom merchandise favoritmu, dengan kualitas premium dan desain eksklusif. Didukung oleh DekatLokal.'
  };

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Kira Kira Michi',
    alternateName: 'KKM',
    url: 'https://kirakiramichi.com',
    logo: 'https://kirakiramichi.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['Indonesian', 'English']
    },
    sameAs: [
      'https://instagram.com/kirakiramichi',
      'https://facebook.com/kirakiramichi',
      'https://twitter.com/kirakiramichi'
    ]
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Kira Kira Michi',
    url: 'https://kirakiramichi.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://kirakiramichi.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      
      <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden">
        <Navbar />
        <Hero />
        <Support />
        <Features />
        <Story />
        <Menu />
        <Reviews />
        <FAQ />
        <Process />
        <CTA />
        <Footer />
      </div>
    </>
  );
}