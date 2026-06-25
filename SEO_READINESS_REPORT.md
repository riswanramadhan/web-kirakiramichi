# SEO Readiness Report - Kira Kira Michi

Tanggal audit: 2026-06-25
Production URL: https://kirakiramichi.dekatlokal.com/

## Audit Awal Singkat

- Website memakai Next.js App Router dan homepage sudah tersedia di root.
- Metadata awal sudah ada, tetapi title, description, keywords, OG, Twitter, dan schema masih memuat klaim generik serta beberapa data yang tidak tampil di halaman.
- JSON-LD lama berisi alamat, geo coordinate, opening hours, Facebook/Twitter, dan SearchAction yang tidak tervalidasi dari UI.
- Gambar hero sudah memakai Next/Image, tetapi belum diprioritaskan sebagai image SEO utama dan belum punya social preview ringan 1200x630.
- Favicon hanya tersedia sebagai `app/favicon.ico`; manifest sebelumnya menunjuk logo lebar, bukan ikon square.
- Robots dan sitemap sudah ada, tetapi masih bisa diperkuat untuk asset penting, favicon, gambar, dan `_next`.
- Alt text beberapa gambar masih generik.
- CTA WhatsApp produk belum memakai pesan yang konsisten dengan sumber DekatLokal Kira Kira Michi.

## File Yang Diubah

- `app/layout.tsx`
- `app/page.tsx`
- `app/seo-data.ts`
- `app/sitemap.ts`
- `app/components/Hero.tsx`
- `app/components/Navbar.tsx`
- `app/components/Support.tsx`
- `app/components/Features.tsx`
- `app/components/Story.tsx`
- `app/components/Menu.tsx`
- `app/components/Process.tsx`
- `app/components/CTA.tsx`
- `app/components/Footer.tsx`
- `app/components/Reviews.tsx`
- `public/robots.txt`
- `public/manifest.json`
- `public/site.webmanifest`
- `.gitignore`
- `public/og-image.jpg`
- `public/favicon.png`
- `public/favicon-48x48.png`
- `public/apple-touch-icon.png`
- `public/icon-192.png`
- `public/icon-512.png`

## Perbaikan Yang Dilakukan

- Title production diperbarui menjadi: `Kira Kira Michi | Custom Merchandise & Pre-Order Premium Indonesia - DekatLokal`.
- Meta description dibuat unik, natural, dan sesuai produk yang tampil.
- Canonical diarahkan ke domain production Kira Kira Michi.
- Open Graph dan Twitter Card diarahkan ke production URL dan image preview baru.
- Hero image tetap memakai `/kkmhero.jpg` di UI, ditambah alt deskriptif, `priority`, dan quality setting.
- Social preview dibuat sebagai `public/og-image.jpg` ukuran 1200x630, sekitar 185 KB.
- Favicon/manifest diperkuat dengan ikon square 48, 180, 192, dan 512 px dari identitas visual Kira Kira Michi.
- Robots.txt mengizinkan homepage, favicon, manifest, OG image, hero image, `_next/image`, dan `_next/static`, serta tetap memblokir `/api/`.
- Sitemap App Router diperbarui untuk single-page production URL dengan lastmod 2026-06-25.
- JSON-LD diganti menjadi satu graph valid: Organization, Store, WebSite, WebPage, BreadcrumbList, OfferCatalog, 10 Product, dan FAQPage.
- Schema lama yang berisi data tidak tervalidasi dihapus: PostalAddress kosong, GeoCoordinates Jakarta, opening hours, Facebook/Twitter generik, dan SearchAction.
- Product schema dibuat hanya untuk 10 produk yang tampil di halaman, memakai harga IDR dari UI.
- FAQ schema dibuat hanya dari FAQ yang tampil di halaman.
- Heading section mitra dan nilai unggulan diperbaiki secara semantik tanpa mengubah tampilan.
- Alt text logo, partner, story image, product image, process icon, dan hero image diperjelas.
- CTA WhatsApp umum dan produk memakai format `wa.me` dengan pesan yang menyebut website DekatLokal Kira Kira Michi.
- Link footer `Beranda` tidak lagi memakai `#` generik.
- External link penting memakai `rel="noopener noreferrer"`.
- Import komponen yang tidak dipakai dibersihkan.

## Product Snippets dan Merchant Readiness

- Product snippets siap secara teknis karena setiap produk memiliki nama, deskripsi, gambar, brand, URL, priceCurrency IDR, dan offer price.
- Produk dengan label `Mulai dari` diberi deskripsi offer sebagai harga awal, bukan harga final semua variasi.
- Availability, aggregateRating, dan review schema tidak ditambahkan karena tidak ada data valid yang cukup.
- Merchant listings dipersiapkan sebatas data yang tersedia. Transaksi utama masih diarahkan ke WhatsApp, sehingga optimasi prioritas adalah Product snippets dan crawlability produk.

## Risiko Klaim Produk

- Tidak ada klaim `official merchandise`, `licensed product`, `nomor satu`, atau `paling murah` yang ditambahkan.
- Nama anime/pop culture tetap diperlakukan sebagai tema produk yang memang tampil di UI, bukan klaim resmi/lisensi.
- Klaim yang belum bisa divalidasi melalui data eksternal tidak dimasukkan ke schema.

## Verifikasi Lokal

- `npm run build`: berhasil.
- Homepage lokal `http://127.0.0.1:3001/`: 200.
- Static asset `_next/static`: 200.
- Local `/robots.txt`: 200.
- Local `/sitemap.xml`: 200.
- Local `/site.webmanifest`: 200.
- Local `/favicon.ico`: 200.
- Local `/favicon-48x48.png`: 200.
- Local `/apple-touch-icon.png`: 200.
- Local `/icon-192.png`: 200.
- Local `/icon-512.png`: 200.
- Local `/og-image.jpg`: 200.
- HTML awal memuat 1 H1.
- Robots meta: `index, follow`.
- JSON-LD ter-render 1 script dengan 10 Product, FAQPage, BreadcrumbList, OfferCatalog, Store, WebPage, WebSite, dan Organization.
- JSON-LD tidak lagi memuat PostalAddress, GeoCoordinates, atau SearchAction palsu.

## Verifikasi Production Saat Audit

- `https://kirakiramichi.dekatlokal.com/`: 200.
- `https://kirakiramichi.dekatlokal.com/robots.txt`: 200.
- `https://kirakiramichi.dekatlokal.com/sitemap.xml`: 200.
- `https://kirakiramichi.dekatlokal.com/favicon.ico`: 200.
- Catatan: perubahan pada repo ini perlu deploy ulang ke Vercel agar metadata, schema, favicon baru, dan asset OG baru aktif di production.

## Warning Non-Blocking

- Next.js 16 menampilkan warning bahwa `middleware.ts` convention deprecated dan disarankan migrasi ke `proxy`.
- Browserslist/caniuse-lite menampilkan warning data 6 bulan; dapat diperbarui dengan `npx update-browserslist-db@latest`.
- Next menormalisasi root canonical dan og:url tanpa trailing slash di HTML head. URL tetap HTTPS production yang sama, sedangkan sitemap dan JSON-LD memakai trailing slash.

## SOP Google Search Console Pasca-Deploy

1. Deploy perubahan ke Vercel production.
2. Buka `https://kirakiramichi.dekatlokal.com/` dan pastikan 200.
3. Buka `/robots.txt`, `/sitemap.xml`, `/favicon.ico`, `/favicon-48x48.png`, `/apple-touch-icon.png`, `/icon-192.png`, `/icon-512.png`, dan `/site.webmanifest`.
4. View source homepage dan pastikan title, meta description, canonical, robots meta, OG, Twitter Card, favicon tags, dan JSON-LD sudah muncul.
5. Uji JSON-LD dengan Rich Results Test atau Schema Markup Validator.
6. Di Google Search Console, gunakan Domain Property `dekatlokal.com` dan opsional URL-prefix `https://kirakiramichi.dekatlokal.com/`.
7. Submit `https://kirakiramichi.dekatlokal.com/sitemap.xml`.
8. Jalankan URL Inspection untuk homepage.
9. Jalankan Live Test.
10. Request Indexing jika live test valid.
11. Pantau Page Indexing, Performance, Enhancements, Experience, Product snippets, Merchant listings jika muncul, image indexing, links, dan favicon recrawl.
12. Jika UMKM punya Google Business Profile, tambahkan URL subdomain ini dan pastikan NAP konsisten.
13. Tambahkan backlink internal dari direktori Teman Lokal DekatLokal dengan anchor `Kira Kira Michi - Custom Merchandise & Pre-Order Premium`.

## Data Yang Masih Membutuhkan Akses Manual

- Akses Google Search Console untuk submit sitemap, URL Inspection, Live Test, dan Request Indexing.
- Akses Vercel untuk deploy production.
- Akses Google Business Profile bila UMKM memiliki profil Maps.
- Link marketplace Shopee/Tokopedia valid bila ingin dimasukkan sebagai `sameAs` atau CTA langsung.
- Data alamat, jam operasional, koordinat, dan availability produk jika ingin menambah LocalBusiness atau Merchant Listing yang lebih lengkap.
