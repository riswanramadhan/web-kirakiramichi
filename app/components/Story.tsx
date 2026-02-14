import Image from 'next/image';

const Story = () => {
  return (
    <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="story">
      <div className="bg-white rounded-[2rem] p-6 md:p-12 shadow-card border border-[#f4f3f1]">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Kolom Teks */}
          <div className="flex-1 flex flex-col gap-6" data-aos="slide-right" data-aos-duration="1000">
            <span className="text-kkm-yellow font-bold tracking-widest uppercase text-xs" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">Cerita Kami</span>
            <h2 className="text-3xl md:text-4xl font-black text-text-main leading-tight" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
              Lebih dari sekadar produk, ini adalah hasil dari proses kreatif dan cerita di baliknya.
            </h2>
            <p className="text-text-muted text-base leading-relaxed" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
              "Kira Kira Michi" dibentuk pada tahun 2023. Bermula dari keinginan sepasang suami istri tanpa pekerjaan tetap yang baru saja memulai kehidupan berumah tangga, bersama bayi mereka yang baru lahir. Berangkat dari hobi desain, menggambar, serta keinginan untuk memberikan pengalaman agar setiap orang dapat memiliki merchandise impian yang selama ini mereka idamkan.
            </p>
            <p className="text-text-muted text-base leading-relaxed" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
              Produksi produk kami bermula dari ide desain yang kemudian diolah secara digital melalui proses desain grafis hingga menjadi file yang dapat diproses oleh mesin-mesin produksi kami. Setelah produk dasar selesai, produk tersebut diberikan aksesoris sesuai dengan tema, lalu dikemas menjadi produk yang siap untuk dijual.
            </p>
          </div>

          {/* Kolom Gambar - Fixed Layout */}
          <div className="flex-1 w-full" data-aos="slide-left" data-aos-duration="1000">
            <div className="grid grid-cols-2 gap-4 items-start">
              
              {/* Gambar Kiri - Dengan Offset Atas */}
              <div className="mt-8 relative" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
                <div className="absolute inset-0 bg-kkm-yellow/20 blur-xl rounded-full -z-10"></div>
                <div className="relative w-full rounded-2xl shadow-lg overflow-hidden aspect-[4/5]">
                  <Image 
                    src="/kirastory1.PNG"
                    alt="Kira Kira Michi Story 1"
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw"
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Gambar Kanan */}
              <div className="relative" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">
                <div className="absolute inset-0 bg-kkm-yellow/20 blur-xl rounded-full -z-10"></div>
                <div className="relative w-full rounded-2xl shadow-lg overflow-hidden aspect-[4/5]">
                  <Image 
                    src="/kirastory2.PNG"
                    alt="Kira Kira Michi Story 2"
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw"
                    className="object-cover"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Story;
