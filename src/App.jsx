import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PackageGrid from './components/PackageGrid';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';

export default function App() {
  const [filters, setFilters] = useState({
    month: 'all',
    type: 'all',
    priceRange: 'all'
  });

  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      q: "Bagaimana cara pendaftaran paket Umrah di Ichsan Kamil?",
      a: "Pendaftaran dapat dilakukan secara online melalui tombol WhatsApp di setiap paket atau langsung datang ke kantor kami. Anda perlu menyiapkan uang muka (DP) sebesar Rp 5.000.000, foto copy KTP, KK, dan Passport yang masih aktif minimal 7 bulan sebelum keberangkatan."
    },
    {
      q: "Apakah harga yang tercantum sudah termasuk visa dan perlengkapan?",
      a: "Ya, seluruh paket kami (Regular, Premium, dan VIP) sudah termasuk visa umrah resmi, asuransi perjalanan KSA, katering makan 3x sehari, bimbingan mutawwif, air zamzam (bila diizinkan regulasi bandara), serta satu set lengkap perlengkapan umrah eksklusif (koper, kain ihram/mukena, bahan seragam, buku panduan, dll)."
    },
    {
      q: "Bagaimana jika visa umrah tidak disetujui/ditolak?",
      a: "Sebagai PPIU berizin resmi, kami menjamin kepengurusan visa diproses secara profesional melalui sistem provider resmi. Jika terjadi penolakan visa karena regulasi tak terduga, kami akan membantu menjadwalkan ulang keberangkatan Anda atau melakukan refund sesuai ketentuan polis asuransi perjalanan."
    },
    {
      q: "Apakah ada pembimbing ibadah yang mendampingi selama di Tanah Suci?",
      a: "Setiap rombongan (bus) akan didampingi oleh 1 orang Tour Leader berpengalaman dari Jakarta dan 1 orang Mutawwif (pembimbing lokal) lulusan universitas Timur Tengah yang fasih bahasa Arab dan memahami fiqih umrah sesuai Sunnah."
    }
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-cream selection:bg-maroon selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero filters={filters} setFilters={setFilters} />

      {/* Features / Benefits */}
      <Features />

      {/* Package Grid Section */}
      <PackageGrid filters={filters} />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-gold block mb-2">TANYA JAWAB</span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-maroon">
              Pertanyaan yang Sering Diajukan (FAQ)
            </h2>
            <div className="h-1 w-20 bg-gold mx-auto mt-4 rounded-full" />
          </div>

          {/* Accordion list */}
          <div className="space-y-4 text-left">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-cream/40 rounded-2xl border border-gold/15 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-maroon/15"
                >
                  <span className="font-serif font-bold text-sm sm:text-base text-maroon flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-gold flex-shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-maroon/60 transition-transform duration-300 flex-shrink-0 ${activeFaq === idx ? 'transform rotate-180 text-gold' : ''
                      }`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${activeFaq === idx ? 'max-h-[300px] border-t border-gold/10' : 'max-h-0'
                    }`}
                >
                  <p className="p-6 text-sm text-charcoal/80 leading-relaxed font-light bg-white/50">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Banner inside FAQ */}
          <div className="mt-16 bg-cream border border-gold/30 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <h4 className="font-serif text-lg font-bold text-maroon">Punya Pertanyaan Lain?</h4>
              <p className="text-xs sm:text-sm text-charcoal/70 mt-1">Staf CS kami siap melayani dan menjawab konsultasi Umrah Anda 24/7.</p>
            </div>
            <a
              href="https://wa.me/6285720988031?text=Assalamualaikum,%20saya%20ingin%20tanya%20mengenai%20syarat%20pendaftaran%20Umrah"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-maroon text-white text-sm font-bold rounded-xl hover:bg-maroon/90 shadow-md transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-gold" />
              Chat CS (WhatsApp)
            </a>
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
