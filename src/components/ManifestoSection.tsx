import React from 'react';
import { motion } from 'motion/react';
import { PurpleBackgroundSparkles } from './PurpleBackgroundSparkles';

export const ManifestoSection: React.FC = () => {
  const points = [
    "Atrair atenção.",
    "Construir confiança.",
    "Comunicar valor.",
    "Criar conexões."
  ];

  return (
    <section id="manifesto" className="py-24 sm:py-32 bg-gradient-to-b from-black via-[#090317] to-black text-white relative overflow-hidden border-t border-purple-900/30">
      
      {/* Brilhos e atmosfera roxa de fundo */}
      <PurpleBackgroundSparkles position="right" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10 text-left">
        
        {/* Section Index Tag matching screenshot 3: ● 01 / MANIFESTO */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono tracking-widest text-purple-400 uppercase mb-8 flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
          <span>01 / MANIFESTO</span>
        </motion.div>

        {/* Main Heading matching screenshot 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-3xl"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] font-['Space_Grotesk'] text-white">
            Seu site não precisa apenas existir.{' '}
            <span className="text-slate-500 block mt-1">
              Ele precisa fazer alguma coisa.
            </span>
          </h2>
        </motion.div>

        {/* 4 Points in 2x2 Grid with Purple Bullets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12 max-w-2xl pt-2">
          {points.map((point, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20, x: -10 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/[0.03] transition-colors"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.9)] shrink-0" />
              <span className="text-base sm:text-lg text-slate-200 font-medium">
                {point}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
