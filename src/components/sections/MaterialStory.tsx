import React from 'react';
import { motion } from 'framer-motion';

export const MaterialStory = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary" id="material">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="inline-block text-accent uppercase tracking-[0.3em] text-[10px] mb-6 font-bold">焼き杉 · The Material Story</span>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-10 leading-tight">
              The art of preserving<br />
              wood through fire
            </h2>
            <div className="space-y-8 text-muted-foreground text-base md:text-lg font-light leading-relaxed">
              <p>
                In feudal Japan, craftsmen discovered that flame — the very thing timber fears most — is also its greatest protector. By charring the outer layer of cedar planks, they created a surface so dense and mineralised it repelled weather, pests, and decay for generations.
              </p>
              <p>
                At Cubic Homes, we apply this ancient wisdom to every facade we build — not as a stylistic nod, but as a genuine commitment to materials that mean something. The result is a home whose exterior tells a story of transformation; where destruction and beauty are revealed as the same act.
              </p>
            </div>

            <div className="mt-12 p-8 border-l-2 border-accent bg-background/50 italic">
              <p className="text-white text-lg font-serif mb-4 leading-relaxed">
                "Fire does not destroy this timber. It preserves it — and in doing so, makes it more beautiful than it was before."
              </p>
              <span className="text-accent text-[10px] uppercase tracking-widest font-bold">The Cubic Homes Philosophy</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-12 md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-serif text-white mb-4">Born of Fire</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Shou Sugi Ban — 焼き杉 — is a 300-year-old Japanese technique of slowly charring timber with controlled flame. The surface blackens, crystallises, and transforms into something entirely new: a skin of carbonised beauty.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xl font-serif text-white mb-4">Resilience as Aesthetic</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                The charring process creates a natural barrier against moisture, insects, UV degradation, and fire. In Queensland's harsh subtropical climate, this is not just beautiful — it is engineered longevity without chemicals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-serif text-white mb-4">Ages Backwards</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Where standard cladding fades and fails, Shou Sugi Ban matures. Silver highlights emerge over decades. The grain deepens. Time does not diminish it — it refines it. A home that becomes more distinguished with each passing year.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-serif text-white mb-4">Sustainable by Nature</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                No toxic preservatives, no synthetic coatings. The preservation is the fire itself — a closed-loop process that extends the life of natural timber by 75 years or more. Luxury without compromise to the land.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
