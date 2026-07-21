'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint
    };
    
    handleResize(); // Check initial size
    setHasMounted(true);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Prevent auto-scroll on mount
  useEffect(() => {
    if (hasMounted) {
      // Remove any hash scroll behavior on initial load
      if (window.location.hash === '#hero') {
        window.history.replaceState(null, '', window.location.pathname);
      }
    }
  }, [hasMounted]);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-[100]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          
          {/* LEFT: LOGO ONLY */}
          <Link href="/" className="flex items-center group" aria-label="Beranda Kira Kira Michi">
            <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
              <Image
                src="/kkmlogo.png"
                alt="Logo Kira Kira Michi custom merchandise"
                fill
                sizes="(max-width: 768px) 64px, 80px"
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
        </Link>
        
        {/* CENTER: NAVIGATION LINKS (Model Biasa) */}
          {hasMounted && isLargeScreen && (
            <div className="flex items-center gap-8">
              {[
                { name: 'Beranda', href: '#hero' },
                { name: 'Tentang', href: '#story' },
                { name: 'Produk', href: '#menu' },
                { name: 'Proses', href: '#process' },
                { name: 'Testimoni', href: '#reviews' },
                { name: 'Bantuan', href: '#faq' }, // FAQ section now renamed to Bantuan and updated ID to #faq
              ].map((item) => (
                item.name === 'Beranda' ? (
                  <button
                    key={item.name}
                    onClick={() => {
                      const targetElement = document.getElementById('hero');
                      if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className="text-[13px] font-extrabold text-text-muted hover:text-kkm-red transition-all duration-300 uppercase tracking-widest"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link 
                    key={item.name}
                    href={item.href} 
                    className="text-[13px] font-extrabold text-text-muted hover:text-kkm-red transition-all duration-300 uppercase tracking-widest"
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          )}

          {/* RIGHT: CONTACT CTA */}
          <div className="flex items-center">
            <a 
              href="#cta" 
              className="bg-kkm-red text-white px-6 md:px-8 py-3 rounded-xl text-[12px] font-black hover:bg-kkm-dark transition-all shadow-lg shadow-kkm-red/20 uppercase tracking-widest"
            >
              Kontak
            </a>
            
            {/* Mobile Menu Icon */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="ml-4 p-2 text-kkm-dark lg:hidden"
              aria-label={isMobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
              aria-expanded={isMobileMenuOpen}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                {isMobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </>
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>
      
      {/* Mobile Menu - Full Screen Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-[90] lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Full Screen Menu - Slide from Right */}
          <div
            className={`fixed top-0 right-0 bottom-0 w-full bg-white z-[95] lg:hidden transform transition-transform duration-300 ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            style={{ overflowY: 'auto' }}
          >
            <div className="flex flex-col h-full items-center justify-between py-8 px-6">

              {/* Logo at Top */}
              <div className="flex flex-col items-center gap-3 mb-8">
                <div className="relative w-20 h-20">
                  <Image
                    src="/kkmlogo.png"
                    alt="Logo Kira Kira Michi"
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-1">
                    <span className="text-xl font-[900] tracking-tight text-kkm-dark leading-tight uppercase">
                      Kira Kira
                    </span>
                    <span className="text-xl font-[900] tracking-tight text-kkm-yellow leading-tight uppercase">
                      Michi
                    </span>
                  </div>
                </div>
              </div>

              {/* Menu Items - Centered */}
              <div className="flex flex-col items-center space-y-6 flex-grow justify-center">
                {[
                  { name: 'Beranda', href: '#hero' },
                  { name: 'Tentang', href: '#story' },
                  { name: 'Produk', href: '#menu' },
                  { name: 'Proses', href: '#process' },
                  { name: 'Testimoni', href: '#reviews' },
                  { name: 'Bantuan', href: '#faq' },
                ].map((item) => (
                  item.name === 'Beranda' ? (
                    <button
                      key={item.name}
                      onClick={() => {
                        const targetElement = document.getElementById('hero');
                        if (targetElement) {
                          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-lg font-extrabold text-text-muted hover:text-kkm-red transition-all duration-300 uppercase tracking-widest text-center"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg font-extrabold text-text-muted hover:text-kkm-red transition-all duration-300 uppercase tracking-widest text-center"
                    >
                      {item.name}
                    </Link>
                  )
                ))}
              </div>

              {/* Footer - Powered by DekatLokal */}
              <div className="text-center mt-8">
                <p className="text-sm text-text-muted">
                  Powered by{' '}
                  <a
                    href="https://www.dekatlokal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-kkm-red hover:text-kkm-dark transition-colors"
                  >
                    DekatLokal
                  </a>
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
