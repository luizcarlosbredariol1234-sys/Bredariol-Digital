import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Clock, 
  Zap, 
  CheckCircle2, 
  MessageCircle, 
  ArrowRight, 
  Calculator,
  ShieldCheck,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

interface ProjectSimulatorSectionProps {
  onSelectPlan?: (summary: string) => void;
}

export const ProjectSimulatorSection: React.FC<ProjectSimulatorSectionProps> = ({ onSelectPlan }) => {
  const [selectedType, setSelectedType] = useState<string>('landing-page');
  const [selectedGoal, setSelectedGoal] = useState<string>('whatsapp');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'whatsapp-direct',
    'seo-local',
    'mobile-speed'
  ]);

  const projectTypes = [
    { id: 'landing-page', name: 'Landing Page de Alta Conversão', delivery: 'Hoje mesmo (6 a 8h)', icon: '⚡' },
    { id: 'institucional', name: 'Site Institucional Corporativo', delivery: 'Hoje mesmo (8 a 12h)', icon: '🏢' },
    { id: 'ecommerce', name: 'E-commerce & Catálogo de Produtos', delivery: 'Hoje mesmo (10 a 14h)', icon: '🛍️' },
    { id: 'servicos', name: 'Site para Clínicas / Consultórios', delivery: 'Hoje mesmo (8h)', icon: '🩺' },
  ];

  const goals = [
    { id: 'whatsapp', label: 'Multiplicar Contatos no WhatsApp' },
    { id: 'google-ads', label: 'Converter Tráfego de Google Ads e Meta' },
    { id: 'autoridade', label: 'Passar Imagem de Marca de Luxo / Autoridade' },
    { id: 'vendas', label: 'Vender Produtos com Checkout Instantâneo' },
  ];

  const availableFeatures = [
    { id: 'whatsapp-direct', label: 'Botão Flutuante & CTA de 1-Clique no WhatsApp' },
    { id: 'seo-local', label: 'Estruturação SEO Google para Busca Regional' },
    { id: 'mobile-speed', label: 'Velocidade 99/100 PageSpeed para Mobile' },
    { id: 'analytics-pixel', label: 'Configuração de Pixel Meta e Google Tag Manager' },
    { id: 'galeria-interativa', label: 'Galeria Dinâmica de Fotos / Antes e Depois' },
    { id: 'calculadora', label: 'Simulador ou Formulário de Orçamento Rápido' },
  ];

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const currentTypeObj = projectTypes.find(t => t.id === selectedType) || projectTypes[0];
  const currentGoalObj = goals.find(g => g.id === selectedGoal) || goals[0];

  const handleWhatsAppRedirect = () => {
    const selectedFeaturesNames = availableFeatures
      .filter(f => selectedFeatures.includes(f.id))
      .map(f => f.label)
      .join(', ');

    const message = `Olá Bredariol Digital! Usei o Simulador no site e gostaria de um orçamento para:
- *Modelo*: ${currentTypeObj.name}
- *Objetivo*: ${currentGoalObj.label}
- *Funcionalidades*: ${selectedFeaturesNames || 'Padrão'}
- *Prazo*: ${currentTypeObj.delivery}

Podemos iniciar meu projeto hoje?`;

    window.open(`https://wa.me/55${AGENCY_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="simulador" className="py-24 relative overflow-hidden bg-[#07030e] border-t border-b border-purple-950/40">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-purple-700/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/70 border border-purple-700/40 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Calculator className="w-3.5 h-3.5 text-purple-400" />
            <span>Simulador Interativo de Projeto</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Descubra o modelo ideal para <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-300 to-purple-400">o seu negócio</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            Configure abaixo as necessidades da sua empresa e receba uma recomendação instantânea com garantia de entrega no mesmo dia.
          </motion.p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Controls */}
          <div className="lg:col-span-7 space-y-8 bg-[#0a0515]/90 border border-purple-900/30 rounded-3xl p-6 sm:p-8 backdrop-blur-xl">
            
            {/* 1. Escolha do Tipo */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-purple-600/30 flex items-center justify-center text-[11px] text-purple-300 font-mono">1</span>
                <span>Qual modelo de site você precisa?</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                      selectedType === type.id
                        ? 'bg-purple-950/60 border-purple-500 shadow-[0_0_20px_rgba(147,51,234,0.25)]'
                        : 'bg-[#0e071c]/70 border-purple-900/30 hover:border-purple-700/50 hover:bg-purple-950/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xl">{type.icon}</span>
                      <span className="text-[10px] font-mono text-purple-300 bg-purple-900/40 px-2 py-0.5 rounded-full">
                        {type.delivery}
                      </span>
                    </div>
                    <span className="text-sm font-bold text-white leading-snug">{type.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Objetivo Principal */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-purple-600/30 flex items-center justify-center text-[11px] text-purple-300 font-mono">2</span>
                <span>Qual seu principal objetivo com o site?</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {goals.map((g) => (
                  <button
                    key={g.id}
                    onClick={() => setSelectedGoal(g.id)}
                    className={`p-3 rounded-xl border text-left transition-all text-xs font-semibold cursor-pointer flex items-center gap-2.5 ${
                      selectedGoal === g.id
                        ? 'bg-purple-900/40 border-purple-500 text-white'
                        : 'bg-[#0e071c]/50 border-purple-900/25 text-slate-400 hover:text-white hover:bg-purple-950/30'
                    }`}
                  >
                    <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                      selectedGoal === g.id ? 'border-purple-400 bg-purple-600' : 'border-slate-600'
                    }`}>
                      {selectedGoal === g.id && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </span>
                    <span>{g.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Funcionalidades extras */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-purple-600/30 flex items-center justify-center text-[11px] text-purple-300 font-mono">3</span>
                <span>Selecione as funcionalidades essenciais:</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {availableFeatures.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-3 rounded-xl border text-left transition-all text-xs font-medium cursor-pointer flex items-center gap-2.5 ${
                        isChecked
                          ? 'bg-purple-950/50 border-purple-500/60 text-slate-100'
                          : 'bg-[#0e071c]/40 border-purple-900/20 text-slate-400 hover:text-white'
                      }`}
                    >
                      <span className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ${
                        isChecked ? 'border-purple-500 bg-purple-600 text-white' : 'border-slate-700'
                      }`}>
                        {isChecked && <CheckCircle2 className="w-3 h-3 text-white" />}
                      </span>
                      <span className="truncate">{feat.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right: Real-Time Diagnostic & Direct Action */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-28 rounded-3xl p-1 bg-gradient-to-b from-purple-500/40 via-purple-900/20 to-transparent shadow-[0_0_50px_rgba(157,78,221,0.25)]">
              <div className="rounded-[22px] bg-[#0c0716] border border-purple-700/30 p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between">
                
                <div>
                  {/* Status header */}
                  <div className="flex items-center justify-between pb-4 border-b border-purple-900/30">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      Diagnóstico Pronto
                    </span>
                    <span className="text-[11px] font-mono text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded-full border border-purple-800/30">
                      Entrega no Mesmo Dia
                    </span>
                  </div>

                  {/* Summary recommendation */}
                  <div className="mt-6">
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Estrutura Recomendada:</p>
                    <h3 className="text-xl font-bold text-white mt-1 leading-snug">
                      {currentTypeObj.name}
                    </h3>
                  </div>

                  {/* Estimated metrics */}
                  <div className="mt-6 grid grid-cols-2 gap-3 py-4 px-3 rounded-2xl bg-purple-950/30 border border-purple-900/30">
                    <div>
                      <p className="text-[11px] text-slate-400">Prazo de Entrega</p>
                      <p className="text-base font-bold text-purple-200 font-['Space_Grotesk'] flex items-center gap-1.5 mt-0.5">
                        <Clock className="w-4 h-4 text-purple-400" />
                        <span>Hoje mesmo</span>
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-400">Potencial de Vendas</p>
                      <p className="text-base font-bold text-emerald-400 font-['Space_Grotesk'] flex items-center gap-1.5 mt-0.5">
                        <TrendingUp className="w-4 h-4 text-emerald-400" />
                        <span>+220% Média</span>
                      </p>
                    </div>
                  </div>

                  {/* Included benefits */}
                  <div className="mt-6 space-y-2 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Desenvolvimento em tecnologia de alta velocidade</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Certificado de Segurança SSL Vitalício incluso</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Hospedagem de alta performance configurada</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Suporte e consultoria pós-entrega</span>
                    </div>
                  </div>
                </div>

                {/* Direct Action */}
                <div className="mt-8 pt-6 border-t border-purple-900/30">
                  <button
                    onClick={handleWhatsAppRedirect}
                    className="w-full py-4 px-5 rounded-2xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-purple-700 via-fuchsia-600 to-purple-800 hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(147,51,234,0.4)] cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5 text-white" />
                    <span>Iniciar Projeto com Esta Configuração</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-slate-400 text-center mt-3">
                    Fale direto com nossos especialistas e receba seu site hoje.
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
