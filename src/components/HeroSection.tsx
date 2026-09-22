import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  ArrowRight, 
  Clock, 
  Zap, 
  ShieldCheck, 
  Smartphone, 
  TrendingUp, 
  CheckCircle2, 
  Star,
  ExternalLink,
  Laptop,
  Gauge
} from 'lucide-react';
import { BredariolLogo } from './BredariolLogo';
import { AGENCY_INFO, TRUST_STATS } from '../data/agencyData';

interface HeroSectionProps {
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  const [activeDevice, setActiveDevice] = useState<'desktop' | 'mobile'>('desktop');

  const scrollToPortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background ambient lighting and grid */}
      <div className="absolute inset-0 ambient-grid pointer-events-none opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[550px] ambient-spotlight pointer-events-none" />
      
      {/* Subtle floating purple spheres */}
      <div className="absolute top-20 -left-40 w-96 h-96 rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-40 -right-40 w-96 h-96 rounded-full bg-fuchsia-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Urgent & High-End Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-600/40 text-purple-200 text-xs sm:text-sm font-semibold mb-6 shadow-[0_0_20px_rgba(147,51,234,0.25)]"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span className="text-purple-300 font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                Diferencial Exclusivo
              </span>
              <span className="text-slate-400">•</span>
              <span className="text-white font-medium">Entregamos no mesmo dia</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08] text-white"
            >
              <span className="block text-gradient">Mais presença.</span>
              <span className="block text-gradient-vibrant">Mais clientes.</span>
              <span className="block text-gradient">Mais resultados.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl"
            >
              A <strong className="text-white font-semibold">Bredariol Digital</strong> cria sites modernos, velozes e de alto padrão para empresas que querem consolidar autoridade e aumentar seu faturamento. Tenha sua empresa no topo da internet hoje mesmo.
            </motion.p>

            {/* Call To Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              {/* Primary High-Converting CTA */}
              <button
                onClick={onOpenContact}
                className="relative group overflow-hidden px-7 py-4 rounded-full font-bold text-base sm:text-lg text-white transition-all duration-300 shadow-[0_0_35px_rgba(189,0,255,0.45)] hover:shadow-[0_0_50px_rgba(189,0,255,0.75)] hover:scale-[1.02] active:scale-[0.98] text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-fuchsia-600 to-purple-800 transition-all duration-300 group-hover:opacity-90" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.3),transparent_70%)]" />
                <span className="relative flex items-center justify-center gap-2.5">
                  <Sparkles className="w-5 h-5 text-purple-200 animate-pulse" />
                  <span>Solicitar um site para minha empresa</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </button>

              {/* Secondary CTA */}
              <button
                onClick={scrollToPortfolio}
                className="px-6 py-4 rounded-full font-semibold text-sm sm:text-base text-slate-200 hover:text-white bg-slate-900/60 hover:bg-purple-950/40 border border-purple-800/30 hover:border-purple-600/60 transition-all duration-300 flex items-center justify-center gap-2 text-center"
              >
                <span>Ver Portfólio de Sites</span>
              </button>
            </motion.div>

            {/* Quick Micro-Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 pt-8 border-t border-purple-900/30 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-xl"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-300 font-medium">Entrega no mesmo dia</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-300 font-medium">100% Responsivo</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-300 font-medium">Em todo o Brasil</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Showcase featuring the Bredariol Emblem and Live Preview */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-2xl p-1 bg-gradient-to-b from-purple-500/40 via-purple-900/20 to-transparent shadow-[0_0_50px_rgba(157,78,221,0.25)]"
            >
              <div className="relative rounded-[15px] bg-[#0c0716]/95 backdrop-blur-xl border border-purple-700/30 p-5 sm:p-6 overflow-hidden">
                
                {/* Header of the mock showcase */}
                <div className="flex items-center justify-between pb-4 border-b border-purple-900/30">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-red-500/80" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono pl-2">bredarioldigital.com.br</span>
                  </div>

                  {/* Device Switcher */}
                  <div className="flex items-center bg-purple-950/60 p-1 rounded-lg border border-purple-800/40">
                    <button
                      onClick={() => setActiveDevice('desktop')}
                      className={`p-1.5 rounded text-xs transition-colors ${
                        activeDevice === 'desktop' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                      title="Visualização Desktop"
                    >
                      <Laptop className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setActiveDevice('mobile')}
                      className={`p-1.5 rounded text-xs transition-colors ${
                        activeDevice === 'mobile' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                      title="Visualização Mobile"
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Central Brand Showcase Card with the Fixed Portfolio Logo */}
                <div className="py-6 flex flex-col items-center justify-center relative">
                  <div className="absolute inset-0 bg-radial from-purple-600/15 via-transparent to-transparent blur-xl pointer-events-none" />

                  {/* Logo Rendered Cleanly and Prominently */}
                  <div className="relative z-10 p-4 rounded-2xl bg-black/80 border border-purple-800/40 shadow-2xl w-full max-w-[340px] text-center group hover:border-purple-500/60 transition-all duration-300">
                    <BredariolLogo variant="full" size="md" withGlow={true} />
                    
                    <div className="mt-4 pt-3 border-t border-purple-900/40 flex items-center justify-between text-xs text-slate-300 px-2">
                      <span className="flex items-center gap-1.5 text-purple-300 font-semibold">
                        <Clock className="w-3.5 h-3.5 text-purple-400" />
                        Entrega Hoje
                      </span>
                      <span className="flex items-center gap-1 text-emerald-400 font-bold">
                        <Gauge className="w-3.5 h-3.5" />
                        100/100 PageSpeed
                      </span>
                    </div>
                  </div>

                  {/* Live conversion simulation badge */}
                  <div className="mt-5 w-full bg-purple-950/40 border border-purple-800/30 rounded-xl p-3.5 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-300 font-medium">Conversão média</p>
                        <p className="text-sm font-bold text-white">+240% em Vendas</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 bg-purple-600/30 border border-purple-500/40 text-purple-300 text-[11px] font-semibold rounded-full">
                      Padrão Ouro
                    </span>
                  </div>
                </div>

                {/* Bottom stats banner */}
                <div className="pt-3 border-t border-purple-900/20 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="ml-1 text-slate-200 font-bold">5.0</span>
                  </div>
                  <span className="text-[11px] text-purple-300 font-medium">
                    100% de clientes satisfeitos
                  </span>
                </div>

              </div>
            </motion.div>
          </div>

        </div>

        {/* Global Stats Counter Bar */}
        <div className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {TRUST_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-5 sm:p-6 rounded-2xl bg-[#0e0818]/80 border border-purple-900/30 hover:border-purple-600/40 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute -right-6 -top-6 w-20 h-20 bg-purple-600/10 rounded-full blur-xl group-hover:bg-purple-600/20 transition-colors" />
              <p className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-purple-400 to-fuchsia-400 font-['Space_Grotesk']">
                {stat.value}
              </p>
              <p className="text-sm sm:text-base font-semibold text-white mt-1">
                {stat.label}
              </p>
              <p className="text-xs text-slate-400 mt-1 leading-normal">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
