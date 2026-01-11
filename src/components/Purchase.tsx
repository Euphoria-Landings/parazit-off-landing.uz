"use client";
import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Zap, Droplets } from "lucide-react";

export default function Purchase() {
  const cards = [
    {
      title: "TO'LIQ DETOKS",
      desc: "Organizmni parazitlar, toksinlar va zararli chiqindilardan tabiiy va xavfsiz tozalashga yordam beradi.",
      icon: <ShieldCheck className="w-12 h-12 text-[#8BC34A]" />,
    },
    {
      title: "IMMUNITET TIKLANISHI",
      desc: "Ichak florasini yaxshilaydi va organizmning himoya qobiliyatini oshirib, qayta zararlanishdan himoya qiladi.",
      icon: <Zap className="w-12 h-12 text-[#004D40]" />,
    },
    {
      title: "100% TABIIY EKSTRAKTLAR",
      desc: "Hech qanday kimyoviy qo'shimchalarsiz. Artemisia, Sezam va nodir efir moylarining kuchli kombinatsiyasi.",
      icon: <Leaf className="w-12 h-12 text-[#8BC34A]" />,
    },
  ];

  return (
    <section className="relative w-full py-5 bg-gradient-to-b from-white via-[#F1F8E9] to-white overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4 relative z-10">
        {/* TEPA QISMDAGI 3 TA KARTA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white/90 backdrop-blur-md rounded-[45px] p-10 shadow-[0_15px_40px_rgba(0,77,64,0.05)] border border-green-50 hover:border-[#8BC34A]/30 hover:shadow-[0_30px_60px_rgba(0,77,64,0.1)] transition-all duration-500 group"
            >
              <div className="mb-8 transform group-hover:scale-110 group-hover:rotate-[10deg] transition-transform duration-500">
                {card.icon}
              </div>
              <h3 className="text-[#004D40] font-[1000] text-[14px] mb-4 tracking-[2px] uppercase">
                {card.title}
              </h3>
              <p className="text-slate-500 text-[13px] leading-relaxed font-bold">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* LOGO QISMI: ParazitOFF (KATTAROQ VERSIYADA) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center text-center space-y-8 mb-20"
        >
          <div className="flex items-center select-none uppercase">
            <span className="text-5xl md:text-[65px] font-[1000] tracking-tighter text-[#004D40] leading-none">
              Parazit
            </span>

            <div className="flex items-center justify-center mx-[-2px] md:mx-[4px]">
              <span className="text-5xl md:text-[65] font-[1000] italic tracking-tighter text-[#8BC34A] leading-none">
                OFF
              </span>
            </div>

            <div className="flex items-center justify-center ml-2 md:ml-4">
              <Leaf
                strokeWidth={3}
                className="w-12 h-12 md:w-[50px] md:h-[90px] text-[#8BC34A] transform rotate-[15deg]"
              />
            </div>
          </div>

          <div className="h-[4px] w-32 bg-gradient-to-r from-transparent via-[#8BC34A] to-transparent rounded-full" />

          <p className="text-[#004D40]/40 font-black tracking-[8px] uppercase text-[10px] md:text-[14px] mt-4">
            ANTIPARAZITAR TABIIY MAJMUA
          </p>
        </motion.div>

        {/* O'YNAB TURUVCHI TOMCHILAR (DROPS) */}
        <div className="relative h-32 flex justify-center items-center gap-16">
          {[
            {
              color: "text-[#004D40]",
              size: "w-10 h-10",
              delay: 0,
            },
            {
              color: "text-[#8BC34A]",
              size: "w-14 h-14",
              delay: 0.5,
            },
            {
              color: "text-green-200",
              size: "w-12 h-12",
              delay: 1,
            },
          ].map((drop, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -40, 0],
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.9, 0.4],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: drop.delay,
                ease: "easeInOut",
              }}
              className={`${drop.color} ${drop.size} flex items-center justify-center`}
            >
              <Droplets fill="currentColor" className="w-full h-full" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Orqa fondagi dekorativ elementlar */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-30">
        <div className="absolute -top-[15%] -left-[10%] w-[50%] h-[50%] bg-[#8BC34A]/10 rounded-full blur-[150px]" />
        <div className="absolute -bottom-[15%] -right-[10%] w-[50%] h-[50%] bg-[#004D40]/5 rounded-full blur-[150px]" />
      </div>
    </section>
  );
}
