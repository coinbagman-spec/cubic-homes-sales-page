import React from 'react';
import { motion } from 'framer-motion';

export const ShouSugiBan = () => {
  return (
    <section className="py-24 md:py-32 bg-background overflow-hidden" id="shou-sugi-ban">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[400px] md:h-[600px] group overflow-hidden rounded-2xl shadow-xl"
          >
            <img
              src="https://v3b.fal.media/files/b/0a932253/2Z3MLo66PIHW_5T18XY6e_j72MB9Yh.png"
              alt="Macro texture of charred Shou Sugi Ban timber"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:opacity-0" />
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-8">
              The Art of Shou Sugi Ban
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                At the heart of every Cubic Home lies the ancient Japanese technique of <span className="text-foreground font-medium italic">Shou Sugi Ban</span>. This centuries-old process involves carefully charring timber to create a distinctive, carbonised surface that is as durable as it is beautiful.
              </p>
              <p>
                In the harsh Australian landscape, this technique offers unparalleled benefits. The charred layer acts as a natural barrier against UV rays, rain, and insects, while significantly enhancing fire resistance—a crucial consideration for bushland locations.
              </p>
              <p>
                Maintenance-free and aesthetically profound, our signature Shou Sugi Ban finish develops a unique patina over time, ensuring your home remains a timeless architectural statement for generations to come.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-border pt-12">
              <div>
                <h4 className="text-foreground font-serif text-xl mb-2">Resilient</h4>
                <p className="text-sm">Naturally resistant to decay, water, and pests.</p>
              </div>
              <div>
                <h4 className="text-foreground font-serif text-xl mb-2">Sustainable</h4>
                <p className="text-sm">Eco-friendly preservation without toxic chemicals.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
