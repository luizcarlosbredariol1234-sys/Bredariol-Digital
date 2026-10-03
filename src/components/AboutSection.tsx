import React from 'react';
import { motion } from 'motion/react';
import { 
  Code2, 
  Sparkles, 
  Maximize2, 
  Users, 
  Zap, 
  Award,
  CheckCircle2,
  Clock,
  ArrowRight
} from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';
import developerPortrait from '../assets/images/hero_developer_portrait_1791030169492.jpg';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  const features = [
    { icon: Code2, label: 'Clean Code', desc: 'Código limpo, seguro e escalável' },
    { icon: Maximize2, label: 'Pixel Perfect', desc: 'Design milimétrico em qualquer tela' },
    { icon: Users, label: 'User Focused', desc: 'Foco total na jornada do cliente' },
    { icon: Zap, label: 'Performance', desc: 'Carregamento instantâneo em 0.6s' },
  ];

  const skills = [
    { name: 'JavaScript / TypeScript', percentage: 95 },
    { name: 'React / Next.js & Tailwind', percentage: 92 },
    { name: 'UI/UX Design & Alta Conversão', percentage: 96 },
    { name: 'Node.js & Integração de APIs', percentage: 88 },
    { name: 'Otimização SEO & PageSpeed 100/100', percentage: 99 },
  ];

  return (
    <section id="sobre" className="py-24 relative overflow-hidden bg-[#06030c] text-white border-t border-purple-950/40">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-purple-700/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-800/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 3-Column Layout matching reference image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading, Paragraph, and 4 Feature Boxes */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col"
          >
            <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold tracking-wider text-purple-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span>Sobre Mim & Bredariol</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Criando Soluções com{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">
                Paixão & Precisão
              </span>
            </h2>

            <p className="mt-4 text-sm text-slate-300 leading-relaxed">
              Sou um desenvolvedor e designer criativo focado em unir tecnologia de ponta e psicologia de consumo. Transformo problemas complexos em estruturas elegantes, velozes e de alta conversão.
            </p>

            {/* 4 Feature Boxes (2x2 Grid) matching reference design */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              {features.map((feat, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-2xl bg-purple-950/25 border border-purple-800/30 hover:border-purple-600/50 transition-all duration-200 flex flex-col items-start"
                >
                  <div className="w-8 h-8 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-2">
                    <feat.icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-white mb-0.5">{feat.label}</span>
                  <span className="text-[11px] text-slate-400 leading-tight">{feat.desc}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Center Column: Portrait Card with Glow Border and Signature */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="relative w-full max-w-[320px] rounded-3xl p-1 bg-gradient-to-b from-purple-600/60 via-purple-900/30 to-fuchsia-600/60 shadow-[0_0_40px_rgba(147,51,234,0.25)]">
              <div className="rounded-[22px] overflow-hidden bg-[#090414] border border-purple-800/40 relative">
                <img
                  src={developerPortrait}
                  alt="Bredariol Developer"
                  className="w-full h-[360px] object-cover object-center filter contrast-105"
                />
                
                {/* Signature overlay at the bottom matching reference image */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-white font-['Space_Grotesk'] tracking-wide">Bredariol Digital</p>
                    <p className="text-[11px] text-purple-300 font-medium">Excelência em Cada Pixel</p>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-purple-600/30 border border-purple-500/40 text-[10px] font-mono text-purple-200">
                    Est. 2020
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Skill Capability Progress Bars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col justify-center space-y-5"
          >
            <div className="mb-2">
              <h3 className="text-xl font-bold text-white">Competências Técnicas</h3>
              <p className="text-xs text-purple-300">Padrões de engenharia e notas máximas</p>
            </div>

            {skills.map((skill, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-200">{skill.name}</span>
                  <span className="text-purple-400 font-mono font-bold">{skill.percentage}%</span>
                </div>
                
                {/* Progress Bar Track */}
                <div className="w-full h-2 rounded-full bg-purple-950/60 border border-purple-900/40 overflow-hidden p-0.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: idx * 0.1 }}
                    className="h-full rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                  />
                </div>
              </div>
            ))}

            {/* Same-day badge banner */}
            <div className="mt-4 p-3 rounded-2xl bg-purple-950/30 border border-purple-800/40 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-300 shrink-0">
                <Clock className="w-4 h-4 text-purple-400" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Entrega no Mesmo Dia</p>
                <p className="text-[11px] text-slate-400">Metodologia ágil que publica seu projeto em tempo recorde.</p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
