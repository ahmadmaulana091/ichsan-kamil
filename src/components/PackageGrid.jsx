import React, { useState } from 'react';
import { Star, Clock, Hotel, Plane, ShieldCheck, X, FileText, CheckCircle2, ChevronRight, Phone, MapPin, Globe, MessageSquare } from 'lucide-react';

const PACKAGES = [
  {
    id: 1,
    title: "Umroh VIP + THAIF",
    price: "Rp 35.000.000",
    priceValue: 35000000,
    month: "Agustus",
    type: "VIP",
    duration: "12 Hari",
    flight: "Saudi Arabian Airlines (Direct)",
    hotelMadinah: "Sanabel / Setaraf (★4)",
    hotelMakkah: "Azka Al Safa / Setaraf (★5)",
    hotelStars: 5,
    badge: "Eksklusif VIP",
    isSoldOut: true,
    tagline: "Pengalaman ibadah termewah dengan akomodasi bintang 5 premium.",
    brosurUrl: "https://wa.me/6285720988031?text=Assalamualaikum%20Ichsan%20Kamil%2C%20saya%20ingin%20meminta%20brosur%20paket%20Umrah%20Oktobert%20(2026)",
    highlights: ["2x Sholat Jum'at", "Tiket PP + Visa + Asuransi", "Bus City Tour Exclusive"],
    itinerary: [
      "Hari 1: Berkumpul di PT Ichsan Kami pukul 03.30 WIB pelepasan dan menuju Bandara Terminal 3 (5 jam sebelum keberangkatan). Sarapan, briefing dan check-in pesawat. Pukul 09.10 Pesawat SV817 By Saudia Airlines Take Off menuju Jeddah. Landing pukul 14.40 waktu setempat. Menuju hotel beristirahat sejenak, makan malam dan persiapan pelaksaaan Umroh Ke-1 (Miqot Umroh ke-1 dilakukan di pesawat atau dibandara melihat situasi dan kondisi).",
      "Hari 2: Qiyamullail dan memperbanyak ibadah di Masjidil Haram, sarapan pagi dan persiapan sholat jum’at serta kegiatan pribadi Jamaah diberikan waktu bebas untuk memperbanyak Ibadah, seperti Tadarus Alquran, berdzikir, Itikaf dan Amalan Sunnah lainnya.",
      "Hari 3: Qiyamulail dan memperbanyak ibadah di Masjidil Haram. Sarapan pagi dan Jamaah kumpul di lobby pukul 07.00 (on-time) persiapan City Tour Kota Makkah (Jabal Tsur, Padang Arafah, Jabal Rahmah, Muzdhalifah, Mina, Jabal Nur, Ji’Rona) dan Miqot Umroh ke-2 serta pelaksanaan Umroh ke-2 (diwajibkan membawa pakaian ihram).",
      "Hari 4: Qiyamullail dan memperbanyak ibadah di Masjidil Haram, sarapan pagi dan kegiatan pribadi Jamaah diberikan waktu bebas untuk memperbanyak Ibadah, seperti Tadarus Alquran, berdzikir, Itikaf dan Amalan Sunnah lainnya.",
      "Hari 5: Qiyamulail dan memperbanyak ibadah di Masjidil Haram. Sarapan pagi dan Jamaah kumpul di lobby pukul 07.00 (on-time) persiapan City Tour Thaif (Masjid Abdullah Bin Abbas, Masjid Al-Ku/’aa. Pabrik Parfum, Cable Car/Kereta Gantung dan Makan siang khas Arab) dan Miqot Umroh ke-3 untuk pelaksanaan Umroh ke-3 (Mandiri) (diwajibkan membawa pakaian ihram).",
      "Hari 6: Qiyamulail dan memperbanyak ibadah di Masjidil Haram Sarapan pagi dan Pukul 10.00 Jamaah diminta untuk mengeluarkan koper dari kamar masing masing. THAWAF WADA’. Pukul 14.00 Checkout hotel. Jamaah Menuju Madinah by Bus.",
      "Hari 7: Qiyamulail dan memperbanyak ibadah di Masjid Nabawi. Sarapan pagi dan Berziarah ke Makam Nabi Muhammad ﷺ (Raudhah : tergantung jadwal dari Muasasah).",
      "Hari 8: Qiyamulail dan memperbanyak ibadah di Masjid Nabawi. Sarapan pagi. Pukul 07.00 (on-time) City Tour Percetakan Al-Qur’an, Masjid Quba, Jabal Uhud, Kebun Kurma, Masjid Qiblatain, Khandaq.",
      "Hari 9: Qiyamulail dan memperbanyak ibadah di Masjid Nabawi. Sarapan pagi dan pengenalan sekitar Masjid Nabawi (Pemakaman Baqi, Saqifah Bani Saidah, Masjid Abu Bakar, Masjid Ghomamah, Masjid Ali). Persiapan Sholat Jum’at.",
      "Hari 10: Qiyamullail dan memperbanyak ibadah di Masjid Nabawi, sarapan pagi dan kegiatan pribadi Jamaah diberikan waktu bebas untuk memperbanyak Ibadah, seperti Tadarus Alquran, berdzikir, Itikaf dan Amalan Sunnah lainnya.",
      "Hari 11: Qiyamullail dan memperbanyak ibadah di Masjid Nabawi, sarapan pagi dan persiapan Ziarah Wada (Perpisahan). Koper Bagasi diletakkan didepan kamar masing-masing pukul 09.00. Makan siang dan berkumpul di lobby untuk persiapan Check Out. Menuju Bandara Madinah menuju Jakarta dengan menggunakan pesawat SV820 take-off pukul 20.25",
      "Hari 12: Tiba di Soekarno-Hatta Jakarta. Ibadah Umrah Selesai."
    ],
    inclusions: ["Visa Umrah & Asuransi KSA", "Tiket Pesawat PP Saudia Airlines", "Tour Leader & Muthowif", "Jarak Hotel Strategis", "Pembimbing Berpengalaman", "Bus City Tour Exclusive"],
    exclusions: ["Pembuatan Passport & Suntik Meningitis", "Kebutuhan Pribadi & Kelebihan Bagasi", "Kelebihan Bagasi"]
  },
  {
    id: 2,
    title: "Umrah Oktober 2026",
    price: "Rp 32.500.000",
    priceValue: 32500000,
    month: "Oktober",
    type: "Regular",
    duration: "9 Hari",
    flight: "Saudi Arabian Airlines (Direct)",
    hotelMadinah: "Jawharat Al Rasheed / Setaraf (★3)",
    hotelMakkah: "Azka Al Safa / Setaraf (★5)",
    hotelStars: 3,
    badge: "Oktober 2026",
    tagline: "Ideal untuk jamaah yang mencari perjalanan hemat dengan bimbingan penuh kenyamanan.",
    brosurUrl: "https://wa.me/6285720988031?text=Assalamualaikum%20Ichsan%20Kamil%2C%20saya%20ingin%20meminta%20brosur%20paket%20Umrah%20Oktobert%20(2026)",
    highlights: ["Jarak Hotel Strategis", "Free Zam-Zam 5 ltr", "Percetakan Al-Qur'an"],
    itinerary: [
      "Hari 1: Berkumpul Bandara International Soekarno Hatta Terminal 2F (5 jam sebelum keberangkatan) briefing dan check-in pesawat.",
      "Hari 2: Landing bandara King Abdul Aziz, Jeddah. Proses Imigrasi dan Bagasi. Jamaah Menuju Hotel Madinah by Bus dan Check In Hotel Madinah dan Istirahat.",
      "Hari 3: Qiyamulail dan sholat subuh berjamaah di Masjid Nabawi. Berziarah ke Makam Nabi Muhammad ﷺ (Raudhah : tergantung jadwal dari Muasasah). dan pengenalan sekitar Masjid Nabawi (Pemakaman Baqi, Saqifah Bani Saidah, Masjid Abu Bakar, Masjid Ghomamah, Masjid Ali).",
      "Hari 4: Qiyamulail dan sholat subuh di Masjid Nabawi. Setelah Sarapan, Pukul 07.00 Jamaah bersiap untuk City Tour Percetakan Al-Qur’an dan Madinah (Masjid Quba, Masjid Qiblatain, Jabal Uhud, Masjid Khandak dan Kebun/Pasar Kurma).",
      "Hari 5: Qiyamulail dan sholat subuh berjamaah di Masjid Nabawi dan Ziarah Wada’. Sarapan pagi dan Pukul 08.00 Jamaah diminta untuk mengeluarkan koper dari kamar masing-masing. Pelaksanaan Sholat Jum’at. Checkout hotel. Miqot Bir Ali, Jamaah Menuju Hotel Makkah by Bus dan Check In Hotel. Pelaksanaan Umroh Wajib.",
      "Hari 6: Qiyamulail di Masjidil Haram. Jamaah diberikan waktu bebas untuk memperbanyak Ibadah, seperti Tadarus Alquran, berdzikir, Itikaf dan Amalan Sunnah lainnya. Pelaksanaan Umroh pertama.",
      "Hari 7: Setelah sarapan Jamaah kemudian bersiap-siap untuk City Tour Makkah (Jabal Tsur, Arafah, Jabal Rahmah, Muzdalifah, Mina, Jabal Nur, dan tempat Miqot Ji’ronah) dan diwajibkan membawa kain ihrom untuk melaksanakan ibadah umroh kedua.",
      "Hari 8: Sarapan pagi. Pukul 07.00 City Tour Thaif (Kondisional) dan tempat Miqot Qornul Manazil diwajibkan membawa kain ihrom Pelaksanaan Umroh Ketiga.",
      "Hari 9: Qiyamulail dan sholat subuh berjamaah di Masjidil Haram Sarapan pagi dan Pukul 08.00 Jamaah diminta untuk mengeluarkan koper dari kamar masing-masing. THAWAF WADA’. Pukul 14.00 Checkout hotel. Jamaah Menuju Jeddah by Bus."
    ],
    inclusions: ["Visa Umrah & Asuransi KSA", "Tiket Pesawat PP Saudia Airlines", "Jarak Hotel Strategis", "Perlengkapan", "Pembimbing Berpengalaman", "Bus City Tour Exclusive"],
    exclusions: ["Pembuatan Passport", "Suntik Meningitis", "Transport dari Daerah ke Jakarta"]
  },
  {
    id: 3,
    title: "Umrah Plus Mesir",
    price: "Rp 38.900.000",
    priceValue: 38900000,
    month: "November",
    type: "Plus",
    duration: "12 Hari",
    flight: "Qatar Airways / Saudia Airlines (Direct)",
    hotelMadinah: "Royal Andalus / Setaraf (★4)",
    hotelMakkah: "Elaf Al Bait / Setaraf (★4)",
    hotelMesir: "Front Pyramid / Setaraf (★4)",
    hotelStars: 4,
    badge: "November 2026",
    tagline: "Padukan kesucian ibadah Umrah di Tanah Suci dengan keajaiban peradaban Islam di Bumi Para Nabi, Mesir.",
    brosurUrl: "https://wa.me/6285720988031?text=Assalamualaikum%20Ichsan%20Kamil%2C%20saya%20ingin%20meminta%20brosur%20paket%20Umrah%20Plus%20Mesir",
    highlights: ["Wisata Piramida Giza & Sphinx", "Hotel Bintang 4 Tiga Kota", "City Tour Kairo & Alexandria"],
    itinerary: [
      "Hari 1: Berkumpul di PT Ichsan Kamil pukul 05.00 WIB. Pelepasan jamaah dan menuju Bandara Soekarno-Hatta Terminal 3. Briefing perjalanan, check-in, dan boarding pesawat EgyptAir/Saudia menuju Madinah via transit.",
      "Hari 2: Tiba di Bandara Prince Mohammed bin Abdulaziz, Madinah. Proses imigrasi dan pengambilan bagasi. Menuju Hotel Royal Andalus, check-in, dan istirahat. Sholat Ashar berjamaah di Masjid Nabawi. Makan malam dan pengenalan lingkungan sekitar Masjid Nabawi.",
      "Hari 3: Qiyamullail dan sholat Subuh berjamaah di Masjid Nabawi. Sarapan pagi. Berziarah ke Makam Nabi Muhammad ﷺ (Raudhah – sesuai jadwal Muasasah). Pengenalan sekitar Masjid Nabawi: Pemakaman Baqi, Saqifah Bani Saidah, Masjid Abu Bakar, Masjid Ghomamah, Masjid Ali. Sore hari bebas beribadah.",
      "Hari 4: Qiyamullail dan sholat Subuh di Masjid Nabawi. Sarapan. Pukul 07.00 (on-time) City Tour Madinah: Percetakan Al-Qur'an, Masjid Quba (masjid pertama dalam Islam), Masjid Qiblatain, Jabal Uhud dan Makam Syuhada Uhud, Masjid Khandak, Kebun & Pasar Kurma. Sore hari bebas ibadah mandiri.",
      "Hari 5: Qiyamullail dan sholat Subuh berjamaah di Masjid Nabawi. Sarapan pagi. Ziarah Wada' (perpisahan dengan Kota Nabi). Pukul 08.00 koper dikeluarkan dari kamar. Check-out hotel Madinah. Miqat di Bir Ali (Dzulhulaifah) — niat ihram Umrah Pertama. Berangkat menuju Makkah dengan bus ber-AC.",
      "Hari 6: Tiba di Makkah dan check-in Hotel Elaf Al Bait. Pelaksanaan Umrah Pertama: Thawaf, Sa'i, dan Tahallul di Masjidil Haram. Qiyamullail dan memperbanyak ibadah di Masjidil Haram. Sarapan pagi dan istirahat.",
      "Hari 7: Qiyamullail dan memperbanyak ibadah di Masjidil Haram. Sarapan pagi. Pukul 07.00 (on-time) City Tour Makkah: Jabal Tsur, Padang Arafah, Jabal Rahmah, Muzdalifah, Mina, Jabal Nur (Gua Hira), Ji'ronah — Miqat Umrah Kedua. Pelaksanaan Umrah Kedua (wajib membawa pakaian ihram). Malam hari bebas ibadah.",
      "Hari 8: Qiyamullail dan memperbanyak ibadah di Masjidil Haram. Sarapan. Kegiatan bebas: Tadarus Al-Qur'an, dzikir, itikaf. Sore hari waktu berbelanja (Masjidil Haram Grand Floor, Abraj Mall). Malam: persiapan Umrah Ketiga (Miqat di Tan'im / Masjid Aisyah).",
      "Hari 9: Qiyamullail dan sholat Subuh berjamaah di Masjidil Haram. Sarapan. Pukul 08.00 koper dikeluarkan. THAWAF WADA'. Pukul 11.00 Check-out hotel. Transfer ke Bandara King Abdul Aziz, Jeddah. Penerbangan menuju Kairo, Mesir.",
      "Hari 10: Tiba di Bandara Internasional Cairo. Proses imigrasi dan bagasi. Penjemputan oleh pemandu wisata Mesir berbahasa Indonesia. Menuju Hotel Front Pyramid, check-in dan istirahat. Malam: Makan malam di restoran lokal sambil menikmati pemandangan Sungai Nil. Orientasi kota Kairo.",
      "Hari 11: Sarapan di hotel. Full Day City Tour Kairo (Giza & Islam): Kompleks Piramida Giza (Piramida Khufu, Khafre & Menkaure) + Sphinx (patung manusia-singa raksasa). Makan siang khas Mesir. Museum Nasional Peradaban Mesir (NMEC). Citadel Salahuddin Al-Ayyubi dan Masjid Muhammad Ali (Alabaster Mosque). Bazaar Khan el-Khalili — pusat kerajinan dan suvenir bersejarah. Makan malam dan kembali ke hotel.",
      "Hari 12: Sarapan di hotel. Wisata sehari ke Kairo Islam & Kristen: Masjid Ibn Tulun (masjid tertua di Afrika). Gereja Gantung (Hanging Church) & Old Cairo. Masjid Al-Azhar & Universitas Al-Azhar (universitas Islam tertua di dunia). Makan siang. Sore: napak tilas Bumi Para Nabi di Masjid Rabi'a Adawiyah. Makan malam di tepi Sungai Nil. Malam bebas.",
      "Hari 13: Sarapan di hotel. Day Trip ke Alexandria (3 jam dari Kairo): Benteng Qaitbay (bekas lokasi Mercusuar Alexandria, salah satu Keajaiban Dunia Kuno). Perpustakaan Alexandrina (Bibliotheca Alexandrina). Masjid Abu Abbas Al-Mursi. Pantai Mediterania & Corniche Alexandria. Makan siang seafood khas pesisir. Kembali ke Kairo. Makan malam dan persiapan kepulangan.",
      "Hari 14: Sarapan pagi di hotel. Check-out. Transfer ke Bandara Internasional Cairo untuk penerbangan kembali ke Jakarta. Tiba di Bandara Soekarno-Hatta. Perjalanan Umrah Plus Mesir selesai — membawa oleh-oleh iman dan kenangan peradaban."
    ],
    inclusions: ["Visa Umrah Resmi & Asuransi KSA", "Visa Mesir (Egypt Visa on Arrival diurus panitia)", "Tiket Pesawat PP EgyptAir/Saudia", "Hotel Bintang 5: Pullman Madinah, Elaf Al Bait & Front Pyramid", "Bus AC Eksklusif (Madinah-Makkah & di Mesir)", "Tour Leader & Mutawwif Berpengalaman", "Pemandu Wisata Lokal Mesir (berbahasa Indonesia)", "Katering 3x Sehari (Tanah Suci) + Makan siang & malam (Mesir)", "Tiket Masuk Piramida Giza, Sphinx & Museum Mesir", "Perlengkapan Umrah Lengkap (koper, ihram/mukena, dll)", "Air Zamzam 5 Liter"],
    exclusions: ["Pembuatan Passport & Suntik Meningitis", "Biaya Laundry & Kebutuhan Pribadi", "Tips Pemandu Lokal & Driver", "Kelebihan Bagasi", "Pengeluaran Pribadi Selama di Mesir"]
  },
  // {
  //   id: 4,
  //   title: "Umrah Spesial Awal Ramadhan",
  //   price: "Rp 44.500.000",
  //   priceValue: 44500000,
  //   month: "Ramadhan",
  //   type: "Premium",
  //   duration: "15 Hari",
  //   flight: "Qatar Airways / Saudia Airlines (Direct)",
  //   hotelMadinah: "Dallah Taibah Madinah (★4)",
  //   hotelMakkah: "Mövenpick Hajar Tower Makkah (★5)",
  //   hotelStars: 5,
  //   badge: "Ramadhan Spesial",
  //   tagline: "Rasakan nikmatnya ibadah puasa dan tarawih di dua Masjid Suci umat Islam.",
  //   brosurUrl: "https://wa.me/6285720988031?text=Assalamualaikum%20Ichsan%20Kamil%2C%20saya%20ingin%20meminta%20brosur%20paket%20Umrah%20Spesial%20Ramadhan%20(Rp%2044.500.000)",
  //   highlights: ["Puasa di Masjid Nabawi & Haram", "I'tikaf Ramadhan Terbimbing", "Paket 15 Hari Panjang"],
  //   itinerary: [
  //     "Hari 1: Jakarta - Madinah. Istirahat di hotel.",
  //     "Hari 2-5: Menikmati suasana awal Ramadhan di Madinah, Buka Puasa bersama di Masjid Nabawi, Shalat Tarawih.",
  //     "Hari 6: Check-out, Miqat di Bir Ali, Kereta Cepat Haramain ke Makkah, Umrah Pertama.",
  //     "Hari 7-12: Menghidupkan malam Ramadhan di Masjidil Haram, I'tikaf, Kajian Tarjih, Umrah Kedua.",
  //     "Hari 13: Ziarah Kota Makkah dan persiapan Itikaf malam 21 Ramadhan.",
  //     "Hari 14: Tawaf Wada, bertolak ke Jeddah, penerbangan kembali ke Jakarta.",
  //     "Hari 15: Tiba di Jakarta. Umrah Ramadhan Mabrur."
  //   ],
  //   inclusions: ["Visa Ramadhan Resmi", "Tiket Pesawat PP Penerbangan Premium", "Hotel Madinah Bintang 4 & Makkah Bintang 5", "Katering Sahur & Buka Puasa Khas Indonesia/Arab", "Mutawwif Berpengalaman Ramadhan", "Tiket Kereta Cepat Haramain"],
  //   exclusions: ["Passport & Vaksin", "Tips Operator Lokal", "Kebutuhan Laundry Pribadi"]
  // }
];

export default function PackageGrid({ filters }) {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [brosurPackage, setBrosurPackage] = useState(null);

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
                className={`bg-white rounded-3xl overflow-hidden shadow-lg border border-maroon/5 transition-all duration-300 flex flex-col group relative ${pkg.isSoldOut
                  ? 'opacity-80 filter saturate-[0.8] hover:shadow-lg'
                  : 'hover:border-gold/30 hover:shadow-2xl'
                  }`}
              >
                {/* Header Card (Badge & Durasi) */}
                <div className="relative p-6 bg-maroon text-white overflow-hidden flex-shrink-0">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full transform translate-x-12 -translate-y-12 transition-transform duration-500 group-hover:scale-110" />

                  {/* Badge */}
                  {pkg.isSoldOut ? (
                    <span className="absolute top-6 right-6 inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md z-10 animate-pulse">
                      SOLD OUT
                    </span>
                  ) : (
                    <span className="absolute top-6 right-6 inline-block px-3 py-1 bg-gold text-maroon text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                      {pkg.badge}
                    </span>
                  )}

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
                    {pkg.hotelMesir && (
                      <div className="flex items-start text-sm text-charcoal/80">
                        <Globe className="w-4 h-4 text-gold mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="block font-semibold">Mesir:</span>
                          <span className="text-xs">{pkg.hotelMesir}</span>
                        </div>
                      </div>
                    )}
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
                  {pkg.isSoldOut ? (
                    <button
                      disabled
                      className="flex-1 py-3 px-4 rounded-xl bg-charcoal/15 text-charcoal/40 font-bold text-center text-sm cursor-not-allowed"
                    >
                      Habis Terjual
                    </button>
                  ) : (
                    <a
                      href={getWhatsAppLink(pkg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-4 rounded-xl bg-gold hover:bg-gold/90 text-maroon font-bold text-center text-sm transition-all duration-200"
                    >
                      Pesan Kuota
                    </a>
                  )}
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
              <div className={`grid gap-4 bg-cream/30 p-4 rounded-2xl border border-gold/10 ${selectedPackage.hotelMesir ? 'grid-cols-1 sm:grid-cols-3 md:grid-cols-5' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4'}`}>
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
                {selectedPackage.hotelMesir && (
                  <div className="text-center sm:text-left">
                    <span className="text-xs text-charcoal/60 uppercase block font-semibold">Hotel Mesir</span>
                    <span className="text-sm font-bold text-maroon">{selectedPackage.hotelMesir}</span>
                  </div>
                )}
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
                  onClick={() => setBrosurPackage(selectedPackage)}
                  className="flex-1 sm:flex-none px-6 py-3 bg-gold text-maroon font-bold text-sm rounded-xl hover:bg-gold/90 shadow-md transition-all text-center"
                >
                  Brosur Digital
                </button>
                <button
                  onClick={() => setSelectedPackage(null)}
                  className="flex-1 sm:flex-none px-6 py-3 border border-charcoal/30 rounded-xl text-charcoal font-semibold text-sm hover:bg-charcoal/5 transition-all"
                >
                  Tutup
                </button>
                {selectedPackage.isSoldOut ? (
                  <button
                    disabled
                    className="flex-1 sm:flex-none px-8 py-3 bg-charcoal/15 text-charcoal/40 font-semibold text-sm rounded-xl cursor-not-allowed text-center"
                  >
                    Kuota Penuh
                  </button>
                ) : (
                  <a
                    href={getWhatsAppLink(selectedPackage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none px-8 py-3 bg-maroon text-white font-semibold text-sm rounded-xl hover:bg-maroon/90 shadow-md transition-all text-center flex items-center justify-center gap-2"
                  >
                    Pesan via WhatsApp
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─── Brosur Digital Modal ─── */}
      {brosurPackage && (
        <BrosurModal pkg={brosurPackage} onClose={() => setBrosurPackage(null)} getWhatsAppLink={getWhatsAppLink} />
      )}
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   BROSUR DIGITAL MODAL — Tampilan Brosur Image
───────────────────────────────────────────────────────────────*/

// Mapping bulan ke file brosur yang tersedia di /public
const BROSUR_MAP = {
  'Agustus': '/BrosurAgu26.png',
  'Oktober': '/BrosurOct26.png',
  'November': '/BrosurNov26.png',
};

function BrosurModal({ pkg, onClose, getWhatsAppLink }) {
  const brosurSrc = BROSUR_MAP[pkg.month] ?? '/BrosurOct26.png';

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-slide-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl flex flex-col items-center"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all shadow-md focus:outline-none mb-2"
          aria-label="Tutup Brosur"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Brochure Image */}
        <div className="w-full overflow-hidden rounded-2xl border border-gold/30 shadow-2xl bg-charcoal">
          <img
            src={brosurSrc}
            alt={`Brosur Digital Ichsan Kamil - ${pkg.title}`}
            className="w-full max-h-[75vh] object-contain mx-auto"
          />
        </div>

        {/* Action Button */}
        <div className="w-full mt-4 flex gap-4">
          <a
            href={getWhatsAppLink(pkg)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-6 bg-gold hover:bg-yellow-400 text-maroon font-black text-sm rounded-xl text-center shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            Tanyakan Paket Ini via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
