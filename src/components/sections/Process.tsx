import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Enquire & Consult",
    description: "Share your vision, land details, and budget. Our experts provide a tailored assessment of your architectural goals."
  },
  {
    number: "02",
    title: "Design & Approve",
    description: "Our architects create your custom plans. We handle all council approvals and compliance paperwork for a stress-free process."
  },
  {
    number: "03",
    title: "Build & Deliver",
    description: "Each home is meticulously crafted in our Brisbane workshop using artisan techniques, then delivered across Australia."
  }
];

export const Process = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/20" id="process">
      <div className="container mx-auto px-4">
        <div className="mb-24 flex flex-col md:flex-row items-end justify-between gap-8 max-w-5xl mx-auto">
          <div className="flex-1">
             <h2 className="text-3xl md:text-5xl font-serif leading-tight">Your Pathway to<br />Tiny Home Living</h2>
          </div>
          <div className="flex-1 md:text-right">
             <p className="text-muted-foreground text-lg italic font-sans">A seamless journey from concept to completion.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative">
          {/* Vertical line for mobile, horizontal for desktop */}
          <div className="hidden md:block absolute top-10 left-0 w-full h-px bg-border z-0" />
          
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative z-10 flex flex-col group"
            >
              <div className="w-20 h-20 bg-background border border-border rounded-full flex items-center justify-center text-accent text-3xl font-serif font-bold mb-10 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:-translate-y-2">
                {step.number}
              </div>
              <h3 className="text-2xl font-serif mb-6 group-hover:text-accent transition-colors duration-500">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
