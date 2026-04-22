/**
 * FeatureSection Component
 * 
 * This component showcases the 'Highlights' of the AirPods Pro 3 in an Apple-style Bento Grid.
 * It uses a mix of photographic backgrounds, high-contrast text cards, and smooth scroll-entrance 
 * animations to guide the user through the breakthrough features.
 */

'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function FeatureSection() {
  const sectionRef = useRef(null);
  
  // Hook to trigger animations only when the section is scrolled into view (once)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="features"
      className="relative bg-[#f5f5f7] py-32 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header: Centered typographic intro */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-blue-500 mb-4 font-bold">
            Features
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-zinc-900">
            Get the highlights.
          </h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto font-medium">
            Engineered with breakthrough technology in every detail.
          </p>
        </motion.div>

        {/* 
          Bento Grid Layout
          Uses responsive columns (1 on mobile, 2/3 on desktop) to create a dynamic visual rhythm.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Main Visual Feature: Internal H2 Chip (Spans 2 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-2 bg-white rounded-[2rem] overflow-hidden shadow-sm border border-zinc-200/50 flex flex-col md:flex-row relative group cursor-default"
          >
            {/* Glossy Photographic Background */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/airpods-internal.png" 
              alt="H2 Chip inside AirPods" 
              className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            {/* Overlay Gradient to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/50 to-transparent md:bg-gradient-to-r md:from-white/95 md:via-white/60" />
            
            <div className="relative z-10 p-10 md:p-14 flex flex-col justify-end md:justify-center w-full md:w-2/3 h-[400px]">
              <div className="mb-4">
                <span className="px-3 py-1 bg-black text-white text-[10px] font-bold tracking-widest uppercase rounded-full">
                  H2 Silicon
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4 tracking-tight leading-tight">
                Audio performance. <br />
                Pushed to the edge.
              </h3>
              <p className="text-zinc-600 font-medium leading-relaxed">
                The Apple-designed H2 chip is the force behind AirPods Pro and its advanced audio performance. It works in concert with a custom‑built driver and amplifier to deliver crisp, clear high notes and deep, rich bass.
              </p>
            </div>
          </motion.div>

          {/* Secondary Feature: Apple Card Financing */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-zinc-200/50 p-10 flex flex-col items-center text-center group transition-all hover:shadow-md"
          >
            <div className="h-44 w-full flex items-center justify-center mb-6 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/apple-card.jpg" 
                alt="Apple Card" 
                className="w-[80%] object-contain drop-shadow-xl transition-transform duration-700 -rotate-3 group-hover:scale-110 group-hover:rotate-0 select-none" 
              />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-3 tracking-tight">Pay 0% APR</h3>
            <p className="text-zinc-500 text-sm font-medium leading-relaxed px-4">
              Use Apple Card to pay over time, interest‑free, when you choose Apple Card Monthly Installments.
            </p>
          </motion.div>

          {/* Highlight Stat: 2x Noise Cancellation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-white rounded-[2rem] shadow-sm border border-zinc-200/50 p-10 flex flex-col justify-between hover:border-zinc-300 transition-colors"
          >
            <div>
              <p className="text-[60px] md:text-[72px] font-bold text-zinc-900 leading-none mb-4 -tracking-wider">
                2×
              </p>
              <h3 className="text-xl font-bold text-zinc-900 mb-2 tracking-tight">More Noise Cancellation</h3>
              <p className="text-zinc-500 text-sm font-medium leading-relaxed">
                Next-level Active Noise Cancellation uses advanced computational audio to reduce unwanted noise around you before it reaches your ears.
              </p>
            </div>
            <div className="mt-8 h-10 w-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-[10px] tracking-widest uppercase cursor-pointer hover:opacity-90 transition-opacity">
              Hear The Difference
            </div>
          </motion.div>

          {/* Tertiary Feature: Apple Store In-Person Experience (Spans 2 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="md:col-span-2 bg-[#1d1d1f] rounded-[2rem] overflow-hidden shadow-xl flex flex-col md:flex-row items-center border border-zinc-800 group"
          >
            <div className="p-10 md:p-14 flex-1 text-center md:text-left">
              <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                Experience it in store.
              </h3>
              <p className="text-zinc-400 font-medium mb-8 max-w-sm mx-auto md:mx-0 leading-relaxed">
                Book a personalized demo at an Apple Store near you. Try all the sizes, hear the spatial audio, and experience 2x ANC.
              </p>
              <button className="bg-white text-black px-6 py-3 rounded-full font-bold text-[13px] hover:bg-zinc-200 transition-all active:scale-95">
                Find a Store
              </button>
            </div>
            {/* Visual content for the Retail card */}
            <div className="w-full md:w-1/2 h-[300px] flex items-center justify-center bg-black/40 p-12 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/apple-store.jpg" 
                alt="Apple Store App" 
                className="h-full object-contain drop-shadow-2xl rounded-[2.5rem] transform transition-transform duration-1000 group-hover:scale-105 select-none" 
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
