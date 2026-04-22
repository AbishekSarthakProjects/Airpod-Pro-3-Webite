/**
 * AirPods Pro 3 - Main Product Landing Page
 * 
 * This is the main entry point for the AirPods Pro 3 showcase.
 * It assembles all the high-end Apple-inspired components into a single, seamless scroll experience.
 */

import AppleNav from "@/components/ui/apple-nav";
import HeroSection from "@/components/ui/hero-section";
import EarbudShowcase from "@/components/ui/spatial-product-showcase";
import FeatureSection from "@/components/ui/feature-section";
import SpecsSection from "@/components/ui/specs-section";
import AppleFooter from "@/components/ui/apple-footer";

export default function Home() {
  return (
    <main className="relative bg-white overflow-x-hidden">
      {/* 
        Sticky Navigation Bar
        Handles scroll-triggered backdrop blur and transparency
      */}
      <AppleNav />

      {/* 
        Hero Section
        Typographic-led opening with high-quality product imagery
      */}
      <HeroSection />

      {/* 
        Interactive Spatial Showcase
        The core interactive component showing left/right earbud details with spring physics
      */}
      <section id="spatial">
        <EarbudShowcase />
      </section>

      {/* 
        Key Features Bento Grid
        Highlighting high-level features like H2 chip, noise cancellation, etc.
      */}
      <FeatureSection />

      {/* 
        Technical Detailed Specs
        Apple-style categorized spec list
      */}
      <SpecsSection />

      {/* 
        Global Footer
        Complete with Apple-style resource links
      */}
      <AppleFooter />
    </main>
  );
}
