import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle, 
  Clock, 
  ShieldCheck, 
  Target, 
  Zap, 
  Sparkles, 
  Globe2, 
  TrendingUp,
  Award
} from 'lucide-react';
import { BredariolLogo } from './BredariolLogo';
import { AGENCY_INFO, WHY_CHOOSE_US } from '../data/agencyData';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden bg-[#06030c]/90 border-t border-b border-purple-950/40">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-purple-700/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-800/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/70 border border-purple-700/40 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Sobre a Bredariol Digital</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Fortalecemos a presença da sua empresa no digital com <span className="text-gradient-vibrant">sites de alto padrão</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            Acreditamos que todo negócio de qualidade merece uma vitrine digital à altura da sua excelência.
          </motion.p>
        </div>

        {/* Narrative & Authority Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Emblem & Visual Statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl p-1 bg-gradient-to-br from-purple-500/30 via-purple-900/20 to-purple-950/50">
              <div className="relative rounded-[22px] bg-black/90 p-8 sm:p-10 border border-purple-800/40 flex flex-col items-center text-center overflow-hidden">
                
                {/* Visual watermark logo */}
                <div className="w-full flex justify-center py-4">
                  <BredariolLogo variant="full" size="md" withGlow={true} />
                </div>

                <div className="mt-6 pt-6 border-t border-purple-900/40 w-full text-left">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-300">
                      <Award className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Compromisso com o Cliente</h4>
                      <p className="text-xs text-purple-300">Padrão Ouro de Entrega</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    "Nosso compromisso não termina com o site no ar; trabalhamos para que ele seja uma ferramenta real de geração de receita contínua."
                  </p>
                </div>

                {/* Floating badge for Same-day delivery */}
                <div className="mt-6 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-purple-900/60 to-fuchsia-950/60 border border-purple-600/50 flex items-center justify-center gap-2 text-xs font-bold text-white shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                  <Clock className="w-4 h-4 text-purple-300 animate-pulse" />
                  <span>Diferencial: Entregamos no mesmo dia</span>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Right Column: Mission and Why choose us */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Primary About Statement from prompt */}
            <div className="p-6 sm:p-8 rounded-2xl bg-purple-950/20 border border-purple-800/30 backdrop-blur-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
                <Target className="w-6 h-6 text-purple-400" />
                <span>Nossa Missão e Propósito</span>
              </h3>
              
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
                A <strong className="text-white">Bredariol Digital</strong> é especializada na criação de sites modernos, profissionais e responsivos para empresas que querem fortalecer sua presença no digital.
              </p>
              
              <p className="text-slate-300 text-base leading-relaxed">
                Nosso propósito é ajudar negócios de todos os tamanhos a terem uma presença online profissional, aumentando sua visibilidade, credibilidade e oportunidades de conquistar novos clientes em todo o território nacional.
              </p>
            </div>

            {/* Core Values & Advantages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHY_CHOOSE_US.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#0e0818]/60 border border-purple-900/25 hover:border-purple-600/40 transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Direct CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="px-6 py-3.5 rounded-full font-bold text-sm text-white bg-purple-600 hover:bg-purple-500 transition-all shadow-[0_0_20px_rgba(147,51,234,0.4)] flex items-center gap-2"
              >
                <span>Solicitar um site para minha empresa</span>
                <Zap className="w-4 h-4" />
              </button>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
