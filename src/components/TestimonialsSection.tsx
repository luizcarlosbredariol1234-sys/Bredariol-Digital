import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_LIST } from '../data/agencyData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "A Bredariol transformou nossa ideia em uma estrutura web impressionante e de altíssima conversão. Altamente profissional, criativo e entregou rigorosamente no mesmo dia.",
      name: "Dra. Patrícia Silveira",
      role: "Diretora Clínica, Instituto Silveira",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
      stars: 5
    },
    {
      text: "Experiência incrível trabalhando com a Bredariol. Ótima comunicação, código impecável e notas máximas no Google PageSpeed. As vendas aumentaram logo na primeira semana.",
      name: "Rodrigo Mendes",
      role: "Fundador, Soluções Industriais RM",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
      stars: 5
    },
    {
      text: "O design e a velocidade do site superaram todas as expectativas da nossa diretoria. A atenção aos detalhes de usabilidade e conversão pelo WhatsApp foi impecável.",
      name: "Camila Becker",
      role: "Gerente Comercial, Becker Consultoria",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
      stars: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-24 relative overflow-hidden bg-[#040108] text-white border-t border-purple-950/30">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-purple-900/10 blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading matching reference image */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold tracking-wider text-purple-400 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            <span>Depoimentos</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            O Que Nossos Clientes{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">
              Dizem
            </span>
          </h2>
        </div>

        {/* 3 Testimonials Cards in Row with Left/Right Nav Arrows */}
        <div className="relative flex items-center justify-center">
          
          {/* 3-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {testimonials.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-7 rounded-2xl bg-[#090414]/90 border border-purple-900/30 hover:border-purple-600/50 transition-all duration-300 flex flex-col justify-between shadow-xl relative"
              >
                <div>
                  {/* Purple Quote Mark Box matching reference image */}
                  <div className="w-8 h-8 rounded-lg bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300 mb-4 text-sm font-serif font-black">
                    “
                  </div>

                  {/* Testimonial text */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {item.text}
                  </p>
                </div>

                <div>
                  {/* Client Info and Stars */}
                  <div className="flex items-center justify-between pt-4 border-t border-purple-950/60">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-10 h-10 rounded-full object-cover border border-purple-500/50"
                      />
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                          {item.name}
                        </h4>
                        <p className="text-[11px] text-slate-400 leading-tight mt-0.5">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    {/* Gold Star rating */}
                    <div className="flex items-center gap-0.5">
                      {[...Array(item.stars)].map((_, sIdx) => (
                        <Star key={sIdx} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>

        {/* Pagination Dots Below matching reference image */}
        <div className="flex items-center justify-center gap-2 mt-10">
          <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
          <span className="w-2 h-2 rounded-full bg-purple-900/60" />
          <span className="w-2 h-2 rounded-full bg-purple-900/60" />
        </div>

      </div>
    </section>
  );
};
