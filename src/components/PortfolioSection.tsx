import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  ExternalLink, 
  Eye, 
  Clock, 
  TrendingUp, 
  Layers, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { PORTFOLIO_PROJECTS, AGENCY_INFO } from '../data/agencyData';
import { PortfolioProject } from '../types';
import { BredariolLogo } from './BredariolLogo';

interface PortfolioSectionProps {
  onSelectProject: (project: PortfolioProject) => void;
  onRequestSimilar: (project: PortfolioProject) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ 
  onSelectProject, 
  onRequestSimilar 
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todos os Projetos' },
    { id: 'landing-page', label: 'Landing Pages' },
    { id: 'institucional', label: 'Institucionais' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'servicos', label: 'Clínicas & Serviços' },
  ];

  const filteredProjects = activeCategory === 'todos'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-[#040207]">
      {/* Background ambience */}
      <div className="absolute inset-0 ambient-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-950/20 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Official Portfolio Logo Banner */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          
          {/* Official Brand Watermark Badge - "A imagem fixada é a logo do portfolio" */}
          <div className="mb-6 p-3 rounded-2xl bg-black/80 border border-purple-800/50 shadow-[0_0_25px_rgba(157,78,221,0.25)] flex items-center gap-3">
            <BredariolLogo variant="horizontal" size="sm" withGlow={true} />
            <div className="h-6 w-[1px] bg-purple-800/50" />
            <span className="text-xs font-semibold text-purple-300 pr-2">
              Portfólio Oficial de Casos de Sucesso
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/70 border border-purple-700/40 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Casos Reais de Alto Impacto</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Projetos desenhados para <span className="text-gradient-vibrant">gerar vendas e autoridade</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            Confira alguns dos sites profissionais entregues para empresas em todo o Brasil. Cada projeto carrega a assinatura de excelência da Bredariol Digital.
          </motion.p>
        </div>

        {/* Filter Categories Bar */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-purple-700 to-fuchsia-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] border border-purple-400/40'
                  : 'bg-purple-950/40 text-slate-300 hover:text-white hover:bg-purple-900/40 border border-purple-900/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="rounded-2xl p-1 bg-gradient-to-b from-purple-800/30 via-purple-950/20 to-transparent hover:from-purple-600/50 hover:via-purple-800/40 transition-all duration-300 flex flex-col group"
              >
                <div className="rounded-[15px] bg-[#0b0614] border border-purple-900/40 group-hover:border-purple-500/50 flex flex-col h-full overflow-hidden transition-all duration-300 shadow-2xl">
                  
                  {/* Image Container with Brand Signature Tag */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-purple-950/60">
                    <img
                      src={project.imageUrl}
                      alt={`Projeto ${project.title} desenvolvido por Bredariol Digital`}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0614] via-[#0b0614]/30 to-transparent" />

                    {/* Fixed Portfolio Seal on top right */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/85 backdrop-blur-md border border-purple-500/40 text-[10px] font-bold text-purple-200 flex items-center gap-1.5 shadow-lg">
                      <BredariolLogo variant="symbol" size="sm" />
                      <span>Bredariol Certified</span>
                    </div>

                    {/* Delivery Time Badge on top left */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-purple-950/90 backdrop-blur-md border border-purple-700/50 text-[10px] font-bold text-purple-300 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-purple-400" />
                      <span>{project.deliveryTime}</span>
                    </div>

                    {/* Category pill */}
                    <div className="absolute bottom-3 left-3">
                      <span className="px-3 py-1 rounded-md bg-purple-900/90 text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
                        {project.categoryLabel}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-2">
                      <span className="text-xs text-purple-400 font-medium">{project.client}</span>
                      <h3 className="text-lg font-bold text-white group-hover:text-purple-200 transition-colors line-clamp-1">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Key Metrics Pill Grid */}
                    <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-xl bg-purple-950/30 border border-purple-900/30 mb-5">
                      {project.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className="text-center">
                          <p className="text-xs font-bold text-purple-300 font-['Space_Grotesk']">
                            {metric.value}
                          </p>
                          <p className="text-[10px] text-slate-400 truncate mt-0.5">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="mt-auto pt-4 border-t border-purple-950/60 flex items-center gap-2">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="flex-1 py-2.5 px-3 rounded-xl font-semibold text-xs text-slate-200 hover:text-white bg-purple-950/50 hover:bg-purple-900/60 border border-purple-800/40 transition-colors flex items-center justify-center gap-1.5"
                      >
                        <Eye className="w-3.5 h-3.5 text-purple-400" />
                        <span>Ver Detalhes</span>
                      </button>

                      <button
                        onClick={() => onRequestSimilar(project)}
                        className="py-2.5 px-3.5 rounded-xl font-bold text-xs text-white bg-purple-600 hover:bg-purple-500 transition-all flex items-center justify-center gap-1 shadow-[0_0_15px_rgba(147,51,234,0.3)]"
                        title="Solicitar um site parecido para minha empresa"
                      >
                        <span>Quero parecido</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>

                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Portfolio Banner */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-300">
            Precisa de um projeto exclusivo para o nicho da sua empresa?
          </p>
          <a
            href={AGENCY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-3 font-bold text-purple-400 hover:text-purple-300 underline underline-offset-4 text-sm sm:text-base"
          >
            <span>Converse com o especialista e receba uma prévia hoje mesmo</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
