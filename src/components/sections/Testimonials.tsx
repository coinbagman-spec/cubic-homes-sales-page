import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "I've owned properties across Queensland for 20 years. Nothing commands the kind of attention — or the Airbnb rates — that our Cubic Home does. Guests ask about the timber before they even see the inside.",
    author: 'Michael R.',
    role: 'Retreat Investor, Yeppoon QLD',
  },
  {
    quote: "The team in Rockhampton understood what we wanted before we could articulate it. The Shou Sugi Ban exterior is genuinely unlike anything else in Central Queensland. It belongs here — and nowhere else.",
    author: 'Sarah & Tom K.',
    role: 'Private Homeowners, Capricorn Coast',
  },
  {
    quote: "We were nervous about modular builds. Cubic Homes changed everything we thought we knew. The craftsmanship, the material quality, the process — it felt like commissioning architecture, not buying a product.",
    author: 'Priya N.',
    role: 'Eco-Luxury Retreat Owner, Rockhampton',
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 bg-background" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24">
          <span className="inline-block text-accent uppercase tracking-[0.3em] text-[10px] mb-6 font-bold">Client Voices</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">What our clients say</h2>
          <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">
            From Rockhampton homeowners to QLD's most acclaimed eco-retreat operators.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="flex flex-col h-full"
            >
              <div className="flex-1 mb-10">
                <p className="text-white text-lg md:text-xl font-serif leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4 pt-8 border-t border-border">
                <div className="w-12 h-12 bg-accent rounded-sm flex items-center justify-center text-accent-foreground font-serif font-bold text-xl">
                  {t.author[0]}
                </div>
                <div>
                  <h4 className="text-white font-medium">{t.author}</h4>
                  <p className="text-accent text-[10px] uppercase tracking-widest font-bold mt-1">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
