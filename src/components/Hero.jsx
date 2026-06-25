import React from 'react';
import { Calendar, Compass, ShieldCheck, Search, DollarSign } from 'lucide-react';
import heroBg from '../assets/mecca_hero.png';

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
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase">Izin Resmi Kemenag RI No. 120/2024</span>
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

        {/* Floating Search/Filter Component */}
        <div className="mt-16 lg:mt-24 relative z-20">
          <div className="bg-white/95 rounded-3xl p-6 sm:p-8 shadow-2xl border border-gold/20 max-w-5xl mx-auto backdrop-blur-md">
            <div className="text-left mb-6">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-maroon flex items-center gap-2">
                <Search className="w-5 h-5 text-gold" />
                Cari Jadwal Keberangkatan
              </h3>
              <p className="text-xs sm:text-sm text-charcoal/70">
                Pilih filter di bawah untuk menyesuaikan jadwal dan anggaran ibadah Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Departure Month Filter */}
              <div className="space-y-2 text-left">
                <label className="text-xs font-bold text-charcoal/80 uppercase tracking-wider block">
                  Bulan Keberangkatan
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-3.5 w-5 h-5 text-maroon/60" />
                  <select
                    value={filters.month}
                    onChange={(e) => handleFilterChange('month', e.target.value)}
                    className="w-full bg-cream border border-charcoal/10 rounded-xl py-3 pl-12 pr-4 text-sm text-charcoal font-medium focus:outline-none focus:ring-2 focus:ring-maroon/20 focus:border-maroon transition-all"
                  >
                    <option value="all">Semua Bulan (2026)</option>
                    <option value="August">Agustus 2026</option>
                    <option value="September">September 2026</option>
                    <option value="October">Okt-November 2026</option>
                    <option value="Ramadhan">Ramadhan 2026</option>
                  </select>
                </div>
              </div>

              {/* Package Type Filter */}
              <div className="space-y-2 text-left">
                <label className="text-xs font-bold text-charcoal/80 uppercase tracking-wider block">
                  Tipe Layanan
                </label>
                <div className="relative">
                  <Compass className="absolute left-4 top-3.5 w-5 h-5 text-maroon/60" />
                  <select
                    value={filters.type}
                    onChange={(e) => handleFilterChange('type', e.target.value)}
                    className="w-full bg-cream border border-charcoal/10 rounded-xl py-3 pl-12 pr-4 text-sm text-charcoal font-medium focus:outline-none focus:ring-2 focus:ring-maroon/20 focus:border-maroon transition-all"
                  >
                    <option value="all">Semua Kategori</option>
                    <option value="Regular">Regular Ekonomi</option>
                    <option value="Premium">Premium Exec</option>
                    <option value="VIP">Super VIP Double</option>
                  </select>
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="space-y-2 text-left">
                <label className="text-xs font-bold text-charcoal/80 uppercase tracking-wider block">
                  Anggaran Estimasi
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-3.5 w-5 h-5 text-maroon/60" />
                  <select
                    value={filters.priceRange}
                    onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                    className="w-full bg-cream border border-charcoal/10 rounded-xl py-3 pl-12 pr-4 text-sm text-charcoal font-medium focus:outline-none focus:ring-2 focus:ring-maroon/20 focus:border-maroon transition-all"
                  >
                    <option value="all">Semua Harga</option>
                    <option value="under30">Dibawah Rp 30 Juta</option>
                    <option value="30to40">Rp 30 - 40 Juta</option>
                    <option value="above40">Diatas Rp 40 Juta</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Clear Filters Button (Visible if filters applied) */}
            {(filters.month !== 'all' || filters.type !== 'all' || filters.priceRange !== 'all') && (
              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleResetFilters}
                  className="text-xs sm:text-sm font-semibold text-maroon hover:text-maroon/80 underline focus:outline-none transition-colors"
                >
                  Reset Pencarian
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
