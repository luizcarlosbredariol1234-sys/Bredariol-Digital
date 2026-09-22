import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import { PortfolioProject } from '../types';
import { BredariolLogo } from './BredariolLogo';
import { AGENCY_INFO } from '../data/agencyData';

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
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-[#0b0614] border border-purple-700/50 rounded-2xl shadow-[0_0_50px_rgba(147,51,234,0.4)] overflow-hidden z-10 my-8"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-purple-900/40 bg-purple-950/40">
            <div className="flex items-center gap-3">
              <BredariolLogo variant="symbol" size="sm" />
              <div>
                <span className="text-xs text-purple-300 font-semibold">{project.categoryLabel}</span>
                <h3 className="text-base font-bold text-white line-clamp-1">{project.title}</h3>
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Fechar detalhes"
              className="p-2 text-slate-400 hover:text-white rounded-lg bg-purple-950/60 hover:bg-purple-900/80 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6">
            
            {/* Project Image Banner with watermarks */}
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-purple-800/40 bg-black">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-purple-900/90 text-xs font-bold text-white">
                  {project.client}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-950/90 border border-emerald-500/50 text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {project.deliveryTime}
                </span>
              </div>
            </div>

            {/* Metrics Achieved */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-3">
                Resultados & Métricas Reais Alcançadas
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-purple-950/30 border border-purple-900/40 text-center">
                    <p className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-fuchsia-300 font-['Space_Grotesk']">
                      {m.value}
                    </p>
                    <p className="text-xs text-slate-300 font-medium mt-1">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-2">
                Sobre o Projeto
              </h4>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Included Features */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-3">
                Funcionalidades & Tecnologias Entregues
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bredariol Quality Seal */}
            <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-700/50 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-purple-400 shrink-0" />
              <p className="text-xs sm:text-sm text-purple-200 font-medium">
                {project.highlight}
              </p>
            </div>

          </div>

          {/* Modal Footer Actions */}
          <div className="px-6 py-4 border-t border-purple-900/40 bg-purple-950/30 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-slate-400 text-center sm:text-left">
              Quer seu negócio no ar hoje com a mesma qualidade?
            </span>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-purple-950/60 border border-purple-900/50"
              >
                Voltar
              </button>

              <button
                onClick={() => {
                  onClose();
                  onRequestQuote(project);
                }}
                className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.4)] flex items-center justify-center gap-2"
              >
                <span>Solicitar site para minha empresa</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
