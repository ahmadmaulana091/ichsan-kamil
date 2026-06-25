import React from 'react';
import { Compass, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navbarHeight = 80;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-maroon text-white pt-20 pb-10 relative overflow-hidden">
      {/* Background Decorative Graphic */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-gold/5 rounded-full transform translate-x-32 -translate-y-32 pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-black/10 rounded-full transform -translate-x-32 translate-y-32 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">

          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="Logo" className="w-12 h-12 object-contain rounded-md flex items-center justify-center shadow-md" />
              <div>
                <span className="font-serif font-bold text-xl text-white tracking-wide block leading-none">
                  ICHSAN KAMIL
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-gold block leading-none mt-1">
                  Tour & Travel
                </span>
              </div>
            </div>

            <p className="text-sm text-white/80 leading-relaxed font-light">
              Penyelenggara Resmi Perjalanan Ibadah Umrah (PPIU) dengan bimbingan ibadah yang matang, akomodasi premium bintang lima, dan pelayanan penuh ketulusan hati.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-gold hover:text-maroon border border-white/10 flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-gold hover:text-maroon border border-white/10 flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-gold hover:text-maroon border border-white/10 flex items-center justify-center transition-all duration-300"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-6 text-left">
            <h4 className="font-serif text-lg font-bold text-gold border-l-2 border-gold pl-3">
              Tautan Cepat
            </h4>
            <ul className="space-y-3 text-sm font-light text-white/80">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleScrollTo(e, '#home')}
                  className="hover:text-gold hover:underline transition-colors"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#packages"
                  onClick={(e) => handleScrollTo(e, '#packages')}
                  className="hover:text-gold hover:underline transition-colors"
                >
                  Paket Umrah
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  onClick={(e) => handleScrollTo(e, '#features')}
                  className="hover:text-gold hover:underline transition-colors"
                >
                  Keunggulan
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={(e) => handleScrollTo(e, '#testimonials')}
                  className="hover:text-gold hover:underline transition-colors"
                >
                  Testimoni
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Info (3 cols) */}
          <div className="lg:col-span-3 space-y-6 text-left">
            <h4 className="font-serif text-lg font-bold text-gold border-l-2 border-gold pl-3">
              Hubungi Kami
            </h4>
            <ul className="space-y-4 text-sm font-light text-white/80">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-gold mr-3 mt-0.5 flex-shrink-0" />
                <span>
                  Jl. Durian No.47, RT.4/RW.4, Jagakarsa, Kec. Jagakarsa, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12620
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                <a href="tel:085720988031" className="hover:text-gold transition-colors">
                  082260001116
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                <a href="mailto:info@alharamain.com" className="hover:text-gold transition-colors">
                  info@ichsankamil.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-gold mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block font-semibold">Jam Operasional:</span>
                  <span className="text-xs">Senin - Sabtu: 08.00 - 17.00 WIB</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom (Copyright & Licenses) */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-white/60 text-center md:text-left">
          <div>
            <p>© {currentYear} ICHSAN KAMIL Tour & Travel. Seluruh Hak Cipta Dilindungi.</p>
            <p className="mt-1 text-[10px]">
              Kementerian Agama RI PPIU No. 120 Tahun 2024
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}
