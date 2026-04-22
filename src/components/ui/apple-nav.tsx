/**
 * AppleNav Component
 * 
 * This is a highly-responsive, sticky navigation bar that replicates the premium feel of apple.com.
 * It features a subtle backdrop-blur effect that kicks in after the user scrolls down 20px,
 * giving it that signature glassy minimalist aesthetic.
 */

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * AppleLogo - Inline SVG to keep the codebase clean and avoid extra network requests.
 */
function AppleLogo({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 17 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15.5833 6.91667C15.4167 7.00001 13.3333 8.12501 13.3333 10.6667C13.3333 13.5833 16 14.5833 16.0833 14.6042C16.0833 14.6667 15.6667 16.0417 14.6667 17.4583C13.7917 18.6875 12.875 19.9167 11.5 19.9167C10.125 19.9167 9.75 19.125 8.16667 19.125C6.625 19.125 6.04167 19.9583 4.79167 19.9583C3.54167 19.9583 2.625 18.8125 1.625 17.4167C0.458333 15.7708 -0.5 13.1667 -0.5 10.7083C-0.5 7.041 1.83333 5.08334 4.125 5.08334C5.45833 5.08334 6.58333 5.95834 7.41667 5.95834C8.20833 5.95834 9.5 5.04167 11.0417 5.04167C11.625 5.04167 13.7083 5.08334 15.5833 6.91667ZM11.0833 3.33334C11.7083 2.58334 12.1667 1.54167 12.1667 0.500006C12.1667 0.354173 12.1562 0.208339 12.125 0.083340C11.0938 0.125006 9.875 0.770839 9.125 1.62501C8.54167 2.27084 7.95833 3.31251 7.95833 4.37501C7.95833 4.54167 7.97917 4.70834 7.98958 4.77084C8.0625 4.79167 8.17708 4.81251 8.29167 4.81251C9.20833 4.81251 10.4167 4.20834 11.0833 3.33334Z" />
    </svg>
  );
}

// Navigation links configuration for easy maintenance
const navLinks = [
  { label: 'Overview', href: '#' },
  { label: 'Features', href: '#features' },
  { label: 'Spatial Audio', href: '#spatial' },
  { label: 'Tech Specs', href: '#specs' },
];

export default function AppleNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hook to handle window scroll events and toggle the navigation visual state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 text-zinc-900 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-zinc-200 shadow-sm py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Main Logo - Link to landing home */}
          <Link href="/" className="flex-shrink-0 z-50">
            <AppleLogo className="h-5 w-auto" />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[11px] font-semibold tracking-wide text-zinc-500 hover:text-zinc-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Action Icons (Cart/Search mockup) & Mobile Toggle */}
          <div className="flex items-center gap-4 z-50">
            <Link
              href="#"
              className="text-[11px] font-semibold text-zinc-500 hover:text-zinc-900 transition-colors hidden sm:block"
            >
              Buy
            </Link>
            <button className="text-zinc-500 hover:text-zinc-900 transition-colors opacity-80 hover:opacity-100">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 4.54545C13 3.14 11.879 2 10.5 2C9.121 2 8 3.14 8 4.54545V5H5V14H16V5H13V4.54545ZM11.889 4.54545V5H9.111V4.54545C9.111 3.76636 9.733 3.13273 10.5 3.13273C11.267 3.13273 11.889 3.76636 11.889 4.54545ZM14.889 12.8673H6.111V6.13273H14.889V12.8673Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            {/* Mobile Hamburger Menu Toggle */}
            <button
              className="md:hidden text-zinc-900 ml-2 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                {mobileMenuOpen ? (
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                ) : (
                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Screen-filling Mobile Navigation Expansion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-0 left-0 w-full bg-white h-screen z-40 px-8 pt-24 overflow-hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-2xl font-semibold text-zinc-900 border-b border-zinc-100 pb-4 block hover:text-blue-500 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
