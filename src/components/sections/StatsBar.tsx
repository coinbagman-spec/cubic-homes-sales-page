import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Authentic Shou Sugi Ban', value: '100%' },
  { label: 'Central Queensland Built', value: 'QLD' },
  { label: 'Timber Longevity', value: '75yr+' },
];

export const StatsBar = () => {
  return (
    <section className="bg-background border-y border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 items-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center md:items-start text-center md:text-left gap-2"
            >
              <span className="text-4xl md:text-5xl font-serif font-bold text-accent">{stat.value}</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
