import React from 'react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'The Ember',
    price: '$185,000',
    description: 'A singular architectural sanctuary for solo living, creative studios, or high-yield short stays.',
    features: [
      '38–55 sqm floor plan',
      '1 bedroom with ensuite',
      'Full kitchen — premium appliances',
      'Authentic Shou Sugi Ban cladding',
      'Off-grid solar & water ready',
      'Delivered & installed across QLD',
    ],
  },
  {
    name: 'The Sovereign',
    price: '$295,000',
    description: 'Our flagship commission — the highest expression of Shou Sugi Ban luxury modular architecture.',
    features: [
      '65–90 sqm floor plan',
      '2 bedrooms + study/retreat',
      'Chef kitchen with stone benchtops',
      'Solar+ with battery storage',
      'Premium interior finish package',
      'Landscaping consultation included',
    ],
    highlight: 'Most Commissioned',
  },
  {
    name: 'The Refuge',
    price: '$235,000',
    description: 'Crafted for eco-luxury retreat owners and Airbnb investors seeking architectural distinction.',
    features: [
      '50–70 sqm floor plan',
      '1–2 bedrooms configurable',
      'Biophilic living & dining space',
      'Net-zero energy package',
      'Shou Sugi Ban feature walls (interior)',
      '10-year structural warranty',
    ],
  },
];

export const TransparentPricing = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary" id="pricing">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-24">
          <span className="inline-block text-accent uppercase tracking-[0.3em] text-[10px] mb-6 font-bold">Investment · Transparent Pricing</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
            Your sanctuary,<br />
            fully costed
          </h2>
          <p className="text-muted-foreground text-lg font-light">
            All-inclusive pricing: design, Shou Sugi Ban cladding, fabrication, delivery and installation across Queensland. No hidden costs. No surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col bg-background p-10 border border-border relative group"
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-4 py-1 text-[10px] uppercase tracking-widest font-bold">
                  {plan.highlight}
                </div>
              )}
              <h3 className="text-2xl font-serif text-white mb-6">{plan.name}</h3>
              <div className="mb-8">
                <span className="text-sm text-muted-foreground block mb-1">From</span>
                <span className="text-4xl font-serif text-white">{plan.price}</span>
                <span className="text-[10px] text-accent uppercase tracking-widest font-bold block mt-2">incl. delivery & install</span>
              </div>
              <p className="text-sm text-muted-foreground font-light leading-relaxed mb-10">
                {plan.description}
              </p>
              <ul className="space-y-4 mb-12 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="text-xs text-white/70 flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-block text-center py-5 border border-accent/20 text-accent text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-accent hover:text-accent-foreground transition-all duration-500"
              >
                Begin My Commission
              </a>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xs text-muted-foreground italic">
            All pricing is indicative and subject to site assessment. Finance options available. Built in Rockhampton, QLD.
          </p>
        </div>
      </div>
    </section>
  );
};
