/**
 * SpecsSection Component
 * 
 * A clean, detailed table of technical specifications for the AirPods Pro 3.
 * Modeled after the 'Tech Specs' pages on apple.com, it uses a categorized grid 
 * with a consistent visual rhythm and subtle reveal animations.
 */

'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * Technical Specifications Data
 * Categorized list for easy reading and maintenance.
 */
const specs = [
  {
    category: 'Audio Technology',
    items: [
      'Custom high-excursion Apple driver',
      'Custom high dynamic range amplifier',
      'Active Noise Cancellation (2× more than AirPods Pro 2)',
      'Adaptive Audio — Transparency + ANC',
      'Conversation Awareness',
      'Voice Isolation',
      'Personalized Spatial Audio with dynamic head tracking',
      'Adaptive EQ',
      'Studio-quality audio recording',
    ],
  },
  {
    category: 'Hearing Health',
    items: [
      'Hearing Test — scientifically validated',
      'Hearing Aid — FDA authorized',
      'Automatic Conversation Boost',
      'Hearing Protection (up to 110 dBA)',
      'Live Translation — powered by Apple Intelligence',
    ],
  },
  {
    category: 'Sensors & Controls',
    items: [
      'Dual beamforming microphones',
      'Inward-facing microphone',
      'Skin-detect sensor',
      'Motion-detecting accelerometer',
      'Speech-detecting accelerometer',
      'Heart rate sensor for workouts (256 Hz)',
      'Touch control with swipe volume',
    ],
  },
  {
    category: 'Battery',
    items: [
      'Up to 8 hours listening (ANC enabled)',
      'Up to 10 hours (Hearing Aid in Transparency)',
      'Up to 24 hours total with charging case',
      '5 minutes charge = 1 hour listening',
    ],
  },
  {
    category: 'Connectivity & Chip',
    items: [
      'Apple H2 headphone chip',
      'Apple 2nd-gen Ultra Wideband chip in case',
      'Bluetooth 5.3',
      'IP57 dust, sweat, and water resistant',
      'MagSafe + Qi + USB-C charging',
    ],
  },
  {
    category: 'Size & Weight',
    items: [
      'Each earbud: 1.22 × 0.76 × 1.06 in (5.55 g)',
      'MagSafe Case: 1.86 × 2.45 × 0.86 in (43.99 g)',
      '5 ear tip sizes (XXS, XS, S, M, L)',
    ],
  },
];

export default function SpecsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="specs"
      className="relative bg-[#ffffff] py-32 px-6 border-t border-zinc-200"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-400 mb-4 font-bold">
            Technical Specifications
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900">
            Tech Specs
          </h2>
        </motion.div>

        {/* 
          Categorized Spec Grid
          Iterates through the data list to build the rows.
          Uses a consistent 2-column layout on desktop for better readability.
        */}
        <div className="space-y-0">
          {specs.map((section, i) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border-t border-zinc-200 py-10 grid grid-cols-1 md:grid-cols-[240px_1fr] gap-4 md:gap-12"
            >
              {/* Category Label */}
              <h3 className="text-[12px] font-bold text-zinc-900 uppercase tracking-widest pt-1">
                {section.category}
              </h3>
              {/* Category Items List */}
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="text-[13px] md:text-sm text-zinc-600 font-medium leading-relaxed flex items-start gap-2.5"
                  >
                    {/* Minimalist Bullet Point */}
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
