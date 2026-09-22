import React, { useId } from 'react';
import { cn } from '../lib/utils';

interface BredariolLogoProps {
  variant?: 'full' | 'horizontal' | 'symbol';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  withGlow?: boolean;
}

/**
 * Official Bredariol Digital Logo Component
 * Precision-sculpted modern "B" monogram with golden ratio curves,
 * dynamic cyber-blade illumination, and authoritative typography.
 */
export const BredariolLogo: React.FC<BredariolLogoProps> = ({
  variant = 'full',
  size = 'md',
  className,
  withGlow = false,
}) => {
  const logoId = useId().replace(/:/g, '');

  // Standalone vector symbol glyph
  const SymbolGlyph = ({ className: svgClass }: { className?: string }) => (
    <div className={cn("relative flex items-center justify-center shrink-0", svgClass)}>
      {withGlow && (
        <div 
          className="absolute inset-0 rounded-full blur-2xl opacity-70 pointer-events-none scale-125"
          style={{ background: 'radial-gradient(circle, #ab47bc 0%, #7b1fa2 60%, transparent 100%)' }}
        />
      )}
      <svg
        viewBox="0 0 320 360"
        className="w-full h-full drop-shadow-[0_0_20px_rgba(168,85,247,0.45)] select-none transition-transform duration-300 group-hover:scale-105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Master Body Gradient: Electric Violet to Deep Imperial Purple */}
          <linearGradient id={`grad-${logoId}`} x1="52" y1="36" x2="276" y2="332" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#e9d5ff" />
            <stop offset="18%" stopColor="#c084fc" />
            <stop offset="48%" stopColor="#9333ea" />
            <stop offset="78%" stopColor="#6b21a8" />
            <stop offset="100%" stopColor="#3b0764" />
          </linearGradient>

          {/* Left Spine Pillar Gradient */}
          <linearGradient id={`spine-${logoId}`} x1="52" y1="36" x2="106" y2="332" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#f5d0fe" />
            <stop offset="22%" stopColor="#c084fc" />
            <stop offset="65%" stopColor="#9333ea" />
            <stop offset="100%" stopColor="#4c1d95" />
          </linearGradient>

          {/* Cyber Diagonal Light Blade (45-degree digital signature) */}
          <linearGradient id={`blade-${logoId}`} x1="40" y1="260" x2="240" y2="60" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
            <stop offset="30%" stopColor="#f0abfc" stopOpacity="0.75" />
            <stop offset="70%" stopColor="#c084fc" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#9333ea" stopOpacity="0" />
          </linearGradient>

          {/* Top Shoulder Specular Highlight */}
          <linearGradient id={`sheen-${logoId}`} x1="52" y1="36" x2="220" y2="50" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="45%" stopColor="#f5d0fe" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#c084fc" stopOpacity="0" />
          </linearGradient>

          {/* Deep Ambient Neon Glow Filter */}
          <filter id={`ambient-${logoId}`} x="-25%" y="-25%" width="150%" height="150%" filterUnits="userSpaceOnUse">
            <feGaussianBlur stdDeviation="16" result="blur" />
          </filter>

          {/* Exact Silhouette Clip Path */}
          <clipPath id={`clip-${logoId}`}>
            <path fillRule="evenodd" clipRule="evenodd"
              d="
                M 66 36
                H 186
                C 236 36 264 64 264 106
                C 264 140 238 164 196 170
                C 246 176 274 204 274 252
                C 274 298 238 332 188 332
                H 66
                C 58 332 52 326 52 318
                V 50
                C 52 42 58 36 66 36
                Z
                M 106 84
                H 180
                C 204 84 216 94 216 106
                C 216 118 204 128 180 128
                H 106
                V 84
                Z
                M 106 196
                H 184
                C 212 196 226 210 226 252
                C 226 270 212 284 184 284
                H 106
                V 196
                Z
              "
            />
          </clipPath>
        </defs>

        {/* 0. Ambient Neon Atmosphere Behind */}
        <path
          d="M 64 44 H 184 C 230 44 260 70 260 108 C 260 140 238 164 198 170 C 244 176 270 204 270 252 C 270 296 236 324 188 324 H 64 V 44 Z"
          fill="#a855f7"
          opacity="0.32"
          filter={`url(#ambient-${logoId})`}
        />

        {/* 1. Base Solid Architectural Silhouette */}
        <path fillRule="evenodd" clipRule="evenodd"
          d="
            M 66 36
            H 186
            C 236 36 264 64 264 106
            C 264 140 238 164 196 170
            C 246 176 274 204 274 252
            C 274 298 238 332 188 332
            H 66
            C 58 332 52 326 52 318
            V 50
            C 52 42 58 36 66 36
            Z
            M 106 84
            H 180
            C 204 84 216 94 216 106
            C 216 118 204 128 180 128
            H 106
            V 84
            Z
            M 106 196
            H 184
            C 212 196 226 210 226 252
            C 226 270 212 284 184 284
            H 106
            V 196
            Z
          "
          fill={`url(#grad-${logoId})`}
        />

        {/* 2. Clipped Interior Architectural Layers & Cyber Accents */}
        <g clipPath={`url(#clip-${logoId})`}>
          {/* Left Spine Pillar Shading */}
          <rect x="52" y="36" width="54" height="296" fill={`url(#spine-${logoId})`} opacity="0.6" />
          
          {/* Subtle Spine Divider Line */}
          <line x1="106" y1="36" x2="106" y2="332" stroke="#e9d5ff" strokeOpacity="0.25" strokeWidth="1.5" />

          {/* Sleek 45-Degree Cyber Blade Light Beam (Cutting Across at 45 Degrees) */}
          <polygon
            points="20,290 190,120 230,120 60,290"
            fill={`url(#blade-${logoId})`}
          />

          {/* Top Shoulder Specular Sheen */}
          <path
            d="M 52 36 H 186 C 230 36 256 60 262 96 C 252 52 224 40 184 40 H 52 Z"
            fill={`url(#sheen-${logoId})`}
          />

          {/* Waist Subtle Lighting Accent */}
          <line x1="106" y1="170" x2="196" y2="170" stroke="#f5d0fe" strokeOpacity="0.45" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );

  // Variant: Symbol Only
  if (variant === 'symbol') {
    const sizeClasses = {
      sm: 'w-7 h-8',
      md: 'w-10 h-11',
      lg: 'w-16 h-18',
      xl: 'w-24 h-28',
      '2xl': 'w-36 h-40',
    };
    return <SymbolGlyph className={cn(sizeClasses[size], className)} />;
  }

  // Variant: Horizontal Lockup (for Navbar & Footer)
  if (variant === 'horizontal') {
    const symbolSizes = {
      sm: 'w-7 h-8',
      md: 'w-9 h-10',
      lg: 'w-12 h-14',
      xl: 'w-16 h-18',
      '2xl': 'w-20 h-22',
    };

    const textSizes = {
      sm: 'text-sm tracking-[0.14em]',
      md: 'text-base sm:text-lg tracking-[0.16em]',
      lg: 'text-xl sm:text-2xl tracking-[0.18em]',
      xl: 'text-3xl tracking-[0.2em]',
      '2xl': 'text-4xl tracking-[0.22em]',
    };

    const subSizes = {
      sm: 'text-[9px] tracking-[0.32em]',
      md: 'text-[10px] sm:text-[11px] tracking-[0.38em]',
      lg: 'text-xs sm:text-sm tracking-[0.45em]',
      xl: 'text-sm tracking-[0.5em]',
      '2xl': 'text-base tracking-[0.55em]',
    };

    return (
      <div className={cn("inline-flex items-center gap-3 cursor-pointer group select-none", className)}>
        <SymbolGlyph className={symbolSizes[size]} />
        <div className="flex flex-col justify-center">
          <span className={cn("font-black text-white uppercase font-['Space_Grotesk'] leading-none transition-colors group-hover:text-purple-200 drop-shadow-sm", textSizes[size])}>
            BREDARIOL
          </span>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="h-[1.5px] w-3 bg-purple-500/80 rounded-full" />
            <span className={cn("font-bold text-purple-400 uppercase leading-none font-['Space_Grotesk']", subSizes[size])}>
              DIGITAL
            </span>
            <span className="h-[1.5px] w-3 bg-purple-500/80 rounded-full" />
          </div>
        </div>
      </div>
    );
  }

  // Variant: Full Stacked Lockup (Exact match to screenshot)
  const fullSymbolSizes = {
    sm: 'w-12 h-14',
    md: 'w-20 h-24',
    lg: 'w-32 h-36',
    xl: 'w-44 h-48',
    '2xl': 'w-60 h-68',
  };

  const titleSizes = {
    sm: 'text-lg tracking-[0.14em]',
    md: 'text-2xl tracking-[0.18em]',
    lg: 'text-4xl tracking-[0.22em]',
    xl: 'text-5xl sm:text-6xl tracking-[0.24em]',
    '2xl': 'text-6xl sm:text-7xl tracking-[0.26em]',
  };

  const subSizes = {
    sm: 'text-[10px] tracking-[0.38em]',
    md: 'text-xs sm:text-sm tracking-[0.46em]',
    lg: 'text-base sm:text-lg tracking-[0.55em]',
    xl: 'text-xl sm:text-2xl tracking-[0.62em]',
    '2xl': 'text-2xl sm:text-3xl tracking-[0.7em]',
  };

  return (
    <div className={cn("flex flex-col items-center justify-center text-center select-none group", className)}>
      {/* Centered Symbol */}
      <SymbolGlyph className={fullSymbolSizes[size]} />

      {/* Main Brand Title: BREDARIOL in Pure White */}
      <h1 className={cn("font-extrabold text-white uppercase font-['Space_Grotesk'] mt-4 leading-none tracking-widest drop-shadow-[0_2px_15px_rgba(255,255,255,0.15)]", titleSizes[size])}>
        BREDARIOL
      </h1>

      {/* Subtitle: — DIGITAL — with matching purple lines */}
      <div className="flex items-center justify-center gap-2.5 sm:gap-4 w-full mt-2.5">
        <span className="h-[2px] w-8 sm:w-16 bg-gradient-to-r from-transparent via-purple-500 to-purple-400 rounded-full" />
        <span className={cn("font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-400 to-fuchsia-300 uppercase leading-none font-['Space_Grotesk']", subSizes[size])}>
          DIGITAL
        </span>
        <span className="h-[2px] w-8 sm:w-16 bg-gradient-to-l from-transparent via-purple-500 to-purple-400 rounded-full" />
      </div>
    </div>
  );
};
