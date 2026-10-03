import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Eye, 
  ArrowRight, 
  ExternalLink,
  Lock,
  Search,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { PORTFOLIO_PROJECTS, AGENCY_INFO, krmSiteImage, krmSiteSvg } from '../data/agencyData';
import { PortfolioProject } from '../types';

interface PortfolioSectionProps {
  onSelectProject: (project: PortfolioProject) => void;
  onRequestSimilar: (project: PortfolioProject) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ 
  onSelectProject, 
  onRequestSimilar 
}) => {
  // Clear any old corrupt cache from previous sessions that had empty or broken projects
  useEffect(() => {
    try {
      localStorage.removeItem('bredariol_user_projects');
    } catch {
      // ignore
    }
  }, []);

  const [projects] = useState<PortfolioProject[]>(PORTFOLIO_PROJECTS);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    if (!searchQuery.trim()) return projects;
    const query = searchQuery.toLowerCase();
    return projects.filter(p => 
      p.title.toLowerCase().includes(query) ||
      p.client.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query)
    );
  }, [projects, searchQuery]);

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-gradient-to-b from-black via-[#0a031c] to-black text-white relative overflow-hidden border-t border-purple-900/30">
      
      {/* Glows roxos de fundo atmosférico */}
      <div 
        className="absolute -right-24 top-1/4 w-[650px] h-[650px] rounded-full blur-[160px] opacity-45 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(147,51,234,0.4) 0%, rgba(126,34,206,0.2) 45%, rgba(88,28,135,0.1) 70%, transparent 85%)'
        }}
      />
      <div 
        className="absolute -left-24 bottom-1/4 w-[600px] h-[600px] rounded-full blur-[150px] opacity-35 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(147,51,234,0.35) 0%, rgba(88,28,135,0.15) 50%, transparent 80%)'
        }}
      />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10 text-left">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-xs font-mono tracking-widest text-purple-400 uppercase mb-4">
            ● 04 / PORTFOLIO
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-['Space_Grotesk'] text-white mb-3">
            Projetos selecionados
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Estruturas digitais sob medida criadas com notas máximas no Google e alta conversão.
          </p>
        </motion.div>

        {/* Search */}
        {projects.length > 0 && (
          <div className="mb-12 max-w-md">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar projeto..."
                className="w-full pl-11 pr-4 py-3 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white text-xs cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group flex flex-col rounded-3xl bg-[#090514] border border-white/10 hover:border-purple-500/50 transition-all duration-300 overflow-hidden relative shadow-2xl"
              >
                {/* Browser Frame Header */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#0e071e] border-b border-purple-900/40 text-[11px] text-slate-400 select-none">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-purple-800/30 font-mono text-[10px] text-purple-300">
                    <Lock className="w-2.5 h-2.5 text-emerald-400" />
                    <span>krmrefrigeracao.com.br</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>100/100</span>
                  </div>
                </div>

                {/* Preview Image in Browser frame */}
                <div 
                  onClick={() => onSelectProject(project)}
                  className="relative aspect-[16/10] bg-[#070314] cursor-pointer overflow-hidden border-b border-white/10 flex items-center justify-center group/img"
                >
                  <img
                    src={project.imageUrl || krmSiteImage}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('krm-site.svg')) {
                        target.src = krmSiteSvg;
                      }
                    }}
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <span className="px-4 py-2 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-xl">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Ver Foto Original</span>
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <p className="text-[11px] font-mono tracking-widest text-purple-400 uppercase mb-1">
                      {project.client}
                    </p>
                    <h3 
                      onClick={() => onSelectProject(project)}
                      className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors font-['Space_Grotesk'] cursor-pointer"
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3">
                    {project.previewUrl && (
                      <a
                        href={project.previewUrl.startsWith('http') ? project.previewUrl : `https://${project.previewUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 px-3 rounded-full font-bold text-xs text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:opacity-95 transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Entrar no Site</span>
                      </a>
                    )}

                    <button
                      onClick={() => onRequestSimilar(project)}
                      className="px-4 py-2.5 rounded-full font-bold text-xs text-white bg-purple-600 hover:bg-purple-500 transition-all flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>Quero Parecido</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
