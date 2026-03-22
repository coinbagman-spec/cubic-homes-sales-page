import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const FinalCTA = () => {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden" id="contact">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://v3b.fal.media/files/b/0a932253/2Z3MLo66PIHW_5T18XY6e_j72MB9Yh.png"
          alt="Shou Sugi Ban Texture Background"
          className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-black/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight italic font-sans"
        >
          Ready to Redefine Your Way of Living?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed font-sans"
        >
          Join the growing community of Australians choosing architectural freedom with Cubic Homes. Every journey begins with a single conversation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button
            size="lg"
            variant="accent"
            className="rounded-full px-12 py-8 text-xl font-medium tracking-wide shadow-2xl hover:shadow-accent/40 transition-all hover:scale-110 active:scale-95 group"
          >
            Book Your Free Consultation
            <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
          </Button>
          
          <button className="text-white font-bold tracking-widest uppercase py-4 border-b-2 border-transparent hover:border-white transition-all text-sm">
             Explore Floorplans
          </button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
    </section>
  );
};
