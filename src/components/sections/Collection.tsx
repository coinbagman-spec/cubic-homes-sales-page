import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const models = [
  {
    name: 'The Ember',
    tagline: 'For the solitary visionary',
    description: 'A singular architectural statement. Compact in footprint, limitless in character.',
    price: '$185K',
    image: 'https://media.base44.com/images/public/69bfad3f4e19936897b18a37/f3d9a362e_unnamed2.jpg',
  },
  {
    name: 'The Sovereign',
    tagline: 'The flagship sanctuary',
    description: 'Our most expansive dwelling. Where Japanese craftsmanship meets Queensland luxury.',
    price: '$295K',
    image: 'https://media.base44.com/images/public/69bfad3f4e19936897b18a37/a209d08f4_unnamed.jpg',
  },
  {
    name: 'The Refuge',
    tagline: 'Retreat. Restore. Return.',
    description: 'Designed for eco-luxury retreats and premium Airbnb investment properties across QLD.',
    price: '$235K',
    image: 'https://media.base44.com/images/public/69bfad3f4e19936897b18a37/c0d9f941d_unnamed1.jpg',
  },
];

export const Collection = () => {
  return (
    <section className="py-24 md:py-32 bg-background" id="models">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-20">
          <span className="inline-block text-accent uppercase tracking-[0.3em] text-[10px] mb-6 font-bold">焼き杉 · Our Collection</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
            Architectural cabins<br />
            forged in fire
          </h2>
          <p className="text-muted-foreground text-lg font-light leading-relaxed max-w-xl">
            Each Cubic Home is a bespoke commission — built to your land, your vision, and your life. No two homes are identical. Every surface tells a story only fire can write.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {models.map((model, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="flex flex-col group"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-8">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-accent mb-4 font-bold">{model.tagline}</span>
              <h3 className="text-3xl font-serif text-white mb-4">{model.name}</h3>
              <p className="text-muted-foreground text-sm font-light leading-relaxed mb-8 flex-1">
                {model.description}
              </p>
              <div className="flex items-center justify-between pt-8 border-t border-border">
                <span className="text-lg font-serif text-white">From {model.price}</span>
                <a
                  href="#contact"
                  className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent hover:text-white transition-colors"
                >
                  Commission →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
