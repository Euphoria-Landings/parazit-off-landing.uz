"use client";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
import { Leaf, ShieldCheck, Droplets } from "lucide-react";

const OrderModal = dynamic(() => import("./OrderModal"), { ssr: false });

export default function ParazitOffIntro() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-[#F8FAF8] mt-[70px] md:mt-[100px] pb-12 md:pb-20">
      {/* Orqa fondagi yashil dekorativ elementlar */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-green-50 to-transparent opacity-80 z-0" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-100/50 rounded-full blur-3xl z-0" />

      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* --- CHAP TOMON: MATNLAR --- */}
          <div className="w-full lg:w-[55%] flex flex-col items-start text-left space-y-6 md:space-y-8">
            {/* Kichik sarlavha */}
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-green-100">
              <ShieldCheck className="text-[#004D40] w-4 h-4 md:w-5 md:h-5" />
              <span className="text-[#004D40] font-black text-[9px] md:text-[11px] uppercase tracking-[2px]">
                O'zbekistonda sertifikatlangan
              </span>
            </div>

            {/* Asosiy Sarlavha */}
            <div className="space-y-2">
              <h1 className="flex items-center text-4xl md:text-[65px] font-[1000] tracking-tighter leading-none select-none uppercase">
                <span className="text-[#004D40]">Parazit</span>
                <span className="text-[#8BC34A] italic ml-1">OFF</span>
                <Leaf
                  className="text-[#8BC34A] ml-2 w-8 h-8 md:w-14 md:h-14"
                  fill="currentColor"
                />
              </h1>
              <h2 className="text-[22px] md:text-[38px] font-extrabold leading-tight text-slate-700 tracking-tight">
                Gelmintlarga qarshi <br className="hidden md:block" />
                <span className="text-[#004D40]">innovatsion yechim!</span>
              </h2>
            </div>

            {/* Tavsif */}
            <div className="flex items-start gap-4 max-w-[500px] bg-white/50 p-5 rounded-[25px] border-l-4 border-[#8BC34A] backdrop-blur-sm">
              <p className="text-slate-600 text-[14px] md:text-[16px] leading-relaxed font-medium">
                <span className="font-bold text-[#004D40]">
                  100% tabiiy efir moylari
                </span>{" "}
                — organizmni parazitlardan tozalashda yuqori samaradorlik va
                xavfsiz yondashuv. Artemisia (shuvoq) kuchi bilan sog'ligingizni
                tiklang.
              </p>
            </div>

            {/* Xususiyatlar mini-grid */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-[450px]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-[#004D40]">
                  <Droplets size={20} />
                </div>
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                  10ml hajmdagi tomchi
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-[#004D40]">
                  <Leaf size={20} />
                </div>
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                  GMO va toksinsiz
                </span>
              </div>
            </div>

            {/* Tugmalar */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#004D40] text-white px-10 py-5 rounded-[22px] font-black text-[12px] md:text-[13px] uppercase tracking-[3px] hover:bg-green-800 shadow-xl shadow-green-900/20 transition-all active:scale-95 text-center"
              >
                BUYURTMA BERISH
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white border-2 border-[#004D40] text-[#004D40] px-10 py-5 rounded-[22px] font-black text-[12px] md:text-[13px] uppercase tracking-[3px] hover:bg-green-50 transition-all active:scale-95 text-center"
              >
                MUTAXASSIS BILAN BOG'LANISH
              </button>
            </div>
          </div>

          {/* --- O'NG TOMON: MAHSULOT VIZUALI --- */}
          <div className="w-full lg:w-[45%] relative mt-12 lg:mt-0">
            <div className="relative w-full aspect-square md:aspect-[4/5] max-h-[600px] flex justify-center items-center">
              {/* Markaziy doira (aura) */}
              <div className="absolute w-[80%] h-[80%] bg-[#8BC34A]/10 rounded-full blur-[80px] animate-pulse" />

              {/* Mahsulot qutisi va flakoni */}
              <div className="relative w-full h-full animate-float">
                <Image
                  src="/parazitoff-main.png" // ParazitOff qutisi va idishi rasmi
                  alt="ParazitOff Gelmintlardan"
                  fill
                  className="object-contain drop-shadow-[0_35px_60px_rgba(0,77,64,0.15)]"
                  priority
                />
              </div>

              {/* Badge (100% Tabiiy) */}
              <div className="absolute top-10 right-4 md:right-10 z-20 w-24 h-24 md:w-32 md:h-32 rounded-full bg-white border-[6px] border-[#8BC34A] shadow-2xl flex flex-col items-center justify-center rotate-12 animate-bounce-slow">
                <span className="text-[9px] md:text-[11px] font-black uppercase text-[#004D40]">
                  Faqat
                </span>
                <span className="text-2xl md:text-3xl font-[1000] text-[#8BC34A] leading-none my-1">
                  100%
                </span>
                <span className="text-[9px] md:text-[11px] font-black uppercase text-[#004D40]">
                  Tabiiy
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dekorativ barglar */}
      <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none translate-x-1/4 translate-y-1/4">
        <Leaf size={400} fill="#004D40" />
      </div>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
