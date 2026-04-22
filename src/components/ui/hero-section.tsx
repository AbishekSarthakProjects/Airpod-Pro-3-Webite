/**
 * HeroSection Component
 * 
 * The opening cinematic experience of the page. 
 * Designed to capture attention immediately with massive typography, 
 * sleek product imagery, and smooth spring-based entrance animations.
 */

'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden bg-[#f5f5f7]">
      {/* 
        Ambient Background Glow
        Provides a subtle depth to the flat background, drawing eyes to the center.
      */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-white rounded-full blur-[120px] opacity-80" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        {/* 
          Feature Badge / Tag
          Uses a pulse animation on the dot to signal "active/new" status.
        */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-sm border border-zinc-200 text-[10px] font-semibold tracking-widest text-zinc-500 uppercase mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          NEW · H2 CHIP
        </motion.div>

        {/* 
          Main Hero Heading
          "AirPods Pro 3" with custom tracking and leading for that tight, modern look.
        */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl sm:text-8xl md:text-[140px] font-bold tracking-tighter leading-[0.9] text-zinc-900 mb-6 px-2"
        >
          AirPods Pro
          <br />
          <span className="text-4xl sm:text-6xl md:text-8xl text-zinc-400">
            3
          </span>
        </motion.h1>

        {/* 
          Main Product Image
          Floating centrally with a heavy drop shadow for a premium catalog feel.
        */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="my-12 relative w-full max-w-3xl aspect-[16/9] flex items-center justify-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/airpods-pair.png"
            alt="AirPods Pro 3 Pair"
            className="w-full h-auto object-contain drop-shadow-2xl select-none"
          />
        </motion.div>

        {/* Hero Marketing Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl sm:text-3xl md:text-4xl font-medium text-zinc-500 max-w-2xl mx-auto leading-tight"
        >
          The world&apos;s best in-ear
          <br />
          <span className="text-zinc-900">Active Noise Cancellation.</span>
          <br />
          <span className="text-xl sm:text-2xl text-zinc-400 mt-2 block font-normal">
            Up to 2× more than AirPods Pro 2.
          </span>
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col items-center gap-6"
        >
          <p className="text-sm text-zinc-500 font-medium tracking-tight">From $249</p>
          <div className="flex items-center gap-6">
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 text-sm">
              Buy
            </button>
            <button className="text-blue-600 hover:text-blue-500 text-sm font-semibold flex items-center gap-1 transition-colors group">
              Learn more
              <motion.span
                className="group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              >
                &rsaquo;
              </motion.span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
