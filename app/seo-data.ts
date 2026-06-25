const siteUrl = 'https://kirakiramichi.dekatlokal.com';
const homeUrl = `${siteUrl}/`;

export const siteConfig = {
  name: 'Kira Kira Michi',
  alternateName: 'KiraKiraMichi',
  url: siteUrl,
  homeUrl,
  title:
    'Kira Kira Michi | Custom Merchandise & Pre-Order Premium Indonesia - DekatLokal',
  shortTitle: 'Kira Kira Michi | Custom Merchandise & Pre-Order Premium',
  description:
    'Kira Kira Michi menghadirkan custom merchandise dan pre-order produk kreatif, mulai dari gantungan kunci, pouch, akrilik, kayu, hingga aksesori unik.',
  ogDescription:
    'Custom merchandise dan pre-order produk kreatif dari Kira Kira Michi, mulai dari ganci, pouch, akrilik, kayu, kain, hingga aksesori unik.',
  twitterDescription:
    'Wujudkan ide kreatif menjadi merchandise custom berkualitas bersama Kira Kira Michi.',
  heroImage: '/kkmhero.jpg',
  ogImage: '/og-image.jpg',
  logo: '/kkmlogo.png',
  icon: '/icon-512.png',
  whatsappNumber: '6289529974959',
  phoneNumber: '+6289529974959',
  instagram: 'https://instagram.com/kirakiramichi.merchandise',
  tiktok: 'https://tiktok.com/@kirakiramichi.merch',
  dekatLokal: 'https://dekatlokal.com',
};

export const absoluteUrl = (path: string) => {
  if (path.startsWith('http')) {
    return path;
  }

  return `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`;
};

export const socialLinks = [siteConfig.instagram, siteConfig.tiktok];

export const products = [
  {
    slug: 'custom-produk-kayu',
    name: 'Custom Produk Kayu',
    description:
      'Desain custom untuk produk kayu seperti gantungan kunci, pajangan, dan aksesori lainnya.',
    image: '/preorder/kayu.png',
    price: 15000,
    priceLabel: 'Mulai dari Rp 15k',
    isStartingPrice: true,
  },
  {
    slug: 'custom-produk-kain-kulit-sintetis-eva-sponge',
    name: 'Custom Produk Kain, Kulit Sintetis & Eva Sponge',
    description:
      'Produk custom dari bahan kain, kulit sintetis, dan eva sponge seperti pouch, ID card, dan lainnya.',
    image: '/preorder/kain.png',
    price: 15000,
    priceLabel: 'Mulai dari Rp 15k',
    isStartingPrice: true,
  },
  {
    slug: 'custom-produk-akrilik',
    name: 'Custom Produk Akrilik',
    description:
      'Aneka produk custom dari akrilik seperti pin, gantungan kunci, dan lainnya.',
    image: '/preorder/akrilik.png',
    price: 15000,
    priceLabel: 'Mulai dari Rp 15k',
    isStartingPrice: true,
  },
  {
    slug: 'ganci-shaker',
    name: 'Ganci Shaker',
    description:
      'Ganci shaker Kira Kira Michi untuk merchandise custom dan pre-order.',
    image: '/toppick/ganci_shaker.png',
    price: 55000,
    priceLabel: 'Mulai dari Rp 55k',
    isStartingPrice: true,
  },
  {
    slug: 'ganci-hanging-charm',
    name: 'Ganci Hanging Charm',
    description:
      'Ganci hanging charm Kira Kira Michi untuk merchandise custom dan pre-order.',
    image: '/toppick/ganci_hanging_charm.png',
    price: 45000,
    priceLabel: 'Mulai dari Rp 45k',
    isStartingPrice: true,
  },
  {
    slug: 'ganci-bantal',
    name: 'Ganci Bantal',
    description:
      'Ganci bantal Kira Kira Michi untuk merchandise custom dan pre-order.',
    image: '/toppick/ganci_bantal.png',
    price: 35000,
    priceLabel: 'Mulai dari Rp 35k',
    isStartingPrice: true,
  },
  {
    slug: 'ganci-rotary',
    name: 'Ganci Rotary',
    description:
      'Ganci rotary Kira Kira Michi untuk merchandise custom dan pre-order.',
    image: '/toppick/ganci_rotary.png',
    price: 40000,
    priceLabel: 'Mulai dari Rp 40k',
    isStartingPrice: true,
  },
  {
    slug: 'ganci-one-piece-logo',
    name: 'Ganci One Piece Logo',
    description:
      'Ganci bertema One Piece dengan logo karakter favorit.',
    image: '/populardemand/one_piece.png',
    price: 35000,
    priceLabel: 'Rp 35k',
    isStartingPrice: false,
  },
  {
    slug: 'pouch-dragon-ball-radar-leather-version',
    name: 'Pouch Dragon Ball Radar (Leather Version)',
    description:
      'Pouch leather version bertema Dragon Ball Radar dengan desain ikonik.',
    image: '/populardemand/dragon_ball.png',
    price: 250000,
    priceLabel: 'Rp 250k',
    isStartingPrice: false,
  },
  {
    slug: 'ganci-kawaii-anya',
    name: 'Ganci Kawaii Anya',
    description:
      'Ganci bertema karakter Anya dengan desain kawaii.',
    image: '/populardemand/kawaii_anya.png',
    price: 35000,
    priceLabel: 'Rp 35k',
    isStartingPrice: false,
  },
];

export const faqItems = [
  {
    question: 'Produk apa saja yang bisa di-custom di Kira Kira Michi?',
    answer:
      'Produk yang bisa di-custom di Kira Kira Michi meliputi gantungan kunci akrilik, kayu, kulit sintetis, bantal, cermin, magnet, pembuka botol, charm, bell, shaker, coaster, stirrer, pop socket, phonestrap, pin, standee, ID card, bento stick, magnet kulkas, pembatas buku, sticker, poster, pouch, hiasan dinding, Furin, gelang, kalung, cetakan pada alat makan, kotak bento, cetakan pada gelas, tumbler dan toples, file folder, plakat, nomor rumah, diorama, asbak rokok, tempat tissue, tempat pensil, produk rajutan melalui mitra UMKM, serta produk custom lainnya sesuai diskusi.',
  },
  {
    question: 'Bahan-bahan apa saja yang bisa di-custom oleh Kira Kira Michi?',
    answer:
      'Bahan yang bisa di-custom oleh Kira Kira Michi antara lain akrilik, kayu, kulit sintetis, eva sponge, kain, sticker, dan rajutan melalui mitra UMKM.',
  },
  {
    question: 'Berapa jumlah minimum atau MOQ untuk memesan produk custom?',
    answer:
      'Untuk memesan produk custom, pelanggan bisa order mulai dari 1 pcs saja.',
  },
  {
    question:
      'Apakah ada harga khusus untuk pengambilan produk custom dalam jumlah besar?',
    answer:
      'Pengambilan produk custom dalam jumlah besar mendapatkan harga khusus sesuai dengan jumlah pengambilannya.',
  },
  {
    question:
      'Metode pembayaran apa saja yang bisa digunakan untuk bertransaksi dengan Kira Kira Michi?',
    answer:
      'Metode pembayaran yang tersedia meliputi cash, QRIS, transfer Bank Mandiri, BNI, BRI, PayPal, ShopeePay, serta e-commerce Shopee dan Tokopedia.',
  },
];

const schemaId = (name: string) => `${siteConfig.homeUrl}#${name}`;

const productSchema = products.map((product) => ({
  '@type': 'Product',
  '@id': schemaId(`product-${product.slug}`),
  name: product.name,
  description: product.description,
  image: absoluteUrl(product.image),
  brand: {
    '@id': schemaId('organization'),
  },
  url: `${siteConfig.homeUrl}#menu`,
  offers: {
    '@type': 'Offer',
    url: `${siteConfig.homeUrl}#menu`,
    priceCurrency: 'IDR',
    price: product.price,
    description: product.isStartingPrice
      ? `${product.priceLabel} sebagai harga awal, tergantung detail custom dan diskusi pesanan.`
      : product.priceLabel,
  },
}));

const offerCatalogSchema = {
  '@type': 'OfferCatalog',
  '@id': schemaId('offer-catalog'),
  name: 'Katalog custom merchandise dan pre-order Kira Kira Michi',
  itemListElement: products.map((product, index) => ({
    '@type': 'Offer',
    position: index + 1,
    url: `${siteConfig.homeUrl}#menu`,
    priceCurrency: 'IDR',
    price: product.price,
    description: product.isStartingPrice
      ? `${product.priceLabel} sebagai harga awal.`
      : product.priceLabel,
    itemOffered: {
      '@id': schemaId(`product-${product.slug}`),
    },
  })),
};

export const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': schemaId('organization'),
      name: siteConfig.name,
      alternateName: siteConfig.alternateName,
      url: siteConfig.homeUrl,
      logo: absoluteUrl(siteConfig.icon),
      image: absoluteUrl(siteConfig.ogImage),
      sameAs: socialLinks,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: siteConfig.phoneNumber,
        contactType: 'customer service',
        availableLanguage: ['id', 'en'],
      },
    },
    {
      '@type': 'Store',
      '@id': schemaId('localbusiness'),
      name: siteConfig.name,
      url: siteConfig.homeUrl,
      description:
        'Kira Kira Michi adalah brand custom merchandise dan pre-order produk kreatif yang membantu pelanggan mewujudkan ide menjadi merchandise berkualitas.',
      image: absoluteUrl(siteConfig.ogImage),
      logo: absoluteUrl(siteConfig.icon),
      telephone: siteConfig.phoneNumber,
      priceRange: 'IDR 15.000 - IDR 250.000',
      areaServed: {
        '@type': 'Country',
        name: 'Indonesia',
      },
      sameAs: socialLinks,
      hasOfferCatalog: {
        '@id': schemaId('offer-catalog'),
      },
      parentOrganization: {
        '@id': schemaId('organization'),
      },
    },
    {
      '@type': 'WebSite',
      '@id': schemaId('website'),
      name: siteConfig.name,
      url: siteConfig.homeUrl,
      inLanguage: 'id-ID',
      publisher: {
        '@id': schemaId('organization'),
      },
    },
    {
      '@type': 'WebPage',
      '@id': schemaId('webpage'),
      name: siteConfig.shortTitle,
      url: siteConfig.homeUrl,
      description: siteConfig.description,
      inLanguage: 'id-ID',
      isPartOf: {
        '@id': schemaId('website'),
      },
      about: {
        '@id': schemaId('localbusiness'),
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: absoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        caption:
          'Kira Kira Michi custom merchandise dan pre-order produk kreatif premium',
      },
      breadcrumb: {
        '@id': schemaId('breadcrumb'),
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': schemaId('breadcrumb'),
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Beranda',
          item: siteConfig.homeUrl,
        },
      ],
    },
    offerCatalogSchema,
    ...productSchema,
    {
      '@type': 'FAQPage',
      '@id': schemaId('faq'),
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
  ],
};
