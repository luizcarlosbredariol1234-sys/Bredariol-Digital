import React from 'react';
import { motion } from 'motion/react';

interface ProcessSectionProps {
  onOpenContact: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenContact }) => {
  const steps = [
    {
      num: "01",
      name: "DISCOVER",
      desc: "Entendemos seu negócio, público e objetivos."
    },
    {
      num: "02",
      name: "DEFINE",
      desc: "Definimos estratégia, estrutura e direção."
    },
    {
      num: "03",
      name: "DESIGN",
      desc: "Transformamos estratégia em uma experiência visual."
    },
    {
      num: "04",
      name: "DEVELOP",
      desc: "Construímos a solução com alta performance e precisão."
    },
    {
      num: "05",
      name: "DELIVER",
      desc: "Publicamos seu site e colocamos sua marca no ar no mesmo dia."
    }
  ];

  return (
    <section id="processo" className="py-24 sm:py-32 bg-gradient-to-b from-black via-[#090216] to-black text-white relative overflow-hidden border-t border-purple-900/30">
      
      {/* Glow roxo de fundo atmosférico atrás dos números gigantes */}
      <div 
        className="absolute -left-20 top-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full blur-[160px] opacity-45 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(147,51,234,0.4) 0%, rgba(126,34,206,0.2) 45%, rgba(88,28,135,0.1) 70%, transparent 85%)'
        }}
      />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10 text-left">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs font-mono tracking-widest text-purple-400 uppercase mb-4">
            ● 03 / PROCESSO
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight font-['Space_Grotesk'] text-white">
            Como construímos sua presença digital.
          </h2>
        </motion.div>

        {/* Steps with Giant Outlined Numbers matching screenshot 5 */}
        <div className="border-t border-white/10 divide-y divide-white/10">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="py-10 sm:py-14 flex flex-col sm:flex-row sm:items-baseline justify-between gap-6 group"
            >
              {/* Giant Outline Number (matching screenshot 5: e.g. 01, 02, 03) */}
              <div className="text-7xl sm:text-8xl md:text-9xl font-black font-['Space_Grotesk'] tracking-tighter text-stroke-purple select-none shrink-0 group-hover:scale-105 transition-transform duration-300">
                {step.num}
              </div>

              {/* Step Title & Description */}
              <div className="sm:max-w-md w-full">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-4 h-[1.5px] bg-purple-500" />
                  <h3 className="text-sm font-mono font-bold tracking-widest uppercase text-white group-hover:text-purple-300 transition-colors">
                    {step.name}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
