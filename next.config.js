/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Semua gambar di /public sudah dikompres ke WebP dengan ukuran yang pas,
    // jadi disajikan langsung dari CDN tanpa Vercel Image Optimization.
    // Ini membuat pemakaian kuota Image Optimization (Transformations,
    // Cache Reads, Cache Writes) dari project ini menjadi nol.
    unoptimized: true,
  },
};

module.exports = nextConfig;
