import React, { useState } from 'react';
import { X, Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import GalleryCard from './GalleryCard';

const GALLERY_ITEMS = [
  {
    id: 1,
    src: '/galery/Kabah.png',
    title: `Ka'bah`,
    caption: `Bukan sekadar perjalanan, tetapi panggilan istimewa dari Allah SWT. Mengabadikan momen berharga di hadapan Ka'bah bersama keluarga besar Ichsan Kamil.`,
    tag: 'Makkah',
    tagColor: 'bg-maroon',
  },
  {
    id: 2,
    src: '/galery/Thaif.png',
    title: 'Thaif (City Tour)',
    caption: 'Kebersamaan, senyuman, dan rasa syukur menjadi bagian indah dalam setiap langkah perjalanan umrah.',
    tag: 'Madinah',
    tagColor: 'bg-emerald-700',
  },
  {
    id: 3,
    src: '/galery/JabalRahmah.png',
    title: 'Ziarah Tempat Bersejarah',
    caption: 'Rombongan jamaah Ichsan Kamil dalam program ziarah ke situs-situs bersejarah Islam bersama mutawwif berpengalaman.',
    tag: 'Ziarah',
    tagColor: 'bg-amber-700',
  },
  {
    id: 4,
    src: '/galery/AzkaAlShafa.png',
    title: 'Makan Bersama Jamaah',
    caption: 'Kebersamaan jamaah saat menikmati hidangan prasmanan khas Indonesia & Arab yang disajikan di hotel.',
    tag: 'Kebersamaan',
    tagColor: 'bg-blue-700',
  },
  {
    id: 5,
    src: '/galery/Payung.png',
    title: 'Pelataran Masjid Nabawi',
    caption: 'Di bawah teduhnya payung Masjid Nabawi, dua hati melangkah bersama, mengawali perjalanan cinta yang dipenuhi doa, iman, dan keberkahan.',
    tag: 'Momen Spesial',
    tagColor: 'bg-purple-700',
  },
  {
    id: 6,
    src: '/galery/MasjidQuba.png',
    title: "Masjid Quba",
    caption: "Salah satu destinasi bersejarah yang menjadi saksi awal peradaban Islam.",
    tag: 'Madinah',
    tagColor: 'bg-maroon',
  },
  {
    id: 7,
    src: '/galery/MenaraJamMakkah.png',
    title: 'Masjidil Haram',
    caption: 'Jamaah Ichsan Kamil berfoto bersama di depan Masjidil Haram dengan latar Menara Jam Makkah, mengabadikan momen kebersamaan yang penuh syukur dan kebahagiaan.',
    tag: 'Makkah',
    tagColor: 'bg-rose-700',
  },
  {
    id: 8,
    src: '/galery/MasjidNabawi.png',
    title: 'Masjid Nabawi',
    caption: 'Jamaah Ichsan Kamil berfoto bersama di pelataran Masjid Nabawi, Madinah, dengan latar belakang Kubah Hijau yang ikonik. Dalam suasana cerah dan penuh kebahagiaan, para jamaah mengabadikan momen kebersamaan di salah satu tempat paling mulia bagi umat Islam.',
    tag: 'Madinah',
    tagColor: 'bg-emerald-700',
  },
  {
    id: 9,
    src: '/galery/gallery_tawaf.png',
    title: 'Makkah',
    caption: 'Momen penuh haru saat mengawali perjalanan cinta ke Tanah Suci untuk menunaikan ibadah umrah.',
    tag: 'Momen',
    tagColor: 'bg-purple-700',
  },
  {
    id: 10,
    src: '/galery/gallery_hotel.png',
    title: 'Hotel Bintang di Makkah',
    caption: 'Fasilitas hotel bintang yang nyaman dengan pemandangan langsung ke Masjidil Haram, memudahkan jamaah beribadah sepanjang waktu.',
    tag: 'Fasilitas',
    tagColor: 'bg-sky-700',
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

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
      className="py-24 bg-cream relative overflow-hidden"
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
            Setiap momen ibadah adalah kenangan yang tak ternilai. Berikut adalah rekam jejak perjalanan suci bersama jamaah Ichsan Kamil Tour &amp; Travel.
          </p>
        </div>

        {/* ── BLOCK A: Hero (left, tall) + 2 stacked right ── */}
        {/* 3 photos: [0] big hero | [1] top-right | [2] bottom-right */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-3 mb-3" style={{ gridTemplateRows: 'repeat(2, 260px)' }}>
          <GalleryCard
            item={GALLERY_ITEMS[0]}
            onClick={() => openLightbox(0)}
            className="col-span-2 lg:col-span-8 row-span-2"
          />
          <GalleryCard
            item={GALLERY_ITEMS[1]}
            onClick={() => openLightbox(1)}
            className="hidden lg:block lg:col-span-4"
          />
          <GalleryCard
            item={GALLERY_ITEMS[2]}
            onClick={() => openLightbox(2)}
            className="hidden lg:block lg:col-span-4"
          />
        </div>

        {/* ── BLOCK B: 3 equal-width cards ── */}
        {/* 3 photos: [1] [2] [3] on mobile, [3][4][5] on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3" style={{ gridTemplateRows: '240px' }}>
          {/* On mobile show cards 1 & 2 here (hidden on lg since shown in block A) */}
          <GalleryCard
            item={GALLERY_ITEMS[1]}
            onClick={() => openLightbox(1)}
            className="lg:hidden"
          />
          <GalleryCard
            item={GALLERY_ITEMS[2]}
            onClick={() => openLightbox(2)}
            className="lg:hidden"
          />
          <GalleryCard item={GALLERY_ITEMS[3]} onClick={() => openLightbox(3)} className="hidden sm:block" />
          <GalleryCard item={GALLERY_ITEMS[4]} onClick={() => openLightbox(4)} className="hidden sm:block" />
          <GalleryCard item={GALLERY_ITEMS[5]} onClick={() => openLightbox(5)} className="hidden sm:block" />
        </div>

        {/* Mobile row for cards 3-5 */}
        <div className="grid grid-cols-1 gap-3 mb-3 sm:hidden" style={{ gridTemplateRows: '220px' }}>
          <GalleryCard item={GALLERY_ITEMS[3]} onClick={() => openLightbox(3)} />
          <GalleryCard item={GALLERY_ITEMS[4]} onClick={() => openLightbox(4)} />
          <GalleryCard item={GALLERY_ITEMS[5]} onClick={() => openLightbox(5)} />
        </div>

        {/* ── BLOCK C: Left tall | Wide top-right | 2 smaller bottom-right ── */}
        {/* 4 photos: [6] tall left | [7] wide right | [8]+[9] bottom right */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-3" style={{ gridTemplateRows: 'repeat(2, 230px)' }}>
          {/* [6] tall left */}
          <GalleryCard
            item={GALLERY_ITEMS[6]}
            onClick={() => openLightbox(6)}
            className="col-span-1 lg:col-span-4 row-span-2"
          />
          {/* [7] wide, top right */}
          <GalleryCard
            item={GALLERY_ITEMS[7]}
            onClick={() => openLightbox(7)}
            className="col-span-1 lg:col-span-8"
          />
          {/* [8] bottom right, left half */}
          <GalleryCard
            item={GALLERY_ITEMS[8]}
            onClick={() => openLightbox(8)}
            className="col-span-1 lg:col-span-4"
          />
          {/* [9] bottom right, right half */}
          <GalleryCard
            item={GALLERY_ITEMS[9]}
            onClick={() => openLightbox(9)}
            className="col-span-1 lg:col-span-4"
          />
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
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

              {/* Dot indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                {GALLERY_ITEMS.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                    className={`rounded-full transition-all duration-300 ${i === lightbox ? 'w-5 h-1.5 bg-gold' : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/70'}`}
                  />
                ))}
              </div>
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
