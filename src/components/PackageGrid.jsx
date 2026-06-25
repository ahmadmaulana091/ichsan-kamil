import React, { useState } from 'react';
import { Star, Clock, Hotel, Plane, ShieldCheck, X, FileText, CheckCircle2, ChevronRight } from 'lucide-react';

const PACKAGES = [
  {
    id: 1,
    title: "Umrah Hemat Awal Musim",
    price: "Rp 27.900.000",
    priceValue: 27900000,
    month: "August",
    type: "Regular",
    duration: "9 Hari",
    flight: "Lion Air / Batik Air (Direct)",
    hotelMadinah: "Grand Plaza Madinah (★3)",
    hotelMakkah: "Rehab Al-Akhir Makkah (★3)",
    hotelStars: 3,
    badge: "Hemat Awal Musim",
    tagline: "Ideal untuk jamaah yang mencari perjalanan hemat dengan bimbingan penuh kenyamanan.",
    highlights: ["Sertifikasi Kemenag Resmi", "Jarak hotel ±400m", "Makan 3x Prasmanan Melayu"],
    itinerary: [
      "Hari 1: Berkumpul di Bandara Soekarno-Hatta & Penerbangan ke Madinah.",
      "Hari 2: Check-in hotel Madinah, Ziarah ke Makam Rasulullah SAW & Raudhah.",
      "Hari 3: Ziarah Kota Madinah (Masjid Quba, Masjid Qiblatain, Kebun Kurma).",
      "Hari 4: Persiapan Ihram, perjalanan menuju Makkah dengan Bus AC, ambil Miqat di Dzulkulaifah (Bir Ali), ibadah Umrah Pertama.",
      "Hari 5: Acara bebas & Istirahat di Makkah.",
      "Hari 6: Ziarah Kota Makkah (Jabal Tsur, Padang Arafah, Muzdalifah, Mina, Jabal Nur).",
      "Hari 7: Pelaksanaan Umrah Kedua (Tana'im / Ji'ranah).",
      "Hari 8: Tawaf Wada, Check-out hotel, menuju Bandara Jeddah untuk kepulangan ke Jakarta.",
      "Hari 9: Tiba di Soekarno-Hatta Jakarta. Ibadah Umrah Selesai."
    ],
    inclusions: ["Visa Umrah Resmi", "Tiket Pesawat PP Ekonomi", "Hotel Madinah & Makkah", "Bus AC Executive", "Makan 3x Sehari", "Mutawwif & Tour Leader", "Air Zamzam 5L (jika diizinkan)"],
    exclusions: ["Pembuatan Passport & Buku Kuning Meningitis", "Kebutuhan Pribadi & Kelebihan Bagasi", "Kamar Single/Double Upgrade"]
  },
  {
    id: 2,
    title: "Umrah Executive Gold",
    price: "Rp 36.500.000",
    priceValue: 36500000,
    month: "September",
    type: "Premium",
    duration: "12 Hari",
    flight: "Saudi Arabian Airlines (Direct Makkah/Madinah)",
    hotelMadinah: "Al-Aqeeq Madinah (★4)",
    hotelMakkah: "Swissôtel Al Maqam Makkah (★5)",
    hotelStars: 5,
    badge: "Paling Populer",
    tagline: "Paket premium dengan hotel bintang 5 langsung di pelataran Masjidil Haram.",
    highlights: ["Terbang Langsung Saudia Airlines", "Kereta Cepat Haramain Express", "Hotel nempel Masjidil Haram"],
    itinerary: [
      "Hari 1: Penerbangan langsung ke Madinah dengan Saudia Airlines. Check-in hotel.",
      "Hari 2: Ziarah makam Rasulullah SAW, Abu Bakar Shiddiq, Umar bin Khattab, dan Raudhah.",
      "Hari 3: Ziarah sejarah Madinah dan kajian fiqih Umrah.",
      "Hari 4: Perjalanan ke Makkah menggunakan Kereta Cepat Haramain (Haramain High Speed Railway - Hanya 2 Jam), pelaksanaan Umrah Pertama.",
      "Hari 5: Memperbanyak Ibadah Mandiri di Masjidil Haram.",
      "Hari 6: Ziarah Kota Makkah & Pelaksanaan Umrah Kedua.",
      "Hari 7: Kajian keislaman bersama Ustadz Pembimbing di Makkah.",
      "Hari 8: Ziarah tambahan ke Museum Wahyu (Jabal Nur).",
      "Hari 9: Pelaksanaan Umrah Ketiga / Acara Mandiri.",
      "Hari 10: Acara bebas belanja oleh-oleh di Makkah.",
      "Hari 11: Tawaf Wada, check-out hotel, perjalanan menuju Jeddah untuk penerbangan pulang.",
      "Hari 12: Tiba di Jakarta dengan selamat."
    ],
    inclusions: ["Visa Umrah & Asuransi KSA", "Tiket Pesawat PP Saudia Airlines", "Hotel Bintang 4 & Bintang 5 Premium", "Tiket Kereta Cepat Haramain (Ekonomi)", "Makan Menu Internasional & Indonesia", "Bimbingan Mutawwif Berlisensi", "Perlengkapan Umrah Eksklusif"],
    exclusions: ["Pengeluaran Pribadi (Laundry, Telepon, dll.)", "Tips Guide & Driver", "Pemeriksaan Medis Tambahan"]
  },
  {
    id: 3,
    title: "Umrah VIP Signature Haramain",
    price: "Rp 48.900.000",
    priceValue: 48900000,
    month: "October",
    type: "VIP",
    duration: "9 Hari",
    flight: "Saudi Arabian Airlines (Business Class)",
    hotelMadinah: "The Oberoi Madinah (★5 Luxury)",
    hotelMakkah: "Fairmont Makkah Clock Royal Tower (★5 Luxury)",
    hotelStars: 5,
    badge: "Eksklusif VIP",
    tagline: "Pengalaman ibadah termewah dengan akomodasi bintang 5 premium di Tower Jam Makkah.",
    highlights: ["Business Class Flight", "Hotel Bintang 5 Luxury View Ka'bah", "Private VIP Bus AC"],
    itinerary: [
      "Hari 1: Flight Business Class Jakarta - Madinah. Penjemputan Private VIP Bus, check-in Oberoi Madinah.",
      "Hari 2: Ziarah Khusus Raudhah Jalur VIP / Fast-track.",
      "Hari 3: City tour privat Madinah menggunakan mobil luxury khusus.",
      "Hari 4: Transfer Makkah menggunakan Kereta Cepat First Class. Check-in Fairmont Clock Tower, langsung Umrah Pertama.",
      "Hari 5: Ibadah intensif mandiri di Masjidil Haram dengan kamar menghadap Ka'bah.",
      "Hari 6: Ziarah privat tempat bersejarah Makkah dan Umrah Kedua.",
      "Hari 7: Kajian privat bersama Ustadz Nasional Pembimbing Khusus.",
      "Hari 8: Tawaf Wada privat, check-out hotel, transfer bandara Jeddah dengan sedan privat.",
      "Hari 9: Tiba di Soekarno-Hatta (VIP Airport Lounge Services)."
    ],
    inclusions: ["Visa VIP Umrah", "Tiket Pesawat Business Class PP", "Hotel Super Luxury (Oberoi & Fairmont Ka'bah View)", "Kereta Cepat Haramain (First Class)", "Layanan Private Transport & Guide VIP", "Full-board Catering Hotel Bintang 5", "Perlengkapan Premium Koper Carbon"],
    exclusions: ["Keperluan belanja pribadi", "Upgrade Room ke Suite"]
  },
  {
    id: 4,
    title: "Umrah Spesial Awal Ramadhan",
    price: "Rp 44.500.000",
    priceValue: 44500000,
    month: "Ramadhan",
    type: "Premium",
    duration: "15 Hari",
    flight: "Qatar Airways / Saudia Airlines (Direct)",
    hotelMadinah: "Dallah Taibah Madinah (★4)",
    hotelMakkah: "Mövenpick Hajar Tower Makkah (★5)",
    hotelStars: 5,
    badge: "Ramadhan Spesial",
    tagline: "Rasakan nikmatnya ibadah puasa dan tarawih di dua Masjid Suci umat Islam.",
    highlights: ["Puasa di Masjid Nabawi & Haram", "I'tikaf Ramadhan Terbimbing", "Paket 15 Hari Panjang"],
    itinerary: [
      "Hari 1: Jakarta - Madinah. Istirahat di hotel.",
      "Hari 2-5: Menikmati suasana awal Ramadhan di Madinah, Buka Puasa bersama di Masjid Nabawi, Shalat Tarawih.",
      "Hari 6: Check-out, Miqat di Bir Ali, Kereta Cepat Haramain ke Makkah, Umrah Pertama.",
      "Hari 7-12: Menghidupkan malam Ramadhan di Masjidil Haram, I'tikaf, Kajian Tarjih, Umrah Kedua.",
      "Hari 13: Ziarah Kota Makkah dan persiapan Itikaf malam 21 Ramadhan.",
      "Hari 14: Tawaf Wada, bertolak ke Jeddah, penerbangan kembali ke Jakarta.",
      "Hari 15: Tiba di Jakarta. Umrah Ramadhan Mabrur."
    ],
    inclusions: ["Visa Ramadhan Resmi", "Tiket Pesawat PP Penerbangan Premium", "Hotel Madinah Bintang 4 & Makkah Bintang 5", "Katering Sahur & Buka Puasa Khas Indonesia/Arab", "Mutawwif Berpengalaman Ramadhan", "Tiket Kereta Cepat Haramain"],
    exclusions: ["Passport & Vaksin", "Tips Operator Lokal", "Kebutuhan Laundry Pribadi"]
  }
];

export default function PackageGrid({ filters }) {
  const [selectedPackage, setSelectedPackage] = useState(null);

  // Filtering Logic
  const filteredPackages = PACKAGES.filter(pkg => {
    // 1. Month Filter
    if (filters.month !== 'all' && pkg.month !== filters.month) {
      return false;
    }
    // 2. Type Filter
    if (filters.type !== 'all' && pkg.type !== filters.type) {
      return false;
    }
    // 3. Price Filter
    if (filters.priceRange !== 'all') {
      if (filters.priceRange === 'under30' && pkg.priceValue >= 30000000) return false;
      if (filters.priceRange === '30to40' && (pkg.priceValue < 30000000 || pkg.priceValue > 40000000)) return false;
      if (filters.priceRange === 'above40' && pkg.priceValue <= 40000000) return false;
    }
    return true;
  });

  const getWhatsAppLink = (pkg) => {
    const message = `Assalamualaikum Ichsan Kamil, saya ingin menanyakan lebih lanjut mengenai *${pkg.title}* (${pkg.price}) durasi ${pkg.duration}. Mohon informasi ketersediaan kuota.`;
    return `https://wa.me/6285720988031?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="packages" className="py-24 bg-cream/30 relative">
      {/* Visual background details */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-maroon/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-maroon mb-4">
            Pilihan Paket Umrah Terbaik
          </h2>
          <div className="h-1 w-24 bg-gold mx-auto mb-6 rounded-full" />
          <p className="text-charcoal/80 text-base sm:text-lg">
            Kami menyediakan program umrah yang dirancang khusus untuk memastikan kenyamanan ibadah Anda dengan hotel strategis dan bimbingan terpercaya.
          </p>
        </div>

        {/* Packages Grid */}
        {filteredPackages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-maroon/5 hover:border-gold/30 hover:shadow-2xl transition-all duration-300 flex flex-col group"
              >
                {/* Header Card (Badge & Durasi) */}
                <div className="relative p-6 bg-maroon text-white overflow-hidden flex-shrink-0">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full transform translate-x-12 -translate-y-12 transition-transform duration-500 group-hover:scale-110" />

                  {/* Badge */}
                  <span className="absolute top-6 right-6 inline-block px-3 py-1 bg-gold text-maroon text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                    {pkg.badge}
                  </span>

                  <span className="text-gold text-xs font-bold uppercase tracking-widest block mb-1">
                    {pkg.type} PACKAGE
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide pr-16 mb-2">
                    {pkg.title}
                  </h3>

                  <div className="flex items-center space-x-2 text-white/80 text-sm">
                    <Clock className="w-4 h-4 text-gold" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                {/* Pricing & Stars */}
                <div className="p-6 border-b border-charcoal/5 flex-shrink-0 bg-cream/10">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-2xl sm:text-3xl font-black text-maroon">{pkg.price}</span>
                    <span className="text-xs text-charcoal/60">/ pax</span>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(pkg.hotelStars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                    {[...Array(5 - pkg.hotelStars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-charcoal/20" />
                    ))}
                    <span className="text-xs text-charcoal/60 ml-2">Hotel Rating</span>
                  </div>
                </div>

                {/* Short Highlights list */}
                <div className="p-6 flex-grow space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start text-sm text-charcoal/80">
                      <Plane className="w-4 h-4 text-gold mr-3 mt-0.5 flex-shrink-0" />
                      <span>{pkg.flight}</span>
                    </div>
                    <div className="flex items-start text-sm text-charcoal/80">
                      <Hotel className="w-4 h-4 text-gold mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="block font-semibold">Madinah:</span>
                        <span className="text-xs">{pkg.hotelMadinah}</span>
                      </div>
                    </div>
                    <div className="flex items-start text-sm text-charcoal/80">
                      <Hotel className="w-4 h-4 text-gold mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="block font-semibold">Makkah:</span>
                        <span className="text-xs">{pkg.hotelMakkah}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-charcoal/5">
                    <p className="text-xs text-charcoal/60 font-semibold mb-2 uppercase tracking-wide">Fasilitas Unggulan:</p>
                    <ul className="space-y-1.5">
                      {pkg.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center text-xs text-charcoal/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-maroon mr-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Card Buttons */}
                <div className="p-6 pt-0 mt-auto flex gap-4">
                  <button
                    onClick={() => setSelectedPackage(pkg)}
                    className="flex-1 py-3 px-4 rounded-xl border border-maroon text-maroon hover:bg-maroon hover:text-white font-semibold text-sm transition-all duration-200"
                  >
                    Detail Paket
                  </button>
                  <a
                    href={getWhatsAppLink(pkg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-gold hover:bg-gold/90 text-maroon font-bold text-center text-sm transition-all duration-200"
                  >
                    Pesan Kuota
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center p-12 bg-white rounded-3xl shadow-sm border border-gold/15 max-w-xl mx-auto">
            <p className="text-charcoal/70 text-lg mb-4">Mohon maaf, tidak ada paket yang cocok dengan filter pencarian Anda.</p>
            <button
              onClick={() => handleResetFilters()}
              className="text-maroon font-bold hover:underline"
            >
              Reset Semua Filter
            </button>
          </div>
        )}
      </div>

      {/* Package Detail Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
          <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden border border-gold/30 flex flex-col animate-slide-in">
            {/* Modal Header */}
            <div className="p-6 bg-maroon text-white flex justify-between items-center flex-shrink-0">
              <div>
                <span className="text-xs font-bold text-gold uppercase tracking-wider">{selectedPackage.type} Package</span>
                <h3 className="font-serif text-2xl font-bold">{selectedPackage.title}</h3>
              </div>
              <button
                onClick={() => setSelectedPackage(null)}
                className="p-1 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content Scrollable */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
              {/* Tagline */}
              <p className="text-base text-charcoal/80 italic border-l-4 border-gold pl-4 py-1">
                "{selectedPackage.tagline}"
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-cream/30 p-4 rounded-2xl border border-gold/10">
                <div className="text-center sm:text-left">
                  <span className="text-xs text-charcoal/60 uppercase block font-semibold">Durasi</span>
                  <span className="text-sm font-bold text-maroon">{selectedPackage.duration}</span>
                </div>
                <div className="text-center sm:text-left">
                  <span className="text-xs text-charcoal/60 uppercase block font-semibold">Hotel Makkah</span>
                  <span className="text-sm font-bold text-maroon">{selectedPackage.hotelMakkah}</span>
                </div>
                <div className="text-center sm:text-left">
                  <span className="text-xs text-charcoal/60 uppercase block font-semibold">Hotel Madinah</span>
                  <span className="text-sm font-bold text-maroon">{selectedPackage.hotelMadinah}</span>
                </div>
                <div className="text-center sm:text-left">
                  <span className="text-xs text-charcoal/60 uppercase block font-semibold">Penerbangan</span>
                  <span className="text-sm font-bold text-maroon">{selectedPackage.flight.split(' ')[0]}</span>
                </div>
              </div>

              {/* Itinerary & Inclusions/Exclusions Tabs Side by Side */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Itinerary Section */}
                <div className="lg:col-span-7 space-y-4">
                  <h4 className="font-serif text-lg font-bold text-maroon flex items-center gap-2 border-b border-charcoal/5 pb-2">
                    <FileText className="w-5 h-5 text-gold" />
                    Rencana Perjalanan (Itinerary)
                  </h4>
                  <div className="relative pl-6 border-l border-maroon/20 space-y-6 max-h-[350px] overflow-y-auto pr-2">
                    {selectedPackage.itinerary.map((item, idx) => (
                      <div key={idx} className="relative">
                        {/* Bullet circle */}
                        <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-gold border border-maroon" />
                        <p className="text-sm text-charcoal leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inclusions & Exclusions */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Inclusions */}
                  <div className="space-y-3">
                    <h4 className="font-serif text-base font-bold text-maroon flex items-center gap-2 border-b border-charcoal/5 pb-1">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      Harga Termasuk
                    </h4>
                    <ul className="space-y-1.5">
                      {selectedPackage.inclusions.map((inc, i) => (
                        <li key={i} className="flex items-start text-xs text-charcoal/80">
                          <ChevronRight className="w-3.5 h-3.5 text-gold mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Exclusions */}
                  <div className="space-y-3">
                    <h4 className="font-serif text-base font-bold text-maroon flex items-center gap-2 border-b border-charcoal/5 pb-1">
                      <X className="w-5 h-5 text-red-600" />
                      Harga Tidak Termasuk
                    </h4>
                    <ul className="space-y-1.5">
                      {selectedPackage.exclusions.map((exc, i) => (
                        <li key={i} className="flex items-start text-xs text-charcoal/70">
                          <X className="w-3 h-3 text-red-600 mr-2 mt-1 flex-shrink-0" />
                          <span>{exc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="p-6 bg-cream border-t border-maroon/5 flex flex-col sm:flex-row gap-4 items-center justify-between flex-shrink-0">
              <div className="text-center sm:text-left">
                <span className="text-xs text-charcoal/60 block font-semibold">Harga Mulai Dari</span>
                <span className="text-2xl font-black text-maroon">{selectedPackage.price}</span>
              </div>
              <div className="flex gap-4 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedPackage(null)}
                  className="flex-1 sm:flex-none px-6 py-3 border border-charcoal/30 rounded-xl text-charcoal font-semibold text-sm hover:bg-charcoal/5 transition-all"
                >
                  Tutup
                </button>
                <a
                  href={getWhatsAppLink(selectedPackage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-8 py-3 bg-maroon text-white font-semibold text-sm rounded-xl hover:bg-maroon/90 shadow-md transition-all text-center flex items-center justify-center gap-2"
                >
                  Pesan via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
