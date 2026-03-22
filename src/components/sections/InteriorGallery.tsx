import React from 'react';
import { motion } from 'framer-motion';

const images = [
  'https://media.base44.com/images/public/69bfad3f4e19936897b18a37/f3d9a362e_unnamed2.jpg',
  'https://media.base44.com/images/public/69bfad3f4e19936897b18a37/8e3f608b7_Gemini_Generated_Image_d827aad827aad8271.png',
  'https://media.base44.com/images/public/69bfad3f4e19936897b18a37/06f2ff8fa_Gemini_Generated_Image_m272xtm272xtm272.png',
  'https://media.base44.com/images/public/69bfad3f4e19936897b18a37/c0d9f941d_unnamed1.jpg',
];

export const InteriorGallery = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="inline-block text-accent uppercase tracking-[0.3em] text-[10px] mb-6 font-bold">焼き杉 · Inside Cubic</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Interior Finishes</h2>
          <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">
            Architectural refinement continues within. Actual Cubic Homes builds showcasing the texture of life elevated.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="relative aspect-square overflow-hidden group cursor-pointer"
            >
              <img
                src={src}
                alt={`Interior finish ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
