import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';
import { PurpleBackgroundSparkles } from './PurpleBackgroundSparkles';

interface HeroSectionProps {
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de conversar com a Bredariol Digital para criar uma experiência digital de alto impacto para minha empresa."
    );
    window.open(`https://wa.me/55${AGENCY_INFO.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="inicio" className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-black text-white flex flex-col justify-center">
      
      {/* Brilhos roxos de fundo e partículas estelares */}
      <PurpleBackgroundSparkles position="right" />

      {/* Background Graphic: Giant Angular Geometric Purple Vector Lines (matching reference V/diamond) */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        {/* Subtle purple radial glow */}
        <div className="absolute w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] bg-purple-900/20 rounded-full blur-[160px] opacity-70" />
        
        {/* SVG Geometric Facets & Star Dust Lines */}
        <svg
          viewBox="0 0 1000 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-[1200px] h-[1200px] max-w-none opacity-40"
        >
          {/* Giant Angular Perspective V Lines */}
          <path
            d="M500 950 L200 50 L350 50 L500 800 L650 50 L800 50 Z"
            fill="url(#purpleGrad)"
            opacity="0.25"
          />
          <path
            d="M500 950 L200 50"
            stroke="rgba(168, 85, 247, 0.4)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <path
            d="M500 950 L800 50"
            stroke="rgba(168, 85, 247, 0.4)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <circle cx="500" cy="500" r="320" stroke="rgba(168, 85, 247, 0.15)" strokeWidth="1" />
          <circle cx="500" cy="500" r="440" stroke="rgba(168, 85, 247, 0.08)" strokeWidth="1" />
          
          {/* Subtle glowing dots / stars */}
          <circle cx="280" cy="300" r="3" fill="#c084fc" opacity="0.8" />
          <circle cx="720" cy="240" r="3" fill="#c084fc" opacity="0.8" />
          <circle cx="610" cy="620" r="2" fill="#c084fc" opacity="0.6" />
          <circle cx="390" cy="740" r="2.5" fill="#c084fc" opacity="0.7" />

          <defs>
            <linearGradient id="purpleGrad" x1="500" y1="50" x2="500" y2="950" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9333ea" stopOpacity="0.6" />
              <stop offset="0.5" stopColor="#6b21a8" stopOpacity="0.2" />
              <stop offset="1" stopColor="#000000" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10 w-full text-left">
        
        {/* Eyebrow Label matching reference image */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono tracking-widest text-purple-400 uppercase mb-6 flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
          <span>DIGITAL EXPERIENCES / BREDARIOL DIGITAL®</span>
        </motion.div>

        {/* Giant Headline with Purple Ambient Glow in Background */}
        <div className="relative mb-8">
          
          {/* Roxo de fundo atmosférico exatamente no lugar onde ficava a letra B */}
          <div className="absolute -top-8 sm:-top-16 md:-top-20 right-0 sm:right-4 md:right-10 w-[290px] sm:w-[480px] md:w-[600px] h-[290px] sm:h-[480px] md:h-[600px] pointer-events-none select-none z-0 overflow-visible">
            {/* Glow roxo elegante e profundo */}
            <div 
              className="absolute inset-0 rounded-full blur-[100px] sm:blur-[130px] opacity-75 pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(147,51,234,0.45) 0%, rgba(126,34,206,0.25) 45%, rgba(88,28,135,0.1) 70%, transparent 85%)'
              }}
            />
            {/* Núcleo de luz roxa sutil no centro */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-72 h-48 sm:h-72 rounded-full blur-[60px] opacity-55 pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(168,85,247,0.5) 0%, rgba(147,51,234,0.2) 60%, transparent 80%)'
              }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative z-10"
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight leading-[0.92] font-['Space_Grotesk'] text-white">
              SEU FUTURO<br />
              COMEÇA <span className="text-white">NA</span><br />
              <span className="text-stroke-white tracking-normal font-black">TELA.</span>
            </h1>
          </motion.div>
        </div>

        {/* Content Row: Floating Purple Card + Lowercase 'digital experience' + Description */}
        <div className="relative mt-8 sm:mt-12 pt-6">
          
          {/* Floating Card on Left matching screenshot 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8 inline-block p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 border border-purple-400/30 text-white shadow-[0_15px_40px_rgba(147,51,234,0.4)] backdrop-blur-md"
          >
            <div className="w-8 h-1 bg-white/80 rounded-full mb-3" />
            <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider leading-snug">
              WEBSITES &amp;<br />
              LANDING PAGES
            </p>
          </motion.div>

          {/* Contrast Lowercase Typography: digital experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mb-6"
          >
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter text-white font-['Space_Grotesk'] leading-[0.95]">
              digital<br />
              experience
            </h2>
          </motion.div>

          {/* Description Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed mb-8"
          >
            Criamos experiências digitais que transformam ideias, negócios e marcas em presenças que não passam despercebidas.
          </motion.p>

          {/* Pill Button: FALE CONOSCO → */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(147,51,234,0.4)] transition-all cursor-pointer group"
            >
              <span>Fale Conosco</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

        </div>

      </div>

    </section>
  );
};
