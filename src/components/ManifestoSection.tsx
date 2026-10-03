import React from 'react';
import { motion } from 'motion/react';

export const ManifestoSection: React.FC = () => {
  const points = [
    "Atrair atenção.",
    "Construir confiança.",
    "Comunicar valor.",
    "Criar conexões."
  ];

  return (
    <section id="manifesto" className="py-24 sm:py-32 bg-gradient-to-b from-black via-[#090317] to-black text-white relative overflow-hidden border-t border-purple-900/30">
      
      {/* Glow roxo atmosférico de fundo */}
      <div 
        className="absolute -right-24 top-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full blur-[140px] opacity-45 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(147,51,234,0.4) 0%, rgba(126,34,206,0.22) 45%, rgba(88,28,135,0.1) 70%, transparent 85%)'
        }}
      />

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12 max-w-2xl pt-2"
        >
          {points.map((point, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.9)] shrink-0" />
              <span className="text-base sm:text-lg text-slate-300 font-medium">
                {point}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
