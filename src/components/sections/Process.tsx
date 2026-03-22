import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Site & Vision Consultation',
    description: 'We begin in Rockhampton — with your land, your landscape, and your life. Our designers map every elevation before a single plan is drawn.',
  },
  {
    title: 'Bespoke Design',
    description: 'No templates. No compromises. Your Cubic Home is drafted from first principles — with Shou Sugi Ban cladding customised to your vision.',
  },
  {
    title: 'Precision Fabrication',
    description: 'Each module is built in our Central Queensland facility with aircraft-grade precision. Every joint and surface detail reviewed.',
  },
  {
    title: 'Delivered Across QLD',
    description: 'From the Capricorn Coast to the Whitsundays — we deliver and install across all of Queensland with a dedicated manager by your side.',
  },
  {
    title: 'Concierge Aftercare',
    description: 'Our relationship does not end at handover. We offer a 10-year structural warranty and ongoing maintenance concierge.',
  },
  {
    title: 'Investment Certainty',
    description: 'Cubic Homes are engineered for premium Airbnb returns and long-term capital appreciation. We connect you with specialist managers.',
  },
];

export const Process = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary" id="features">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-24">
          <span className="inline-block text-accent uppercase tracking-[0.3em] text-[10px] mb-6 font-bold">Our Process · Rockhampton to QLD</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
            From vision to sanctuary —<br />
            every step considered
          </h2>
          <p className="text-muted-foreground text-lg font-light leading-relaxed">
            We are Central Queensland's only specialist in luxury Shou Sugi Ban modular architecture. Our process is unhurried, personal, and built around your outcome.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col"
            >
              <span className="text-accent text-[10px] uppercase tracking-widest font-bold mb-6">Step 0{i + 1}</span>
              <h3 className="text-xl font-serif text-white mb-4 leading-snug">{step.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
