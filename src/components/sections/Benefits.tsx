import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Zap, Home } from 'lucide-react';

const benefits = [
  {
    icon: <Layout className="w-8 h-8" />,
    title: "Architectural Excellence",
    description: "Every Cubic Home is a bespoke statement of design. We use precise CAD modeling and artisan craftsmanship to create spaces that feel expansive yet intimate."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Sustainable Luxury",
    description: "Leveraging the ancient durability of Shou Sugi Ban timber, our homes are built to withstand the harshest Australian conditions while using eco-conscious materials."
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: "Freedom to Build",
    description: "From NSW to VIC to QLD, we handle the complex council approvals and compliance work, allowing you to focus on the freedom that comes with tiny home living."
  }
];

export const Benefits = () => {
  return (
    <section className="py-24 md:py-32 bg-background overflow-hidden" id="benefits">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8"
          >
            Tired of compromising between location, affordability, and architectural integrity?
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-accent mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-8 p-6 bg-secondary/50 rounded-full text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 transform group-hover:scale-110 shadow-sm">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-serif mb-6">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
