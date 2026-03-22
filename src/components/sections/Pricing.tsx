import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Essential",
    price: "$129,000",
    description: "Compact, efficient, and beautifully minimal. Perfect for a studio or weekend retreat.",
    features: ["Shou Sugi Ban Accents", "Off-Grid Solar Ready", "Premium Kitchenette", "Built-in Bed Suite", "7m x 2.4m Layout"]
  },
  {
    name: "Signature",
    price: "$179,000",
    description: "The complete Cubic experience. Full-char timber cladding and luxury internal finishes.",
    features: ["Full Shou Sugi Ban Cladding", "Integrated Smart Home System", "Luxe Bathroom with Soaking Tub", "Australian Hardwood Interiors", "9m x 3m Expansive Layout", "Custom Cabinetry"],
    featured: true
  },
  {
    name: "Architect",
    price: "Custom",
    description: "A completely bespoke architectural statement tailored to your specific land and lifestyle.",
    features: ["Bespoke Floor Plans", "Choice of Premium Claddings", "Multi-Unit Configurations", "Site-Specific Engineering", "Advanced Off-Grid Solutions", "Premium Decking Modules"]
  }
];

export const Pricing = () => {
  return (
    <section className="py-24 md:py-32 bg-background" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">Investment in Architectural Freedom</h2>
          <p className="text-muted-foreground text-lg">
            Choose a foundation for your tiny home journey. Every price includes structural engineering and premium Australian materials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`relative flex flex-col p-12 rounded-3xl border transition-all duration-500 hover:shadow-2xl hover:scale-105 group ${
                plan.featured ? "bg-primary text-primary-foreground border-primary shadow-xl" : "bg-white border-border text-foreground hover:border-accent"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-accent text-white px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-serif mb-4 group-hover:text-accent transition-colors duration-500">{plan.name}</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl md:text-5xl font-serif font-bold">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-sm opacity-60">AUD inc. GST</span>}
              </div>
              <p className={`mb-10 text-lg leading-relaxed ${plan.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {plan.description}
              </p>
              
              <ul className="space-y-6 mb-12 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-4">
                    <Check size={20} className={`mt-1 shrink-0 ${plan.featured ? "text-accent" : "text-accent"}`} />
                    <span className="text-sm leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.featured ? "accent" : "outline"}
                size="lg"
                className={`w-full rounded-full py-8 text-lg font-medium tracking-wide shadow-md transition-all hover:scale-105 active:scale-95 ${
                  plan.featured ? "" : "hover:bg-accent hover:text-white"
                }`}
              >
                Request a Custom Quote
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
