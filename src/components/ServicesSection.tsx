import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const items = [
    {
      num: "01 / WEB",
      title: "Websites",
      desc: "Sites institucionais, páginas comerciais e experiências digitais personalizadas.",
      serviceQuery: "Site Institucional"
    },
    {
      num: "02 / LANDING",
      title: "Landing Pages",
      desc: "Páginas desenvolvidas para apresentar, envolver e converter.",
      serviceQuery: "Landing Page de Alta Conversão"
    },
    {
      num: "03 / DESIGN",
      title: "UI / UX",
      desc: "Interfaces pensadas para serem bonitas, intuitivas e funcionais.",
      serviceQuery: "UI / UX Design"
    },
    {
      num: "04 / CODE",
      title: "Desenvolvimento",
      desc: "Engenharia de ponta, nota 100 no Google PageSpeed e entrega rigorosa no mesmo dia.",
      serviceQuery: "Desenvolvimento Web de Alta Performance"
    }
  ];

  const handleExplore = (serviceQuery: string) => {
    const msg = encodeURIComponent(`Olá! Gostaria de explorar a criação de ${serviceQuery} com a Bredariol Digital.`);
    window.open(`https://wa.me/55${AGENCY_INFO.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <section id="servicos" className="py-24 sm:py-32 bg-gradient-to-b from-black via-[#0b031d] to-black text-white relative overflow-hidden border-t border-purple-900/30">
      
      {/* Glow roxo de fundo atmosférico */}
      <div 
        className="absolute -right-20 top-1/3 w-[600px] h-[600px] rounded-full blur-[150px] opacity-45 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(147,51,234,0.4) 0%, rgba(126,34,206,0.22) 45%, rgba(88,28,135,0.1) 70%, transparent 85%)'
        }}
      />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10 text-left">
        
        {/* Header matching screenshot 3 & 4 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-['Space_Grotesk'] text-white mb-2">
            O que criamos
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Tecnologia, design e estratégia trabalhando juntos.
          </p>
        </motion.div>

        {/* Editorial Services List matching screenshot 4 */}
        <div className="border-t border-white/10 divide-y divide-white/10">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="py-10 sm:py-12 group flex flex-col justify-between"
            >
              {/* Category Index Tag (e.g. 01 / WEB) */}
              <p className="text-xs font-mono tracking-widest text-purple-400 uppercase mb-3">
                {item.num}
              </p>

              {/* Title */}
              <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3 font-['Space_Grotesk'] group-hover:text-purple-300 transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed mb-6">
                {item.desc}
              </p>

              {/* EXPLORE → button */}
              <div>
                <button
                  onClick={() => handleExplore(item.serviceQuery)}
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-white group-hover:text-purple-400 transition-colors cursor-pointer"
                >
                  <span>EXPLORE</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
