import React from 'react';
import { ShieldCheck, Award, Building2, PlaneTakeoff, HeartHandshake, CheckCircle } from 'lucide-react';

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Izin Kemenag Resmi",
    desc: "Ichsan Kamil beroperasi di bawah izin resmi Penyelenggara Perjalanan Ibadah Umrah (PPIU) Kementerian Agama RI."
  },
  {
    icon: Award,
    title: "Mutawwif Berpengalaman",
    desc: "Didampingi oleh pembimbing ibadah dan mutawwif yang kompeten, berakhlak mulia, serta fasih bahasa Arab sesuai Sunnah."
  },
  {
    icon: Building2,
    title: "Hotel Bintang & Strategis",
    desc: "Akomodasi hotel berkualitas bintang 4 & 5 yang terletak dekat atau langsung berada di pelataran Masjidil Haram & Nabawi."
  },
  {
    icon: PlaneTakeoff,
    title: "Penerbangan Direct",
    desc: "Menggunakan maskapai premium terpercaya seperti Saudi Arabian Airlines dengan rute penerbangan langsung tanpa transit."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 text-left space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-gold block">KEUNGGULAN KAMI</span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-maroon leading-tight">
              Ibadah Tenang, Fasilitas Terjamin & Pelayanan Sepenuh Hati
            </h2>
            <div className="h-1 w-20 bg-gold rounded-full" />
          </div>
          <div className="lg:col-span-6 text-left lg:border-l lg:border-maroon/15 lg:pl-8">
            <p className="text-charcoal/80 text-sm sm:text-base leading-relaxed">
              Kami percaya bahwa perjalanan umrah adalah perjalanan spiritual yang suci. Oleh karena itu, kami berkomitmen menyajikan standar layanan terbaik mulai dari keberangkatan hingga kepulangan Anda ke tanah air.
            </p>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feat, index) => {
            const IconComponent = feat.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl border border-gold/15 hover:border-maroon/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col text-left group transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-maroon/5 flex items-center justify-center text-maroon mb-6 group-hover:bg-maroon group-hover:text-gold transition-colors duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-maroon mb-3 group-hover:text-maroon/90">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
