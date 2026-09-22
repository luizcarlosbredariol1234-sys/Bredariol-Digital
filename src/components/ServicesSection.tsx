import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Zap, 
  Building2, 
  ShoppingBag, 
  CalendarCheck, 
  Sparkles, 
  SearchCheck, 
  Check, 
  Clock, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { SERVICES_LIST, AGENCY_INFO } from '../data/agencyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-6 h-6 text-purple-400" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-purple-400" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-purple-400" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-6 h-6 text-purple-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-purple-400" />;
      case 'SearchCheck':
        return <SearchCheck className="w-6 h-6 text-purple-400" />;
      default:
        return <Zap className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <section id="servicos" className="py-24 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-fuchsia-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/70 border border-purple-700/40 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Nossos Serviços</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Criação de Sites em geral com <span className="text-gradient-vibrant">entrega no mesmo dia</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            Soluções completas sob medida para fortalecer sua marca, captar leads diários e alavancar o faturamento da sua empresa.
          </motion.p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_LIST.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative rounded-2xl p-1 bg-gradient-to-b from-purple-800/25 via-purple-950/15 to-transparent hover:from-purple-600/40 hover:via-purple-800/30 transition-all duration-300 flex flex-col group"
            >
              <div className="relative rounded-[15px] bg-[#0b0614]/90 backdrop-blur-xl border border-purple-900/30 group-hover:border-purple-600/50 p-6 sm:p-7 flex flex-col h-full transition-all duration-300 shadow-xl overflow-hidden">
                
                {/* Glow on hover */}
                <div className="absolute -right-16 -top-16 w-32 h-32 bg-purple-600/10 group-hover:bg-purple-600/25 rounded-full blur-2xl transition-all duration-300 pointer-events-none" />

                {/* Top Badge: Delivery Time */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-800/50 flex items-center justify-center shadow-[0_0_15px_rgba(147,51,234,0.2)] group-hover:scale-105 group-hover:border-purple-500 transition-all">
                    {getIcon(service.iconName)}
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold text-purple-300 bg-purple-950/60 border border-purple-800/40">
                    <Clock className="w-3 h-3 text-purple-400" />
                    {service.deliveryEstimate}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {service.shortDesc}
                </p>

                {/* Features List */}
                <div className="space-y-2.5 pt-4 border-t border-purple-950/60 mb-6 flex-grow">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-purple-400">
                    O que está incluso:
                  </p>
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-purple-950 border border-purple-700/60 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-purple-300" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Action CTA for this service */}
                <button
                  onClick={() => onSelectService(service)}
                  className="w-full py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm text-white bg-purple-950/80 hover:bg-purple-700 border border-purple-800/50 hover:border-purple-500 transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.35)]"
                >
                  <span>Solicitar este serviço</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Guarantee Box */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-purple-950/40 via-purple-900/30 to-purple-950/40 border border-purple-700/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-purple-600/30 border border-purple-500/50 flex items-center justify-center shrink-0 text-purple-300 shadow-[0_0_20px_rgba(189,0,255,0.3)]">
              <ShieldCheck className="w-8 h-8 text-purple-400" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Garantia de Qualidade & Entrega no Mesmo Dia</h4>
              <p className="text-sm text-slate-300 max-w-2xl">
                Seu projeto é desenvolvido com as tecnologias mais modernas do mercado global, sem templates genéricos ou lentos. Seu site no ar hoje mesmo ou seu dinheiro de volta.
              </p>
            </div>
          </div>

          <a
            href={AGENCY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3.5 rounded-full font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.35)] flex items-center gap-2 transition-all"
          >
            <span>Tirar dúvidas pelo WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
