import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://v3b.fal.media/files/b/0a932252/Bq8fefW1EAKJUPVJ39t8Q_TGqcsil7.png"
          alt="Architectural Tiny Home in Australian Landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-left max-w-7xl pt-20 lg:pt-0">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-block text-accent uppercase tracking-[0.3em] text-[10px] mb-6 font-bold">焼き杉 · Shou Sugi Ban Specialists</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] mb-8">
            Where fire meets<br />
            timber. Where craft<br />
            becomes home.
          </h1>

          <p className="text-base md:text-lg text-white/70 mb-12 max-w-xl font-sans leading-relaxed font-light">
            Cubic Homes builds architectural cabins clad in authentic Shou Sugi Ban — the ancient Japanese art of charring timber into a surface of extraordinary beauty, resilience, and character. Crafted in Rockhampton for Queensland's most discerning landscapes.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Button
              variant="accent"
              className="rounded-none px-10 py-7 text-xs uppercase tracking-widest font-bold bg-accent text-accent-foreground hover:bg-white hover:text-black transition-all duration-500"
            >
              View Our Sanctuaries
            </Button>
            <Button
              variant="outline"
              className="rounded-none px-10 py-7 text-xs uppercase tracking-widest font-bold border-white/20 bg-transparent text-white hover:bg-white hover:text-black transition-all duration-500"
            >
              The Material Story
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-24 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};
