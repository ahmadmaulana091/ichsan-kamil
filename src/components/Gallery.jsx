import React, { useState } from 'react';
import { X, Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import GalleryCard from './GalleryCard';

const GALLERY_ITEMS = [
  {
    id: 1,
    src: '/gallery_tawaf.png',
    title: 'Tawaf di Masjidil Haram',
    caption: 'Jamaah Ichsan Kamil menunaikan ibadah tawaf mengelilingi Ka\'bah yang mulia di Makkah Al-Mukarramah.',
    tag: 'Makkah',
    tagColor: 'bg-maroon',
  },
  {
    id: 2,
    src: '/gallery_nabawi.png',
    title: 'Ziarah Masjid Nabawi',
    caption: 'Suasana khidmat jamaah bersholawat dan berdoa di pelataran Masjid Nabawi, Madinah Al-Munawwarah.',
    tag: 'Madinah',
    tagColor: 'bg-emerald-700',
  },
  {
    id: 3,
    src: '/gallery_ziarah.png',
    title: 'Ziarah Tempat Bersejarah',
    caption: 'Rombongan jamaah Ichsan Kamil dalam program ziarah ke situs-situs bersejarah Islam bersama mutawwif berpengalaman.',
    tag: 'Ziarah',
    tagColor: 'bg-amber-700',
  },
  {
    id: 4,
    src: '/gallery_makan.png',
    title: 'Makan Bersama Jamaah',
    caption: 'Kebersamaan jamaah saat menikmati hidangan prasmanan khas Indonesia & Arab yang disajikan di hotel.',
    tag: 'Kebersamaan',
    tagColor: 'bg-blue-700',
  },
  {
    id: 5,
    src: '/gallery_keberangkatan.png',
    title: 'Pelepasan & Keberangkatan',
    caption: 'Momen haru keberangkatan rombongan jamaah dari Bandara Internasional Soekarno-Hatta menuju Tanah Suci.',
    tag: 'Keberangkatan',
    tagColor: 'bg-purple-700',
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null); // index of active photo

  const openLightbox = (idx) => setLightbox(idx);
  const closeLightbox = () => setLightbox(null);
  const prevPhoto = () => setLightbox((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  const nextPhoto = () => setLightbox((prev) => (prev + 1) % GALLERY_ITEMS.length);

  const handleKeyDown = (e) => {
    if (lightbox === null) return;
    if (e.key === 'ArrowLeft') prevPhoto();
    if (e.key === 'ArrowRight') nextPhoto();
    if (e.key === 'Escape') closeLightbox();
  };

  return (
    <section
      id="gallery"
      className="py-24 bg-white relative overflow-hidden"
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gold/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-maroon/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-gold block mb-2 flex items-center justify-center gap-2">
            <Camera className="w-4 h-4 inline-block" />
            GALERI KEGIATAN
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-maroon mb-4">
            Dokumentasi Perjalanan Jamaah
          </h2>
          <div className="h-1 w-24 bg-gold mx-auto mb-6 rounded-full" />
          <p className="text-charcoal/70 text-base">
            Setiap momen ibadah adalah kenangan yang tak ternilai. Berikut adalah rekam jejak perjalanan suci bersama jamaah Ichsan Kamil Tour & Travel.
          </p>
        </div>

        {/* Masonry-style Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-4 auto-rows-[220px]">

          {/* Card 1 – large (spans 7 cols, 2 rows) */}
          <GalleryCard item={GALLERY_ITEMS[0]} onClick={() => openLightbox(0)}
            className="col-span-2 md:col-span-2 lg:col-span-7 row-span-2"
          />

          {/* Card 2 */}
          <GalleryCard item={GALLERY_ITEMS[1]} onClick={() => openLightbox(1)}
            className="col-span-1 lg:col-span-5"
          />

          {/* Card 3 */}
          <GalleryCard item={GALLERY_ITEMS[2]} onClick={() => openLightbox(2)}
            className="col-span-1 lg:col-span-5"
          />

          {/* Card 4 */}
          <GalleryCard item={GALLERY_ITEMS[3]} onClick={() => openLightbox(3)}
            className="col-span-1 lg:col-span-6"
          />

          {/* Card 5 */}
          <GalleryCard item={GALLERY_ITEMS[4]} onClick={() => openLightbox(4)}
            className="col-span-1 lg:col-span-6"
          />
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-charcoal/60 text-sm mb-4">Ingin melihat lebih banyak dokumentasi perjalanan kami?</p>
          <a
            href="https://wa.me/6285720988031?text=Assalamualaikum,%20saya%20ingin%20melihat%20lebih%20banyak%20foto%20kegiatan%20Ichsan%20Kamil"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-maroon text-maroon font-semibold text-sm hover:bg-maroon hover:text-white transition-all duration-200"
          >
            <Camera className="w-4 h-4" />
            Minta Lebih Banyak Foto via WhatsApp
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-slide-in"
          onClick={closeLightbox}
        >
          <div
            className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full mx-4 overflow-hidden border border-gold/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image */}
            <div className="relative">
              <img
                src={GALLERY_ITEMS[lightbox].src}
                alt={GALLERY_ITEMS[lightbox].title}
                className="w-full max-h-[65vh] object-cover"
              />

              {/* Prev/Next arrows */}
              <button
                onClick={prevPhoto}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextPhoto}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Tag */}
              <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-xs font-bold uppercase tracking-wider ${GALLERY_ITEMS[lightbox].tagColor}`}>
                {GALLERY_ITEMS[lightbox].tag}
              </span>

              {/* Counter */}
              <span className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/50 text-white text-xs font-semibold">
                {lightbox + 1} / {GALLERY_ITEMS.length}
              </span>
            </div>

            {/* Caption */}
            <div className="p-6">
              <h3 className="font-serif text-xl font-bold text-maroon mb-2">
                {GALLERY_ITEMS[lightbox].title}
              </h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                {GALLERY_ITEMS[lightbox].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


