import React from 'react';
import { motion } from 'motion/react';

interface PurpleBackgroundSparklesProps {
  position?: 'right' | 'left' | 'center' | 'both';
  className?: string;
}

export const PurpleBackgroundSparkles: React.FC<PurpleBackgroundSparklesProps> = ({
  position = 'right',
  className = ''
}) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}>
      {/* LEFT STATIC GLOW & PROFESSIONAL OPTICAL SPARKLES */}
      {(position === 'left' || position === 'both') && (
        <div className="absolute -left-28 top-1/2 -translate-y-1/2 w-[650px] h-[650px] pointer-events-none">
          {/* Static Deep Purple Atmosphere (100% steady, no pulsing or blinking) */}
          <div
            className="absolute inset-0 rounded-full blur-[140px] opacity-45 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(147,51,234,0.42) 0%, rgba(126,34,206,0.24) 45%, rgba(88,28,135,0.1) 70%, transparent 85%)'
            }}
          />

          {/* Delicate Optical Star Flares (Cinematic, slow, organic shimmer) */}
          <OpticalStar x="46%" y="28%" size={22} delay={0.4} duration={5.2} />
          <OpticalStar x="64%" y="46%" size={28} delay={1.8} duration={6.0} />
          <OpticalStar x="36%" y="62%" size={18} delay={2.9} duration={5.5} />
          <OpticalStar x="72%" y="32%" size={20} delay={3.8} duration={6.4} />

          {/* Micro Starlight Dust Particles */}
          <MicroDust x="42%" y="38%" size={2.5} delay={0.2} duration={4.8} />
          <MicroDust x="60%" y="58%" size={2} delay={1.4} duration={5.6} />
          <MicroDust x="32%" y="48%" size={3} delay={2.3} duration={6.2} />
          <MicroDust x="54%" y="22%" size={2} delay={3.1} duration={5.0} />
          <MicroDust x="70%" y="62%" size={2.5} delay={0.9} duration={5.8} />
        </div>
      )}

      {/* RIGHT STATIC GLOW & PROFESSIONAL OPTICAL SPARKLES */}
      {(position === 'right' || position === 'both') && (
        <div className="absolute -right-28 top-1/2 -translate-y-1/2 w-[650px] h-[650px] pointer-events-none">
          {/* Static Deep Purple Atmosphere (100% steady, no pulsing or blinking) */}
          <div
            className="absolute inset-0 rounded-full blur-[140px] opacity-45 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(147,51,234,0.42) 0%, rgba(126,34,206,0.24) 45%, rgba(88,28,135,0.1) 70%, transparent 85%)'
            }}
          />

          {/* Delicate Optical Star Flares (Cinematic, slow, organic shimmer) */}
          <OpticalStar x="34%" y="32%" size={26} delay={0.6} duration={5.6} />
          <OpticalStar x="56%" y="24%" size={18} delay={2.1} duration={6.2} />
          <OpticalStar x="42%" y="58%" size={28} delay={3.2} duration={5.8} />
          <OpticalStar x="66%" y="44%" size={20} delay={1.3} duration={6.5} />

          {/* Micro Starlight Dust Particles */}
          <MicroDust x="36%" y="44%" size={2.5} delay={0.5} duration={5.0} />
          <MicroDust x="58%" y="36%" size={3} delay={1.6} duration={5.9} />
          <MicroDust x="46%" y="68%" size={2} delay={2.7} duration={5.3} />
          <MicroDust x="28%" y="54%" size={2.5} delay={3.6} duration={6.1} />
          <MicroDust x="64%" y="62%" size={2} delay={1.1} duration={4.7} />
        </div>
      )}

      {/* CENTER STATIC GLOW & PROFESSIONAL OPTICAL SPARKLES */}
      {position === 'center' && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none">
          {/* Static Deep Purple Atmosphere (100% steady) */}
          <div
            className="absolute inset-0 rounded-full blur-[150px] opacity-40 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(147,51,234,0.4) 0%, rgba(126,34,206,0.22) 45%, rgba(88,28,135,0.1) 70%, transparent 85%)'
            }}
          />

          <OpticalStar x="46%" y="36%" size={24} delay={0.5} duration={5.4} />
          <OpticalStar x="58%" y="44%" size={20} delay={2.0} duration={6.1} />
          <OpticalStar x="38%" y="54%" size={22} delay={3.4} duration={5.8} />

          <MicroDust x="43%" y="42%" size={2.5} delay={0.4} duration={5.0} />
          <MicroDust x="54%" y="50%" size={2} delay={1.8} duration={6.2} />
          <MicroDust x="49%" y="62%" size={2.5} delay={3.0} duration={5.5} />
        </div>
      )}
    </div>
  );
};

/* Fine Anamorphic / Optical Starlight Glint (Minimalist & Professional) */
const OpticalStar: React.FC<{
  x: string;
  y: string;
  size: number;
  delay: number;
  duration: number;
}> = ({ x, y, size, delay, duration }) => {
  return (
    <motion.div
      style={{ left: x, top: y }}
      initial={{ opacity: 0.1, scale: 0.8 }}
      animate={{
        opacity: [0.15, 0.75, 0.15],
        scale: [0.85, 1.05, 0.85],
        y: [0, -4, 0]
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        {/* Soft Radial Ambient Glow behind the star point */}
        <circle cx="16" cy="16" r="6" fill="#c084fc" opacity="0.25" />
        
        {/* Very Slender Horizontal Flare Ray */}
        <path
          d="M2 16 H30"
          stroke="url(#glintHGrad)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* Very Slender Vertical Flare Ray */}
        <path
          d="M16 2 V30"
          stroke="url(#glintVGrad)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* Crisp Central Core Point */}
        <circle cx="16" cy="16" r="1.5" fill="#ffffff" />
        <circle cx="16" cy="16" r="2.8" fill="#f5d0fe" opacity="0.6" />

        <defs>
          <linearGradient id="glintHGrad" x1="2" y1="16" x2="30" y2="16" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffffff" stopOpacity="0" />
            <stop offset="0.5" stopColor="#ffffff" stopOpacity="1" />
            <stop stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="glintVGrad" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffffff" stopOpacity="0" />
            <stop offset="0.5" stopColor="#ffffff" stopOpacity="1" />
            <stop stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};

/* Micro Ambient Starlight Dust (Tiny, Organic, Non-distracting) */
const MicroDust: React.FC<{
  x: string;
  y: string;
  size: number;
  delay: number;
  duration: number;
}> = ({ x, y, size, delay, duration }) => {
  return (
    <motion.div
      style={{
        left: x,
        top: y,
        width: `${size}px`,
        height: `${size}px`,
      }}
      initial={{ opacity: 0.15 }}
      animate={{
        opacity: [0.15, 0.65, 0.15],
        y: [0, -5, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className="absolute rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 bg-purple-200 shadow-[0_0_6px_rgba(232,121,249,0.7)]"
    />
  );
};
