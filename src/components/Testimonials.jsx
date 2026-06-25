import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: "Bpk. H. Ahmad Fauzi",
    role: "Pengusaha, Jakarta",
    package: "Umrah Executive Gold - Sept 2025",
    text: "Alhamdulillah, pengalaman umrah pertama bersama Ichsan Kamil sungguh luar biasa. Pelayanan mutawwif sangat membimbing dari rukun hingga ziarah. Kamar Swissôtel langsung nempel di pelataran Masjidil Haram, memudahkan saya mengajak orang tua shalat berjamaah di masjid.",
    stars: 5,
    initials: "AF"
  },
  {
    id: 2,
    name: "Ibu Hj. Siti Aminah",
    role: "Pensiunan Guru, Bandung",
    package: "Umrah Hemat Awal Musim - Agust 2025",
    text: "Awalnya ragu ambil paket hemat karena takut hotelnya jauh sekali, ternyata jaraknya masih sangat dekat berkisar 400 meter. Makanan prasmanan Indonesia rasanya pas di lidah. Seluruh staf sangat ramah dan sabar membantu jamaah lansia seperti saya.",
    stars: 5,
    initials: "SA"
  },
  {
    id: 3,
    name: "Bpk. dr. Ridwan Malik",
    role: "Dokter Spesialis, Surabaya",
    package: "Umrah VIP Signature Haramain - Okt 2025",
    text: "Pelayanan berkelas bintang lima. Tiket Business Class membuat perjalanan panjang tidak terasa melelahkan. Transportasi privat dan bimbingan ziarah eksklusif dari mutawwif lulusan Universitas Islam Madinah memberi nilai spiritual yang sangat mendalam bagi keluarga kami.",
    stars: 5,
    initials: "RM"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 400); // matches animation length
    return () => clearTimeout(timer);
  }, [activeIndex]);

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <section id="testimonials" className="py-24 bg-cream/35 relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-maroon/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-gold/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-gold block mb-2">TESTIMONI JAMAAH</span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-maroon">
            Kisah Nyata Perjalanan Suci Mereka
          </h2>
          <div className="h-1 w-20 bg-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Carousel Container */}
        <div className="relative bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gold/10">
          {/* Quote Icon overlay */}
          <div className="absolute top-6 left-6 text-cream-dark opacity-10">
            <Quote className="w-20 h-20 text-gold/30" />
          </div>

          {/* Testimonial Active Slide */}
          <div className={`transition-all duration-400 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="flex flex-col items-center text-center space-y-6">

              {/* Rating stars */}
              <div className="flex justify-center gap-1">
                {[...Array(REVIEWS[activeIndex].stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Review Text */}
              <p className="font-serif text-charcoal/90 text-base sm:text-lg lg:text-xl italic leading-relaxed max-w-2xl">
                "{REVIEWS[activeIndex].text}"
              </p>

              {/* User Bio */}
              <div className="flex items-center gap-4 pt-4 text-left">
                {/* Avatar Initials */}
                <div className="w-14 h-14 rounded-full bg-maroon text-gold font-bold text-lg flex items-center justify-center border-2 border-gold shadow-md">
                  {REVIEWS[activeIndex].initials}
                </div>
                <div>
                  <h4 className="font-serif text-base sm:text-lg font-bold text-maroon leading-tight">
                    {REVIEWS[activeIndex].name}
                  </h4>
                  <p className="text-xs text-charcoal/60 leading-none mt-1">
                    {REVIEWS[activeIndex].role}
                  </p>
                  <span className="inline-block mt-1 text-[10px] font-bold text-gold uppercase tracking-wider bg-maroon/5 px-2 py-0.5 rounded border border-gold/10">
                    {REVIEWS[activeIndex].package}
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 sm:px-4 pointer-events-none">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white text-maroon hover:bg-maroon hover:text-white shadow-md flex items-center justify-center border border-maroon/5 pointer-events-auto transition-all duration-200"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white text-maroon hover:bg-maroon hover:text-white shadow-md flex items-center justify-center border border-maroon/5 pointer-events-auto transition-all duration-200"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slide Indicators / Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {REVIEWS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (isAnimating) return;
                setIsAnimating(true);
                setActiveIndex(idx);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === idx ? 'bg-maroon w-8' : 'bg-maroon/20 hover:bg-maroon/40'
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
