import React from 'react';
import { Calendar, Compass, ShieldCheck, Search, DollarSign } from 'lucide-react';
import heroBg from '../assets/mecca_hero.webp';

export default function Hero({ filters, setFilters }) {
  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleResetFilters = () => {
    setFilters({
      month: 'all',
      type: 'all',
      priceRange: 'all'
    });
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with elegant overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Masjid al-Haram Mecca"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-center filter brightness-[0.4] scale-105"
        />
        {/* Soft Maroon & Gold gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-maroon/60 via-transparent to-maroon/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent opacity-90" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Tagline & Copy */}
          <div className="lg:col-span-7 text-left space-y-6">
            <div className="inline-flex items-center space-x-2 bg-gold/20 backdrop-blur-md border border-gold/30 px-4 py-2 rounded-full text-gold">
              <ShieldCheck className="" />
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase">Penyelenggara Perjalanan Ibadah Umrah (PPIU)
                <br />
                No : 91200160910280002
              </span>
            </div>

            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight">
              Ibadah Umrah <br />
              <span className="text-gold font-serif">Nyaman & Tepercaya</span>
            </h1>

            <p className="text-white/90 text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-xl">
              Wujudkan impian perjalanan suci Anda ke Tanah Suci bersama layanan bimbingan ibadah mutawatir terlatih dan akomodasi premium terbaik.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#packages"
                className="inline-flex items-center justify-center px-8 py-4 bg-gold hover:bg-gold/90 text-maroon font-bold text-base rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Lihat Paket Umrah
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-base rounded-full backdrop-blur-sm transition-all duration-200"
              >
                Mengapa Memilih Kami?
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
