"use client";
import Image from "next/image";
import { Leaf, Droplets, CheckCircle, FlaskConical } from "lucide-react";

export default function Composition() {
  const mainFeatures = {
    benefits: [
      "ORGANIZMNI PARAZITLARDAN TO'LIQ TOZALAYDI",
      "TOKSINLAR VA CHIQINDILARNI CHIQARADI",
      "IMMUNITETNI QAYTA TIKLAYDI",
    ],
    components: [
      "ARTEMISIA (SHUVOQ) EFIR MOYI",
      "CINA BERG TABIIY EKSTRAKTI",
      "100% TABIIY SEZAM MOYI",
    ],
  };

  const formulaData = [
    { name: "ARTEMISIA", desc: "25% KONTSENTRAT" },
    { name: "CINA BERG", desc: "75% EKSTRAKT" },
    { name: "SEZAM", desc: "100% TABIIY MOY" },
    { name: "FORMULA", desc: "TOZALASH KUCHI" },
  ];

  return (
    <section
      className="w-full py-5 bg-[#F8FAF8] overflow-hidden"
      id="composition"
    >
      <div className="max-w-[1100px] mx-auto px-4">
        {/* Sarlavha - ParazitOff uslubida */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FlaskConical className="text-[#8BC34A] w-6 h-6" />
            <span className="text-[#004D40] font-black text-xs uppercase tracking-[4px]">
              Labaratoriya tekshiruvi
            </span>
          </div>
          <h2 className="text-[#004D40] text-3xl md:text-5xl font-[1000] italic leading-tight uppercase tracking-tighter">
            TABIIY VA KUCHLI
            <span className="text-[#8BC34A]"> TARKIB</span>
          </h2>
          <p className="text-slate-500 font-bold mt-4 uppercase text-[10px] md:text-xs tracking-[2px] max-w-2xl mx-auto leading-relaxed">
            ParazitOff — Bu faqat tabiiy komponentlardan tashkil topgan majmua
            bo'lib, unda har bir tomchi organizmning ichki tozaligi uchun xizmat
            qiladi.
          </p>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* 1-Karta: Ta'sir doirasi */}
          <div className="w-full lg:w-[380px] bg-white rounded-[40px] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,77,64,0.05)] border border-green-50 relative z-10 transition-all duration-500 hover:-translate-y-2 group">
            <div className="mb-8">
              <h3 className="text-[#8BC34A] text-2xl font-black uppercase italic group-hover:tracking-widest transition-all">
                ASOSIY
              </h3>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">
                FOYDALI XUSUSIYATLARI
              </p>
              <div className="h-1 w-12 bg-[#004D40] mt-2 rounded-full" />
            </div>
            <ul className="space-y-6">
              {mainFeatures.benefits.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-[#8BC34A]" />
                  </div>
                  <p className="text-[#004D40] text-[13px] font-black leading-snug uppercase">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* MARKAZIY QISM: Vizual element */}
          <div className="flex flex-col items-center gap-10 z-20">
            <div className="w-56 h-56 md:w-72 md:h-72 relative group">
              {/* Orqa fondagi aylanuvchi yashil nur */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#8BC34A]/20 to-transparent rounded-full animate-spin-slow" />

              <div className="absolute inset-4 bg-white rounded-full shadow-2xl flex items-center justify-center p-4 border-[10px] border-slate-50 relative overflow-hidden">
                <Image
                  src="/parazitoff-drops.png" // Bu yerda tomchi yoki mahsulot rasmi
                  alt="ParazitOff Formula"
                  fill
                  className="object-contain p-6 group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-[420px]">
              {formulaData.map((m, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-[25px] border border-green-50 shadow-sm text-center hover:shadow-md transition-shadow group/item"
                >
                  <h4 className="text-[#8BC34A] font-black text-[11px] uppercase mb-1 tracking-wider group-hover/item:text-[#004D40] transition-colors">
                    {m.name}
                  </h4>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 2-Karta: Komponentlar */}
          <div className="w-full lg:w-[380px] bg-[#004D40] rounded-[40px] p-8 md:p-10 shadow-2xl shadow-green-900/20 relative z-10 transition-all duration-500 hover:-translate-y-2 group">
            <div className="mb-8">
              <h3 className="text-[#8BC34A] text-2xl font-black uppercase italic">
                KOMPONENTLAR
              </h3>
              <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest mt-1 leading-relaxed">
                EFIR MOYLARI VA O'SIMLIK EKSTRAKTLARI MAJMUASI
              </p>
              <div className="h-1 w-12 bg-[#8BC34A] mt-2 rounded-full" />
            </div>
            <ul className="space-y-6">
              {mainFeatures.components.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Leaf className="w-3 h-3 text-[#8BC34A]" />
                  </div>
                  <p className="text-white text-[13px] font-black leading-snug uppercase italic">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
