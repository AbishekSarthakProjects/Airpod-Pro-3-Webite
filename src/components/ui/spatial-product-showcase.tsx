/**
 * EarbudShowcase Component
 * 
 * An immersive, interactive product deep-dive. 
 * Allows users to toggle between the Left and Right earbuds to see specific technical details.
 * Uses a complex combination of Framer Motion's layout animations and spring physics 
 * to achieve a truly premium, 'app-like' feel.
 */

'use client';

import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  Battery,
  Sliders,
  ChevronRight,
  Zap,
  Bluetooth,
  Wifi,
  Music,
  LucideIcon,
} from 'lucide-react';

// --- Types & Configuration ---

export type ProductId = 'left' | 'right';

export interface FeatureMetric {
  label: string;
  value: number; // Percentage 0-100
  icon: LucideIcon;
}

export interface ProductData {
  id: ProductId;
  label: string;
  title: string;
  description: string;
  image: string;
  colors: {
    gradient: string;
    glow: string;
    ring: string;
  };
  stats: {
    connectionStatus: string;
    batteryLevel: number;
  };
  features: FeatureMetric[];
}

/**
 * AirPods Pro 3 Specific Data
 * This is kept here for easy content updates.
 */
const PRODUCT_DATA: Record<ProductId, ProductData> = {
  left: {
    id: 'left',
    label: 'Left',
    title: 'Spatial Anchor',
    description: 'Powered by the H2 chip, the left AirPod Pro 3 anchors the binaural spatial audio soundstage. Custom high-excursion driver delivers breakthrough low-latency Active Noise Cancellation — removing up to 2× more unwanted noise.',
    image: '/left-airpod-light.png',
    colors: {
      gradient: 'from-blue-200 to-indigo-300',
      glow: 'bg-blue-500',
      ring: 'border-l-blue-400',
    },
    stats: { connectionStatus: 'Connected · H2 CHIP', batteryLevel: 82 },
    features: [
      { label: 'ANC Level', value: 98, icon: Zap },
      { label: 'Spatial Sync', value: 96, icon: Wifi },
    ],
  },
  right: {
    id: 'right',
    label: 'Right',
    title: 'Acoustic Core',
    description: 'The right AirPod Pro 3 houses the primary voice isolation microphones. Seamlessly processes Conversation Awareness, automatically lowering media volume and enhancing voices in front of you.',
    image: '/right-airpod-light.png',
    colors: {
      gradient: 'from-emerald-200 to-teal-300',
      glow: 'bg-emerald-500',
      ring: 'border-r-emerald-400',
    },
    stats: { connectionStatus: 'Connected · BT 5.3', batteryLevel: 85 },
    features: [
      { label: 'Voice Clarity', value: 99, icon: Bluetooth },
      { label: 'Adaptive EQ', value: 94, icon: Music },
    ],
  },
};

// --- Animation Variants ---

const ANIMATIONS = {
  // Container stagger for the text details
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  },
  // Individual item entrance (title, desc, metrics)
  item: {
    hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
    exit: { opacity: 0, y: -10, filter: 'blur(5px)' },
  },
  // Product image entrance - different rotation/offset based on side
  image: (isLeft: boolean): Variants => ({
    initial: {
      opacity: 0,
      scale: 1.5,
      filter: 'blur(15px)',
      rotate: isLeft ? -30 : 30,
      x: isLeft ? -80 : 80,
    },
    animate: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      rotate: 0,
      x: 0,
      transition: { type: 'spring', stiffness: 260, damping: 20 },
    },
    exit: {
      opacity: 0,
      scale: 0.6,
      filter: 'blur(20px)',
      transition: { duration: 0.25 },
    },
  }),
};

// --- Sub-Components ---

/**
 * BackgroundGradient - Large subtle radiant glows that shift color based on active earbud.
 */
const BackgroundGradient = ({ isLeft }: { isLeft: boolean }) => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <motion.div
      animate={{
        background: isLeft
          ? 'radial-gradient(circle at 10% 50%, rgba(59, 130, 246, 0.08), transparent 60%)'
          : 'radial-gradient(circle at 90% 50%, rgba(16, 185, 129, 0.08), transparent 60%)',
      }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0"
    />
  </div>
);

/**
 * ProductVisual - Handles the 3D-feeling image showcase and decorative rings.
 */
const ProductVisual = ({ data, isLeft }: { data: ProductData; isLeft: boolean }) => (
  <motion.div layout="position" className="relative group shrink-0">
    {/* Decorative Spinning Outer Rings */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      className={`absolute inset-[-20%] rounded-full border border-dashed border-zinc-300 ${data.colors.ring}`}
    />
    {/* Subtle Glow Behind Image */}
    <motion.div
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      className={`absolute inset-0 rounded-full bg-gradient-to-br ${data.colors.gradient} blur-2xl opacity-60`}
    />

    {/* Primary Image Container */}
    <div className="relative h-80 w-80 md:h-[450px] md:w-[450px] rounded-full border border-zinc-200 shadow-2xl flex items-center justify-center overflow-hidden bg-white">
      {/* Floating Animation Wrapper */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        className="relative z-10 w-full h-full flex items-center justify-center"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={data.id}
            src={data.image}
            alt={`${data.title}`}
            variants={ANIMATIONS.image(isLeft)}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-8 md:p-12 select-none"
            draggable={false}
          />
        </AnimatePresence>
      </motion.div>
    </div>

    {/* Dynamic Connection/Status Pill */}
    <motion.div
      layout="position"
      className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap z-20"
    >
      <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-zinc-600 bg-white/95 px-4 py-2 rounded-full border border-zinc-200 shadow-sm backdrop-blur select-none">
        <span className={`h-1.5 w-1.5 rounded-full ${data.colors.glow} animate-pulse`} />
        {data.stats.connectionStatus}
      </div>
    </motion.div>
  </motion.div>
);

/**
 * ProductDetails - The right-hand content (or left, when reversed) containing text and feature bars.
 */
const ProductDetails = ({ data, isLeft }: { data: ProductData; isLeft: boolean }) => {
  const alignClass = isLeft ? 'items-start text-left' : 'items-end text-right';
  const flexDirClass = isLeft ? 'flex-row' : 'flex-row-reverse';
  const barColorClass = isLeft ? 'left-0 bg-blue-500' : 'right-0 bg-emerald-500';

  return (
    <motion.div
      variants={ANIMATIONS.container}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`flex flex-col ${alignClass} z-10 relative`}
    >
      <motion.h2 variants={ANIMATIONS.item} className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2">
        {data.label} Earbud
      </motion.h2>
      <motion.h1 variants={ANIMATIONS.item} className="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-b from-zinc-900 to-zinc-500">
        {data.title}
      </motion.h1>
      <motion.p variants={ANIMATIONS.item} className={`text-zinc-600 mb-10 max-w-sm leading-relaxed ${isLeft ? 'mr-auto' : 'ml-auto'}`}>
        {data.description}
      </motion.p>

      {/* Metric/Feature Bars Container */}
      <motion.div variants={ANIMATIONS.item} className="w-full space-y-6 bg-white/60 p-6 rounded-2xl border border-zinc-200/50 shadow-sm backdrop-blur-md">
        {data.features.map((feature, idx) => (
          <div key={feature.label} className="group">
            <div className={`flex items-center justify-between mb-3 text-sm ${flexDirClass}`}>
              <div className={`flex items-center gap-2 text-zinc-700 font-semibold`}>
                <feature.icon size={16} /> <span>{feature.label}</span>
              </div>
              <span className="font-mono text-xs text-zinc-500">{feature.value}%</span>
            </div>
            {/* Animated progress bar background */}
            <div className="relative h-2 w-full bg-zinc-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${feature.value}%` }}
                transition={{ duration: 1, delay: 0.4 + idx * 0.15, ease: [0.25, 1, 0.5, 1] }}
                className={`absolute top-0 bottom-0 ${barColorClass} opacity-90`}
              />
            </div>
          </div>
        ))}

        <div className={`pt-4 flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
          <button type="button" className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-zinc-500 hover:text-zinc-900 transition-colors group">
            <Sliders size={14} /> View Technical Data
            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>

      {/* Battery State */}
      <motion.div variants={ANIMATIONS.item} className={`mt-8 flex items-center gap-3 text-zinc-500 font-medium ${flexDirClass}`}>
        <Battery size={18} className="text-zinc-900" />
        <span className="text-[13px]">{data.stats.batteryLevel}% Charge</span>
      </motion.div>
    </motion.div>
  );
};

/**
 * Switcher - The custom 'Floating Island' style control that switches earbud context.
 */
const Switcher = ({ 
  activeId, 
  onToggle 
}: { 
  activeId: ProductId; 
  onToggle: (id: ProductId) => void 
}) => {
  const options = Object.values(PRODUCT_DATA).map(p => ({ id: p.id, label: p.label }));

  return (
    <div className="absolute bottom-12 inset-x-0 flex justify-center z-50 pointer-events-none px-6">
      <motion.div layout className="pointer-events-auto flex items-center gap-1 p-1.5 rounded-full bg-white/80 backdrop-blur-2xl border border-zinc-200 shadow-xl ring-1 ring-black/5">
        {options.map((opt) => (
          <motion.button
            key={opt.id}
            onClick={() => onToggle(opt.id)}
            whileTap={{ scale: 0.96 }}
            className="relative w-24 h-11 rounded-full flex items-center justify-center text-[13px] font-bold focus:outline-none transition-all"
          >
            {/* Animated Indicator Background */}
            {activeId === opt.id && (
              <motion.div
                layoutId="island-surface"
                className="absolute inset-0 rounded-full bg-zinc-100 border border-zinc-200 shadow-inner"
                transition={{ type: 'spring', stiffness: 220, damping: 22 }}
              />
            )}
            <span className={`relative z-10 transition-colors duration-300 ${activeId === opt.id ? 'text-zinc-900' : 'text-zinc-400 hover:text-zinc-900'}`}>
              {opt.label}
            </span>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

// --- Main Export ---

export default function EarbudShowcase() {
  const [activeSide, setActiveSide] = useState<ProductId>('left');
  
  const currentData = PRODUCT_DATA[activeSide];
  const isLeft = activeSide === 'left';

  return (
    <div className="relative min-h-screen py-24 w-full bg-[#f5f5f7] text-zinc-900 overflow-hidden flex flex-col items-center justify-center border-t border-zinc-200">
      
      {/* Background radial shifts */}
      <BackgroundGradient isLeft={isLeft} />

      <main className="relative z-10 w-full px-6 py-8 flex flex-col justify-center max-w-7xl mx-auto">
        <motion.div
          layout
          transition={{ type: 'spring', bounce: 0, duration: 1 }}
          className={`flex flex-col md:flex-row items-center justify-center gap-12 md:gap-32 lg:gap-48 w-full ${
            isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
          }`}
        >
          {/* Section: Product Visual Representation */}
          <div className="w-full md:w-1/2 flex justify-center">
            <ProductVisual data={currentData} isLeft={isLeft} />
          </div>

          {/* Section: Textual Technical Details */}
          <motion.div layout="position" className="w-full md:w-1/2 flex justify-center">
            <div className="w-full max-w-md">
              <AnimatePresence mode="wait">
                <ProductDetails 
                  key={activeSide} // Key ensures exit/entrance transition occurs on data swap
                  data={currentData} 
                  isLeft={isLeft} 
                />
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </main>

      {/* Global Context Switcher */}
      <Switcher activeId={activeSide} onToggle={setActiveSide} />
    </div>
  );
}
