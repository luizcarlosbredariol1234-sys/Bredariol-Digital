import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { PurpleBackgroundSparkles } from './PurpleBackgroundSparkles';

export const PhilosophySection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>('EXPERIENCE');

  const pillars = [
    {
      id: 'STRATEGY',
      title: 'STRATEGY',
      description: 'Mapeamento profundo do seu modelo de negócio, pesquisa de concorrência e arquitetura de persuasão voltada para tráfego e conversão rápida.'
    },
    {
      id: 'DESIGN',
      title: 'DESIGN',
      description: 'Direção de arte cirúrgica, tipografia moderna e interfaces que transmitem autoridade imediata desde o primeiro segundo de visualização.'
    },
    {
      id: 'TECHNOLOGY',
      title: 'TECHNOLOGY',
      description: 'Engenharia de código limpo, carregamento instantâneo em menos de 1 segundo, notas máximas no Google PageSpeed e total responsividade.'
    },
    {
      id: 'EXPERIENCE',
      title: 'EXPERIENCE',
      description: 'Cada clique e transição é pensado para reduzir o atrito do visitante e direcioná-lo organicamente para a tomada de ação e fechamento de contrato.'
    }
  ];

  const toggleItem = (id: string) => {
    setActiveItem(prev => (prev === id ? null : id));
  };

  return (
    <section id="filosofia" className="py-24 sm:py-32 bg-gradient-to-b from-black via-[#0a031a] to-black text-white relative overflow-hidden border-t border-purple-900/30">
      
      {/* Brilhos e atmosfera roxa de fundo */}
      <PurpleBackgroundSparkles position="left" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10 text-left">
        
        {/* Section Index Tag matching screenshot 2: ● 02 / PHILOSOPHY */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono tracking-widest text-purple-400 uppercase mb-8 flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
          <span>02 / PHILOSOPHY</span>
        </motion.div>

        {/* Massive Headline: NÃO USAMOS FÓRMULAS PRONTAS. */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight leading-[0.95] font-['Space_Grotesk'] text-white">
            NÃO USAMOS<br />
            FÓRMULAS<br />
            PRONTAS.
          </h2>
        </motion.div>

        {/* Narrative Paragraphs matching screenshot 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-4 text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed mb-16"
        >
          <p>
            Cada marca possui uma história, uma personalidade e um objetivo diferente.
          </p>
          <p className="text-slate-400">
            Por isso, cada solução da BREDARIOL DIGITAL é pensada de acordo com aquilo que realmente precisa ser construído.
          </p>
        </motion.div>

        {/* Interactive Accordion List matching screenshot 2 */}
        <div className="border-t border-white/10 divide-y divide-white/10 max-w-3xl">
          {pillars.map((pillar, idx) => {
            const isOpen = activeItem === pillar.id;
            return (
              <motion.div 
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="py-6 sm:py-7"
              >
                <button
                  onClick={() => toggleItem(pillar.id)}
                  className="w-full flex items-center justify-between text-left group cursor-pointer"
                >
                  <span className={`text-xl sm:text-2xl font-extrabold tracking-wide uppercase transition-colors font-['Space_Grotesk'] ${
                    isOpen ? 'text-purple-400' : 'text-white group-hover:text-purple-300'
                  }`}>
                    {pillar.title}
                  </span>
                  <ArrowDown className={`w-4 h-4 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-purple-400' : 'text-slate-500 group-hover:text-white'
                  }`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl">
                        {pillar.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
