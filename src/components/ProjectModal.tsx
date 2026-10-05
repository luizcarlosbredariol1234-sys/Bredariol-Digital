import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  ShieldCheck,
  ExternalLink,
  Monitor,
  Smartphone,
  Sparkles,
  Lock,
  MessageCircle,
  Gauge,
  Check
} from 'lucide-react';
import { PortfolioProject } from '../types';
import { BredariolLogo } from './BredariolLogo';
import { AGENCY_INFO, krmSiteImage, krmSiteSvg } from '../data/agencyData';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onRequestQuote: (project: PortfolioProject) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onRequestQuote,
}) => {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');

  if (!project) return null;

  const whatsappMessage = encodeURIComponent(
    `Olá! Vi o projeto "${project.title}" no portfólio da Bredariol Digital e gostaria de um site semelhante para o meu negócio.`
  );
  const projectWhatsappUrl = `https://wa.me/55${AGENCY_INFO.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          className="relative w-full max-w-4xl bg-[#090512] border border-purple-800/40 rounded-3xl shadow-[0_0_60px_rgba(147,51,234,0.35)] overflow-hidden z-10 my-6"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-purple-900/30 bg-[#0e071c]/80 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <BredariolLogo variant="symbol" size="sm" />
              <div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-slate-400 font-medium">{project.client}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white line-clamp-1">{project.title}</h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Device Preview Toggle */}
              <div className="hidden sm:flex items-center p-1 rounded-xl bg-purple-950/40 border border-purple-800/30 text-xs">
                <button
                  onClick={() => setDeviceMode('desktop')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    deviceMode === 'desktop' ? 'bg-purple-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span>Desktop</span>
                </button>
                <button
                  onClick={() => setDeviceMode('mobile')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    deviceMode === 'mobile' ? 'bg-purple-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Mobile</span>
                </button>
              </div>

              <button
                onClick={onClose}
                aria-label="Fechar detalhes do projeto"
                className="p-2 text-slate-400 hover:text-white rounded-xl bg-purple-950/40 hover:bg-purple-900/60 border border-purple-800/30 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-8">
            
            {/* Project Mockup Showcase Frame */}
            <div className="flex justify-center">
              {deviceMode === 'desktop' ? (
                /* Desktop Browser Frame */
                <div className="w-full rounded-2xl border border-purple-800/40 bg-[#05020a] overflow-hidden shadow-2xl">
                  {/* Browser chrome header */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-[#0e071c] border-b border-purple-900/40 text-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                      <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                      <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    </div>
                    <a 
                      href={project.previewUrl?.startsWith('http') ? project.previewUrl : `https://${project.previewUrl || 'krm-eusy-five.vercel.app'}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3.5 py-1 rounded-md bg-purple-950/60 hover:bg-purple-900/80 border border-purple-800/40 text-xs text-purple-200 hover:text-white font-mono transition-colors cursor-pointer group/link"
                      title="Clique para abrir o site oficial"
                    >
                      <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span className="underline decoration-purple-500/50 group-hover/link:decoration-white font-bold">{project.previewUrl?.replace('https://', '').replace('http://', '').replace(/\/$/, '') || 'krm-eusy-five.vercel.app'}</span>
                      <ExternalLink className="w-3 h-3 text-purple-400 group-hover/link:text-white shrink-0 ml-1" />
                    </a>
                    <div className="text-[11px] text-emerald-400 font-medium">
                      <span>100/100 PageSpeed</span>
                    </div>
                  </div>

                  <div className="relative w-full max-h-[650px] overflow-auto flex items-center justify-center bg-black p-2">
                    <img
                      src={project.imageUrl || krmSiteImage}
                      alt={project.title}
                      className="w-auto h-auto max-h-[620px] max-w-full object-contain rounded-lg"
                      loading="eager"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.src.includes('krm-site.svg')) {
                          target.src = krmSiteSvg;
                        }
                      }}
                    />
                  </div>
                </div>
              ) : (
                /* Mobile Phone Frame */
                <div className="w-[320px] sm:w-[360px] rounded-[36px] p-3 bg-[#120822] border-4 border-purple-800/50 shadow-2xl flex flex-col items-center">
                  {/* Dynamic Island / Speaker Notch */}
                  <div className="w-24 h-4 bg-black rounded-full mb-2 flex items-center justify-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-white/10" />
                  </div>

                  {/* Mobile Browser Address Bar */}
                  {project.previewUrl && (
                    <a
                      href={project.previewUrl.startsWith('http') ? project.previewUrl : `https://${project.previewUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full mb-2.5 px-3 py-1.5 rounded-full bg-black/80 hover:bg-purple-950/80 border border-purple-800/40 text-[11px] font-mono text-purple-300 hover:text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer group/moblink shadow-sm"
                      title="Clique para abrir o site oficial"
                    >
                      <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                      <span className="underline decoration-purple-500/40 group-hover/moblink:decoration-white font-bold">{project.previewUrl.replace('https://', '').replace('http://', '').replace(/\/$/, '')}</span>
                      <ExternalLink className="w-2.5 h-2.5 text-purple-400 group-hover/moblink:text-white shrink-0 ml-0.5" />
                    </a>
                  )}

                  <div className="w-full rounded-[24px] overflow-hidden relative bg-black border border-purple-900/30 flex items-center justify-center p-1">
                    <img
                      src={project.imageUrl || krmSiteImage}
                      alt={project.title}
                      className="w-full h-auto max-h-[620px] object-contain rounded-[24px]"
                      loading="eager"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.src.includes('krm-site.svg')) {
                          target.src = krmSiteSvg;
                        }
                      }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Metrics Ribbon */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-purple-950/20 border border-purple-800/30 text-center">
                    <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-fuchsia-200 to-purple-300 font-['Space_Grotesk']">
                      {m.value}
                    </p>
                    <p className="text-xs text-slate-300 font-medium mt-1">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Description & Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400">
                  Visão Geral do Caso de Sucesso
                </h4>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  {project.description}
                </p>

                {/* Features list */}
                <div className="pt-2">
                  <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    Soluções & Tecnologias Implementadas
                  </h5>
                  <div className="space-y-2.5">
                    {project.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar Info Card */}
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-[#0e071c] border border-purple-800/30 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-purple-300 font-semibold">
                    <Clock className="w-4 h-4 text-purple-400" />
                    <span>Prazo de Execução:</span>
                  </div>
                  <p className="text-sm font-bold text-white pl-6">
                    {project.deliveryTime}
                  </p>

                  <div className="pt-3 border-t border-purple-900/30">
                    <div className="flex items-center gap-2 text-xs text-purple-300 font-semibold">
                      <ShieldCheck className="w-4 h-4 text-purple-400" />
                      <span>Garantia de Performance:</span>
                    </div>
                    <p className="text-xs text-slate-300 pl-6 mt-1">
                      {project.highlight}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-purple-900/30">
                    <p className="text-[11px] font-semibold text-slate-400 mb-2">Tags do Projeto:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="px-2.5 py-1 rounded-md bg-purple-950/60 border border-purple-800/30 text-[11px] text-purple-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Modal Footer Actions */}
          <div className="px-6 py-4 border-t border-purple-900/30 bg-[#0a0515] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400 text-center sm:text-left">
              <span>Quer um site de alto padrão pronto no mesmo dia para o seu nicho?</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-purple-950/40 border border-purple-800/30 cursor-pointer"
              >
                Voltar
              </button>

              {project.previewUrl && (
                <a
                  href={project.previewUrl.startsWith('http') ? project.previewUrl : `https://${project.previewUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 transition-all flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.3)] cursor-pointer group/sitebtn"
                  title={`Abrir site oficial: ${project.previewUrl}`}
                >
                  <ExternalLink className="w-3.5 h-3.5 group-hover/sitebtn:rotate-12 transition-transform" />
                  <span>Entrar no Site Oficial</span>
                </a>
              )}

              <a
                href={projectWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-purple-600 hover:bg-purple-500 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(147,51,234,0.35)] cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Quero um Site Parecido</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
